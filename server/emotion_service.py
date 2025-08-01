import json
import sys
from pathlib import Path
import joblib
from datasets import load_dataset
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.svm import LinearSVC
from sklearn.naive_bayes import MultinomialNB
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from xgboost import XGBClassifier

LABELS = ['sadness', 'joy', 'love', 'anger', 'fear', 'surprise']
MODEL_DIR = Path(__file__).resolve().parent / 'emotion_models'
# Optional custom training data can be placed at attached_assets/emotion_dataset.csv
# The CSV should contain 'text' and 'label' columns.
DATASET_PATH = Path(__file__).resolve().parent.parent / 'attached_assets' / 'emotion_dataset.csv'


def train_models():
    MODEL_DIR.mkdir(exist_ok=True)
    if DATASET_PATH.exists():
        df = pd.read_csv(DATASET_PATH)
        texts = df['text'].astype(str).tolist()
        labels = df['label'].tolist()
        labels = [LABELS.index(l) if isinstance(l, str) else int(l) for l in labels]
    else:
        ds = load_dataset('dair-ai/emotion', split='train')
        texts = ds['text']
        labels = ds['label']
    vectorizer = TfidfVectorizer(max_features=2000)
    X = vectorizer.fit_transform(texts)
    y = labels
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    models = {
        'log_reg': LogisticRegression(max_iter=1000),
        'svm': LinearSVC(),
        'naive_bayes': MultinomialNB(),
        'random_forest': RandomForestClassifier(n_estimators=20, max_depth=10),
        'decision_tree': DecisionTreeClassifier(max_depth=10),
        'xgboost': XGBClassifier(max_depth=4, n_estimators=50,
                                use_label_encoder=False, eval_metric='logloss'),
    }
    best_acc = 0.0
    best_name = None
    best_model = None
    for name, model in models.items():
        model.fit(X_train, y_train)
        acc = model.score(X_test, y_test)
        if acc > best_acc:
            best_acc = acc
            best_name = name
            best_model = model
        joblib.dump(model, MODEL_DIR / f'{name}.joblib')
    joblib.dump(vectorizer, MODEL_DIR / 'vectorizer.joblib')
    if best_model is not None:
        joblib.dump(best_model, MODEL_DIR / 'best_model.joblib')
        (MODEL_DIR / 'best_model.txt').write_text(best_name or '')


def load_models():
    if not (MODEL_DIR / 'best_model.joblib').exists():
        train_models()
    vectorizer = joblib.load(MODEL_DIR / 'vectorizer.joblib')
    model = joblib.load(MODEL_DIR / 'best_model.joblib')
    return vectorizer, model


def predict(text: str):
    vectorizer, model = load_models()
    features = vectorizer.transform([text])
    label_idx = model.predict(features)[0]
    return {"label": LABELS[label_idx]}


if __name__ == '__main__':
    text = ' '.join(sys.argv[1:])
    if not text:
        print(json.dumps({'error': 'no text supplied'}))
        sys.exit(1)
    preds = predict(text)
    print(json.dumps(preds))
