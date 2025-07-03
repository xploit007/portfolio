import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "./AnimatedSection";
import DashboardImg from "../resources/NYC_Skyline.png";


interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  businessProblem: string;
  achievements: string[];
  technologies: string[];
  codeUrl?: string;
  dashboardUrl?: string;
  badge: {
    text: string;
    variant: "default" | "secondary" | "destructive" | "outline";
    color: string;
  };
  icon: string;
  iconColor: string;
  gradientFrom: string;
  gradientTo: string;
  primaryCTA?: { text: string; link: string };
  secondaryCTA?: { text: string; link: string };
  images?: string[];
  embedCode?: string;
  keyOutcome?: string;
  keyMetric?: string;
  modelPerformance?: { model: string; accuracy: string }[];
  topRiskFactors?: { factor: string; value: string }[];
  previewUrl?: string;
}

export default function Projects() {
  // TODO: Update with actual project URLs and achievements
  const projects: Project[] = [
    {
      id: "emotion-detection",
      title: "SentimentPulse: Real-Time Emotion Insights",
      subtitle: "Multi-Label Emotion Detection",
      description:
        "Companies struggle to gauge user emotion at scale. SentimentPulse uses live text feeds and a multi-label NLP model to detect six core emotions instantly—powering smarter engagement and rapid brand monitoring.",
      businessProblem:
        "Companies need to understand customer sentiment in real-time to manage brand reputation, identify product issues, and gauge marketing campaign success. Manual analysis is impossible at scale.",
      achievements: [
        "Hugging Face transformers fine-tuned for multi-label emotion classification",
        "Streamlit web interface for live user input and instant visual feedback",
        "Automated Python pipeline handling data cleaning, inference, and result logging"
      ],
      technologies: [
        "Python",
        "Hugging Face",
        "Streamlit",
        "NLP",
        "Real-Time Analytics"
      ],
      primaryCTA: { text: "View Demo", link: "https://example.com/streamlit" },
      secondaryCTA: { text: "GitHub", link: "https://github.com/your-repo" },
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
        { model: "Naive Bayes", accuracy: "67.6%" }
      ],
      previewUrl: "https://example.com/streamlit"
    },
    {
      id: "afghanistan-energy",
      title: "PowerGrid Progress: Afghanistan Electrification Insights",
      subtitle: "A Decade of Progress Visualization",
      description:
        "Governments and NGOs need clear, up-to-date views of how electrification spreads so they can target investments. PowerGrid Progress combines time-series forecasting with interactive visuals to reveal provincial gains and guide $2 B+ funding decisions.",
      businessProblem:
        "International development agencies and governments need to track progress on key initiatives like the UN's Sustainable Development Goals to allocate resources effectively and measure the impact of policies.",
      achievements: [
        "Time-series forecasting models projecting future access trends",
        "Interactive Tableau-style visuals for drill-down by province",
        "Provincial-level analysis linking policy changes to access rates"
      ],
      technologies: [
        "Python",
        "Tableau",
        "Power BI",
        "Time Series",
        "Data Visualization"
      ],
      primaryCTA: {
        text: "Download Plots",
        link: "https://example.com/afg_plots"
      },
      secondaryCTA: { text: "GitHub", link: "https://github.com/your-repo" },
      images: ["afg_access_trend.png", "afg_correlation.png"],
      keyOutcome:
        "Documented a rise from 1.73 % → 97.71 % electrification, supporting over $2.3 B in development funding.",
      badge: { text: "Data for Good", variant: "outline", color: "bg-blue-100 text-blue-800" },
      icon: "fas fa-chart-line",
      iconColor: "text-green-600",
      gradientFrom: "from-green-50",
      gradientTo: "to-emerald-100"
    },
    {
      id: "credit-risk",
      title: "CreditGuard: XGBoost Loan-Default Prediction",
      subtitle: "at American Express",
      description:
        "Financial institutions must balance risk and access. CreditGuard applies tree-based ML and savvy feature engineering to predict defaults more accurately—informing fair lending decisions.",
      businessProblem:
        "Lenders must accurately predict the likelihood of a borrower defaulting on a loan to minimize financial losses while providing fair access to credit. Traditional models can often be improved.",
      achievements: [
        "XGBoost model tuned for loan-default classification",
        "Feature engineering on borrower demographics, credit history, transaction patterns",
        "Hyperparameter optimization yielding significant F1-score uplift"
      ],
      technologies: [
        "Python",
        "XGBoost",
        "Scikit-Learn",
        "Feature Engineering",
        "ML Modeling"
      ],
      primaryCTA: { text: "View Notebook", link: "https://example.com/notebook" },
      secondaryCTA: { text: "GitHub", link: "https://github.com/your-repo" },
      keyMetric: "F1-score of 0.85 (11.6% improvement over baseline)",
      modelPerformance: [
        { model: "XGBoost", accuracy: "85%" },
        { model: "CNN", accuracy: "82%" },
        { model: "Baseline Logistic Regression", accuracy: "76%" }
      ],
      topRiskFactors: [
        { factor: "Credit Utilization", value: "0.23" },
        { factor: "Payment History", value: "0.19" },
        { factor: "Income Ratio", value: "0.15" }
      ],
      badge: { text: "Machine Learning", variant: "destructive", color: "bg-red-100 text-red-800" },
      icon: "fas fa-shield-alt",
      iconColor: "text-red-600",
      gradientFrom: "from-red-50",
      gradientTo: "to-pink-100"
    },
    {
      id: "covid-forecast",
      title: "PandemicPredict: COVID-19 Case Forecasting",
      subtitle: "Time Series Analysis & Visualization",
      description:
        "To help health agencies allocate resources, PandemicPredict ingests global case/death feeds, benchmarks ARIMA vs. Prophet forecasts, and delivers precise short-term projections.",
      businessProblem: "Health agencies require accurate case forecasts to plan resources and interventions.",
      achievements: [
        "Cleaned and merged daily cases/deaths from multiple sources",
        "Benchmarked ARIMA vs. Prophet models for 30-day forecasts",
        "Packaged forecast pipeline into reusable Python modules"
      ],
      technologies: ["Python", "Time Series", "ARIMA", "Prophet", "Forecasting"],
      primaryCTA: { text: "View Notebook", link: "https://example.com/covid_notebook" },
      secondaryCTA: { text: "GitHub", link: "https://github.com/your-repo" },
      images: [
        "covid_choropleth.png",
        "covid_daily_cases.png",
        "covid_forecast_plot.png"
      ],
      badge: { text: "Time Series", variant: "secondary", color: "bg-purple-100 text-purple-800" },
      icon: "fas fa-virus",
      iconColor: "text-purple-600",
      gradientFrom: "from-purple-50",
      gradientTo: "to-purple-100"
    },
    {
      id: "carrollton-analytics",
      title: "CallCenter Insights: Carrollton Performance Analytics",
      subtitle: "Operational Dashboard & Recommendations",
      description:
        "City officials needed clear metrics on call volume, wait times, and staffing gaps. CallCenter Insights merges multi-source logs, imputes missing data, and highlights peak periods to drive actionable staffing plans.",
      businessProblem: "City officials needed metrics on call volumes and staffing gaps to reduce unanswered calls and wait times.",
      achievements: [
        "Imputed missing metrics (e.g., abandoned calls, service levels)",
        "Interactive Power BI dashboards highlighting volume peaks and queue times",
        "Generated staffing recommendations based on demand forecasting"
      ],
      technologies: ["Power BI", "Python", "Excel", "Operational Analytics"],
      embedCode:
        '<iframe width="800" height="450" src="https://app.powerbi.com/view?r=YOUR_EMBED_LINK" frameborder="0" allowFullScreen="true"></iframe>',
      primaryCTA: {
        text: "View Dashboard",
        link: "https://app.powerbi.com/view?r=YOUR_EMBED_LINK"
      },
      secondaryCTA: { text: "GitHub", link: "https://github.com/your-repo" },
      badge: { text: "Operations", variant: "outline", color: "bg-indigo-100 text-indigo-800" },
      icon: "fas fa-city",
      iconColor: "text-indigo-600",
      gradientFrom: "from-indigo-50",
      gradientTo: "to-indigo-100"
    },
    {
      id: "court-analysis",
      title: "JusticeFlow: Court Disposition Timeline Insights",
      subtitle: "Kentucky 61st District",
      description:
        "Judicial leaders needed clarity on case processing delays to allocate resources and streamline schedules. JusticeFlow merges multi-source court records to visualize monthly disposition trends and flag invalid entries—enabling data-driven docket management.",
      businessProblem: "Judicial leaders needed insight into case processing delays to allocate resources and improve scheduling.",
      achievements: [
        "Merged multi-source court records into a unified dataset",
        "Visualized monthly disposition delays to highlight backlog peaks",
        "Identified and flagged 4% invalid records for data quality improvement"
      ],
      technologies: ["Excel", "Power BI", "Python", "Data Quality", "Process Analytics"],
      embedCode:
        '<iframe width="100%" height="300" src="https://app.powerbi.com/view?r=YOUR_EMBED_LINK" frameborder="0" allowFullScreen></iframe>',
      primaryCTA: { text: "View Dashboard", link: "https://app.powerbi.com/view?r=YOUR_EMBED_LINK" },
      secondaryCTA: { text: "GitHub", link: "https://github.com/your-repo" },
      badge: { text: "Analytics", variant: "outline", color: "bg-gray-100 text-gray-800" },
      icon: "fas fa-balance-scale",
      iconColor: "text-gray-600",
      gradientFrom: "from-gray-50",
      gradientTo: "to-zinc-100"
    }
  ];

  const openUrl = (url: string) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      console.log("URL to be implemented");
    }
  };

  const renderProjectDemo = (project: Project) => {
    if (project.embedCode) {
      return (
        <div
          className="w-full"
          dangerouslySetInnerHTML={{ __html: project.embedCode }}
        />
      );
    }

    if (project.images && project.images.length > 0) {
      return (
        <div className="w-full grid sm:grid-cols-2 gap-4 place-items-center">
          {project.images.map((img) => (
            <motion.img
              key={img}
              src={require(`../resources/${img}`)}
              alt={img}
              className="rounded-lg shadow-lg max-h-60 w-full object-contain"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      );
    }

    if (project.modelPerformance) {
      return (
        <div className="w-full flex flex-col items-center text-center space-y-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full">
            <h4 className="font-semibold text-slate-800 mb-2">Model Performance</h4>
            <ul className="text-sm space-y-1">
              {project.modelPerformance.map((m) => (
                <li key={m.model}>{`${m.model}: ${m.accuracy}`}</li>
              ))}
            </ul>
          </div>
          {project.previewUrl && (
            <iframe
              src={project.previewUrl}
              className="rounded-lg shadow-lg w-full h-64"
            ></iframe>
          )}
        </div>
      );
    }

    if (project.topRiskFactors) {
      return (
        <div className="w-full flex flex-col items-center text-center space-y-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full">
            <h4 className="font-semibold text-slate-800 mb-2">Model Accuracy Comparison</h4>
            <ul className="text-sm space-y-1 mb-2">
              {project.modelPerformance?.map((m) => (
                <li key={m.model}>{`${m.model}: ${m.accuracy}`}</li>
              ))}
            </ul>
            <h5 className="font-semibold text-slate-800 mt-4">Top Risk Factors</h5>
            <ul className="text-sm space-y-1">
              {project.topRiskFactors.map((r) => (
                <li key={r.factor}>{`${r.factor}: ${r.value}`}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    return (
      <motion.img
        src={DashboardImg}
        alt={`${project.title} dashboard`}
        className="rounded-lg w-full h-48 object-cover shadow-lg"
        whileHover={{ scale: 1.05 }}
      />
    );
  };

  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-600">Interactive case studies demonstrating business impact through data science</p>
          </div>
        </AnimatedSection>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="project-card bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Content */}
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center mb-4">
                      <i className={`${project.icon} ${project.iconColor} text-2xl mr-3`}></i>
                      <Badge className={project.badge.color} variant={project.badge.variant}>
                        {project.badge.text}
                      </Badge>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-slate-800 mb-2">{project.title}</h3>
                    <h4 className="text-xl text-slate-600 mb-4">{project.subtitle}</h4>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      <strong>Business Problem:</strong> {project.businessProblem}
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {project.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center">
                          <i className="fas fa-check text-green-500 mr-3"></i>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Dynamic callouts */}
                    {project.keyOutcome && (
                      <div className="bg-green-50 p-4 rounded-lg mb-6">
                        <h4 className="font-semibold text-green-800 mb-2">Key Outcome</h4>
                        <p className="text-green-700 text-sm">{project.keyOutcome}</p>
                      </div>
                    )}

                    {project.keyMetric && (
                      <div className="bg-red-50 p-4 rounded-lg mb-6">
                        <h4 className="font-semibold text-red-800 mb-2">Key Metric</h4>
                        <p className="text-red-700 text-sm">{project.keyMetric}</p>
                      </div>
                    )}

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <Button
                        variant="outline"
                        onClick={() =>
                          openUrl(
                            project.primaryCTA?.link ?? project.dashboardUrl ?? ''
                          )
                        }
                        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                      >
                        <i className="fas fa-file-alt mr-2"></i>
                        {project.primaryCTA?.text ?? 'View Report'}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() =>
                          openUrl(
                            project.secondaryCTA?.link ?? project.codeUrl ?? ''
                          )
                        }
                        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                      >
                        <i className="fab fa-github mr-2"></i>
                        {project.secondaryCTA?.text ?? 'GitHub'}
                      </Button>
                    </div>
                  </div>
                  
                  {/* Project Demo/Visualization */}
                  <div className={`bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} p-8 lg:p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {renderProjectDemo(project)}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
