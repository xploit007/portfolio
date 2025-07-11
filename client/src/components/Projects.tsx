// src/components/Projects.tsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "./AnimatedSection";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  businessProblem: string;
  achievements: string[];
  technologies: string[];
  badge: {
    text: string;
    variant: "default" | "secondary" | "destructive" | "outline";
    color: string;
  };
  icon: string;
  iconColor: string;
  gradientFrom: string;
  gradientTo: string;
  secondaryCTA?: { text: string; link: string };
  images?: string[];
  keyOutcome?: string;
  keyMetric?: string;
  modelPerformance?: { model: string; accuracy: string }[];
  previewUrl?: string;
  demoUrl?: string;
}

export default function Projects() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const openLightbox = (img: string) => setLightboxImage(img);
  const closeLightbox = () => setLightboxImage(null);

  const projects: Project[] = [
    {
      id: "emotion-detection",
      title: "SentimentPulse: Real-Time Emotion Insights",
      subtitle: "Multi-Label Emotion Detection",
      description:
        "Companies struggle to gauge user emotion at scale. SentimentPulse processes live text streams and classifies six core emotions instantly, enabling smarter engagement and rapid brand monitoring.",
      businessProblem:
        "Manual sentiment analysis can’t keep up with high-volume, real-time data. Brands miss critical feedback and can’t react fast enough.",
      achievements: [
        "Fine-tuned Hugging Face transformers for multi-label classification",
        "Built Streamlit UI for live text input & instant visual feedback",
        "Automated Python pipeline for data cleaning, inference, and result logging",
      ],
      technologies: ["Python", "Hugging Face", "Streamlit", "NLP", "Real-Time Analytics"],
      secondaryCTA: { text: "GitHub", link: "https://github.com/xploit007/Credit-Risk" },
      demoUrl: "https://xploit-emotion-detection.streamlit.app/",
      badge: { text: "Demo", variant: "default", color: "bg-green-100 text-green-800" },
      icon: "fas fa-brain",
      iconColor: "text-blue-600",
      gradientFrom: "from-blue-50",
      gradientTo: "to-indigo-100",
      modelPerformance: [
        { model: "SVM", accuracy: "89.4%" },
        { model: "XGBoost", accuracy: "88.9%" },
        { model: "Decision Tree", accuracy: "86.9%" },
        { model: "Logistic Regression", accuracy: "86.2%" },
        { model: "Random Forest", accuracy: "73.5%" },
        { model: "Naive Bayes", accuracy: "67.6%" },
      ],
      previewUrl: "https://example.com/streamlit",
    },
    {
      id: "credit-risk",
      title: "CreditGuard: XGBoost Loan-Default Prediction",
      subtitle: "At American Express",
      description:
        "CreditGuard leverages tree-based models and detailed feature engineering to predict borrower defaults more accurately, informing fairer lending decisions and reducing financial losses.",
      businessProblem:
        "Traditional credit scoring misses nuanced borrower behavior. Lenders need more precise models to balance risk and accessibility.",
      achievements: [
        "Tuned XGBoost for loan-default classification with 12% boosted F1-score",
        "Engineered features from demographics, credit history, and transaction patterns",
        "Automated hyperparameter search yielding consistent performance gains",
      ],
      technologies: ["Python", "XGBoost", "Scikit-Learn", "Feature Engineering", "ML Modeling"],
      secondaryCTA: { text: "GitHub", link: "https://github.com/xploit007/Emotion-Detection" },
      badge: { text: "Machine Learning", variant: "destructive", color: "bg-red-100 text-red-800" },
      icon: "fas fa-shield-alt",
      iconColor: "text-red-600",
      gradientFrom: "from-red-50",
      gradientTo: "to-pink-100",
      keyMetric: "F1-score of 0.85 (+11.6% over baseline)",
      modelPerformance: [
        { model: "XGBoost", accuracy: "85%" },
        { model: "CNN", accuracy: "82%" },
        { model: "Logistic Regression", accuracy: "76%" },
      ],
    },
    {
      id: "afghanistan-energy",
      title: "PowerGrid Progress: Afghanistan Electrification Insights",
      subtitle: "A Decade of Progress Visualization",
      description:
        "PowerGrid Progress combines time-series forecasting with interactive visuals to reveal provincial electrification gains, guiding over $2 B in development funding decisions.",
      businessProblem:
        "Development agencies need clear dashboards on UN SDG electrification progress to allocate resources effectively.",
      achievements: [
        "Built time-series models projecting future access trends",
        "Designed drill-down visuals by province in Tableau style",
        "Linked policy interventions to access improvements",
      ],
      technologies: ["Python", "Tableau", "Excel", "Time Series", "Data Visualization"],
      secondaryCTA: { text: "GitHub", link: "https://github.com/xploit007/United-Nations-Sustainable-Development-Goals-SDGs-7" },
      badge: { text: "Data for Good", variant: "outline", color: "bg-blue-100 text-blue-800" },
      icon: "fas fa-chart-line",
      iconColor: "text-green-600",
      gradientFrom: "from-green-50",
      gradientTo: "to-emerald-100",
      keyOutcome: "Electrification ↑ from 1.73% → 97.71%, unlocking $2.3 B+ in funding.",
      images: ["Afgan1.png"],
    },
    {
      id: "covid-forecast",
      title: "PandemicPredict: COVID-19 Case Forecasting",
      subtitle: "Time Series & Visualization",
      description:
        "PandemicPredict ingests global case/death feeds, benchmarks ARIMA vs. Prophet, and delivers precise 30-day forecasts to help health agencies allocate resources.",
      businessProblem:
        "Health agencies need accurate short-term COVID forecasts to plan hospital capacity and interventions.",
      achievements: [
        "Cleaned and merged multi-source case/death data",
        "Benchmarked ARIMA and Prophet models for 30-day accuracy",
        "Packaged forecast pipeline into reusable Python modules",
      ],
      technologies: ["Python", "ARIMA", "Prophet", "Forecasting", "Time Series"],
      secondaryCTA: { text: "GitHub", link: "https://github.com/xploit007/COVID19-Data-Visualization-Using-Python" },
      badge: { text: "Time Series", variant: "secondary", color: "bg-purple-100 text-purple-800" },
      icon: "fas fa-virus",
      iconColor: "text-purple-600",
      gradientFrom: "from-purple-50",
      gradientTo: "to-purple-100",
      images: ["CovidPlot1.png"],
    },
    {
      id: "carrollton-analytics",
      title: "CallCenter Insights: Carrollton Performance Analytics",
      subtitle: "Operational Dashboard & Recommendations",
      description:
        "CallCenter Insights merges call-log data, imputes missing metrics, and highlights peak periods in interactive dashboards to drive staffing optimization.",
      businessProblem:
        "City officials need call volume and wait-time analytics to reduce unanswered calls and service delays.",
      achievements: [
        "Imputed missing call metrics using Python",
        "Designed interactive dashboards highlighting peak volumes",
        "Generated staffing recommendations via demand forecasting",
      ],
      technologies: ["Power BI", "Python", "Excel", "Operational Analytics"],
      secondaryCTA: { text: "GitHub", link: "https://github.com/xploit007/cityofcarrolton" },
      badge: { text: "Operations", variant: "outline", color: "bg-indigo-100 text-indigo-800" },
      icon: "fas fa-city",
      iconColor: "text-indigo-600",
      gradientFrom: "from-indigo-50",
      gradientTo: "to-indigo-100",
      images: ["cityofcar.png"],
    },
    {
      id: "court-analysis",
      title: "JusticeFlow: Court Disposition Timeline Insights",
      subtitle: "Kentucky 61st District",
      description:
        "JusticeFlow merges multi-source court records to visualize monthly disposition delays and flags invalid entries, enabling data-driven docket management.",
      businessProblem:
        "Judicial leaders need insights on case backlogs to allocate resources and streamline scheduling.",
      achievements: [
        "Unified court data from multiple sources",
        "Visualized monthly backlog peaks in Power BI style",
        "Flagged and cleaned 4% invalid records for quality improvement",
      ],
      technologies: ["Excel", "Power BI", "Python", "Data Quality", "Process Analytics"],
      secondaryCTA: { text: "GitHub", link: "https://github.com/xploit007/kentuckycourtanalysis" },
      badge: { text: "Analytics", variant: "outline", color: "bg-gray-100 text-gray-800" },
      icon: "fas fa-balance-scale",
      iconColor: "text-gray-600",
      gradientFrom: "from-gray-50",
      gradientTo: "to-zinc-100",
      images: ["KentuckyDashboard.png"],
    },
  ];

  const listVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
  const rowVariants = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } };

  const renderProjectDemo = (p: Project) => {
    if (p.modelPerformance) {
      return (
        <motion.div
          className="w-full bg-white p-6 rounded-lg shadow-lg"
          initial="hidden"
          animate="visible"
          variants={listVariants}
        >
          <h4 className="font-semibold mb-3 text-slate-800">Model Performance</h4>
          <motion.ul className="divide-y divide-gray-200">
            {p.modelPerformance.map((m) => (
              <motion.li
                key={m.model}
                className="flex justify-between py-2"
                variants={rowVariants}
                whileHover={{ backgroundColor: "#f3f4f6" }}
              >
                <span>{m.model}</span>
                <span className="font-medium">{m.accuracy}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      );
    }
    if (p.images && p.images.length) {
      const src = new URL(`../resources/${p.images[0]}`, import.meta.url).href;
      return (
        <div className="w-full h-60 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden cursor-zoom-in">
          <motion.img
            src={src}
            alt={p.title}
            className="max-h-full max-w-full object-contain"
            whileHover={{ scale: 1.03 }}
            onClick={() => openLightbox(src)}
          />
        </div>
      );
    }
    return (
      <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
        No preview available
      </div>
    );
  };

  return (
    <>
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {/* Close button just outside the top-right of the image */}
              <button
                onClick={closeLightbox}
                className="absolute -top-6 right-0 text-white text-3xl z-10"
              >
                ×
              </button>
              <img src={lightboxImage} className="w-full h-auto rounded-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
              <p className="text-xl text-slate-600">
                Interactive case studies demonstrating business impact through data science
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-20">
            {projects.map((proj, idx) => (
              <AnimatedSection key={proj.id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="project-card bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className={`grid lg:grid-cols-2 ${idx % 2 ? "lg:grid-flow-col-dense" : ""}`}>
                    {/* Text side */}
                    <div className={`p-8 lg:p-12 ${idx % 2 ? "lg:order-2" : ""}`}>
                      <div className="flex items-center mb-4">
                        <i className={`${proj.icon} ${proj.iconColor} text-2xl mr-3`} />
                        <Badge className={proj.badge.color} variant={proj.badge.variant}>
                          {proj.badge.text}
                        </Badge>
                      </div>
                      <h3 className="text-3xl font-bold text-slate-800 mb-2">{proj.title}</h3>
                      <h4 className="text-xl text-slate-600 mb-4">{proj.subtitle}</h4>
                      <p className="text-slate-600 mb-6 leading-relaxed">{proj.description}</p>
                      <p className="text-slate-600 mb-6">
                        <strong>Business Problem:</strong> {proj.businessProblem}
                      </p>
                      <div className="space-y-4 mb-6">
                        {proj.achievements.map((a, i) => (
                          <div key={i} className="flex items-center">
                            <i className="fas fa-check text-green-500 mr-2" />
                            <span>{a}</span>
                          </div>
                        ))}
                      </div>
                      {proj.keyOutcome && (
                        <div className="bg-green-50 p-4 rounded-lg mb-6">
                          <h5 className="font-semibold text-green-800 mb-1">Key Outcome</h5>
                          <p className="text-green-700 text-sm">{proj.keyOutcome}</p>
                        </div>
                      )}
                      {proj.keyMetric && (
                        <div className="bg-red-50 p-4 rounded-lg mb-6">
                          <h5 className="font-semibold text-red-800 mb-1">Key Metric</h5>
                          <p className="text-red-700 text-sm">{proj.keyMetric}</p>
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {proj.technologies.map((t) => (
                          <Badge key={t} variant="outline" className="text-xs">
                            {t}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {proj.demoUrl && (
                          <Button
                            onClick={() => window.open(proj.demoUrl!, "_blank")}
                            className="bg-green-600 text-white hover:bg-green-700"
                          >
                            Try Demo
                          </Button>
                        )}
                        {proj.secondaryCTA && (
                          <Button
                            variant="outline"
                            onClick={() => window.open(proj.secondaryCTA!.link, "_blank")}
                            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                          >
                            <i className="fab fa-github mr-2" />
                            {proj.secondaryCTA.text}
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Demo side */}
                    <div
                      className={`p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br ${proj.gradientFrom} ${proj.gradientTo} ${
                        idx % 2 ? "lg:order-1" : ""
                      }`}
                    >
                      {renderProjectDemo(proj)}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
