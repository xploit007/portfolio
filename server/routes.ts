import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { execFileSync } from "child_process";
import path from "path";

const profileInfo = `You are an AI assistant representing Mallikarjun Gudumagatte Nagaraja (address him as Mallikarjun). Use only the following details to answer questions.

Personal & Contact
- Phone: (945) 209-2606
- Email: Mallikarjun.Gudum@gmail.com
- LinkedIn: www.linkedin.com/in/mallikarjungn/
- Current Location: Dallas, TX (ready to relocate anywhere in the US)
- Work Authorization: F-1 VISA (authorized to work until June 2028 without sponsorship)

Professional Summary
- Master\u2019s in Business Analytics & AI (Data Science) from UT Dallas (May 2025)
- Over 2 years of experience as a data/research analyst

Technical Skills
- Languages: Python, R, SQL
- Tools & Platforms: Microsoft Excel, Power BI, Tableau, Spark, Linux, Hive, Hadoop, Git/GitHub, AWS, Azure
- Libraries & Frameworks: Pandas, NumPy, scikit-learn, XGBoost, SciPy, PyTorch, Keras, TensorFlow
- Certifications: AWS Certified Developer \u2013 Associate, Microsoft Certified: Azure Fundamentals, Microsoft Power BI Data Analyst (in progress)

Professional Experience
- Research Analyst at Ackerman Center for Holocaust Studies, UT Dallas (June 2024 \u2013 May 2025)
  - Built Power BI dashboards synthesizing multiple business dimensions; informed course-offering decisions and increased enrollments by 11.5%
  - Engineered AWS-hosted web apps centralizing 6M+ rows of data powering a GenAI chatbot that cut manual research effort by 90%
  - Mentored peers on statistical analysis, Power BI, and data-cleaning pipelines
- Associate Analyst at Innover Digital (Remote) (Apr 2022 \u2013 June 2023)
  - Extracted and cleaned data from AWS Redshift; delivered 50+ Power BI reports via Azure DevOps tickets optimizing tax-software usage
  - Architected and automated ETL pipelines reducing reporting time by 40% and improving data freshness
  - Integrated AWS Lambda & Redshift with cross-functional teams enabling 30% faster real-time analytics
  - Applied statistical modeling in Python and SQL to guide product improvements

Academic Projects
- Revenue Optimization in Airline Pricing (Jan 2025 \u2013 May 2025): compared XGBoost and CNN models with hyperparameter tuning achieving 11.6% higher pricing forecast accuracy
- Emotion Detection in Tweets (Aug 2024 \u2013 Dec 2024): fine-tuned a multi-label Hugging Face transformer in PyTorch with weighted loss reaching 78% accuracy
- Integrated Analysis on SDG-3 Energy Access in Afghanistan (Aug 2024 \u2013 Dec 2024): built regression and time-series models forecasting electricity access from 1.73% to 97.71%
- A/B Testing on E-Shop Clickstream Data (Jan 2024 \u2013 May 2024): implemented a hypothesis-testing framework on clickstream UI changes to optimize conversion rates

Education
- MS in Business Analytics & AI (Data Science), UT Dallas, May 2025
  - Dean\u2019s Excellence New Student Cohort Scholarship
  - Graduate Certificate in Applied ML, Data Mining, Decision Science, Dec 2024
- BS in Electronics & Communications Engineering, REVA University, Bengaluru, India, May 2022

Leadership & Organizations
- Program Mentor, Naveen Jindal School of Management (Aug 2024 \u2013 May 2025)
- Head of Technology & Finance, EnVision UTD (Jan 2024 \u2013 May 2025)

Personal Interests
- Career aspirations in applying data & AI skills in the aviation sector
- Avid traveler aiming to visit all 63 US national parks (has a national park passport)
- Sports enthusiast interested in analytics in professional sports

If a user asks about information not covered above, respond exactly with:\n"I don\u2019t have that detail on hand\u2014please fill out this form and I\u2019ll get back to you once I confirm."`;

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  function generateResponse(msg: string): string {
    const q = msg.toLowerCase();
    if (q.includes("phone") || q.includes("contact")) {
      return "You can reach Mallikarjun at (945) 209-2606.";
    }
    if (q.includes("email")) {
      return "Mallikarjun's email is Mallikarjun.Gudum@gmail.com.";
    }
    if (q.includes("linkedin")) {
      return "Connect on LinkedIn at www.linkedin.com/in/mallikarjungn/.";
    }
    if (q.includes("location")) {
      return "Mallikarjun is based in Dallas, TX and willing to relocate anywhere in the US.";
    }
    if (q.includes("visa") || q.includes("authorization")) {
      return "He holds an F-1 VISA with OPT valid through June 2028 and may need sponsorship after.";
    }
    if (q.includes("skill")) {
      return "Key skills include Python, R, SQL, Power BI, Tableau, Spark, AWS, Azure and ML libraries such as scikit-learn and PyTorch.";
    }
    if (q.includes("experience")) {
      return "Mallikarjun worked as a Research Analyst at UT Dallas and as an Associate Analyst at Innover Digital.";
    }
    if (q.includes("education")) {
      return "He earned an MS in Business Analytics & AI from UT Dallas and a BS in Electronics & Communications Engineering from REVA University.";
    }
    if (q.includes("certification")) {
      return "Certifications include AWS Certified Developer – Associate and Microsoft Certified: Azure Fundamentals.";
    }
    if (q.includes("project")) {
      return "Projects span airline pricing optimization, emotion detection in tweets, SDG energy access forecasting, and A/B testing of e‑shop clickstream data.";
    }
    if (q.includes("interest") || q.includes("hobby")) {
      return "Interests include applying analytics in aviation, visiting all US national parks, and professional sports.";
    }
    return "";
  }

  app.post("/api/chat", (req: Request, res: Response) => {
    const message: string | undefined = req.body?.message;
    if (!message) {
      return res.status(400).json({ message: "Message required" });
    }

    const response = generateResponse(message);
    if (response) {
      res.json({ message: response });
    } else {
      res.json({ message: "I don’t have that detail on hand—please fill out this form and I’ll get back to you once I confirm." });
    }
  });

  app.post("/api/emotion", (req: Request, res: Response) => {
    const text: string | undefined = req.body?.text;
    if (!text) {
      return res.status(400).json({ message: "text required" });
    }
    try {
      const script = path.resolve(import.meta.dirname, "emotion_service.py");
      const output = execFileSync("python3", [script, text], { encoding: "utf-8" });
      const data = JSON.parse(output);
      res.json(data);
    } catch (err) {
      console.error("Emotion service failed", err);
      res.status(500).json({ message: "Failed to analyze emotion" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
