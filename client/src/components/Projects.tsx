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
}

export default function Projects() {
  // TODO: Update with actual project URLs and achievements
  const accuracy: Record<string, number> = {
    "emotion-detection": 78,
    "afghanistan-energy": 96,
    "credit-risk": 85,
    "covid-forecast": 90,
    "carrollton-calls": 88,
    "court-disposition": 86,
  };
  const projects: Project[] = [
    {
      id: "emotion-detection",
      title: "Real-Time Emotion Analysis",
      subtitle: "for Social Media Content",
      description: "Interactive web application for analyzing emotions in text using advanced NLP models",
      businessProblem: "Companies need to understand customer sentiment in real-time to manage brand reputation, identify product issues, and gauge marketing campaign success. Manual analysis is impossible at scale.",
      achievements: [
        "Hugging Face Transformers Implementation",
        "Multi-label Emotion Classification",
        "Streamlit Web Application"
      ],
      technologies: ["Python", "Hugging Face", "Streamlit", "NLP", "Transformers"],
      codeUrl: "", // TODO: Add GitHub repository URL
      badge: { text: "Demo", variant: "default", color: "bg-green-100 text-green-800" },
      icon: "fas fa-brain",
      iconColor: "text-blue-600",
      gradientFrom: "from-blue-50",
      gradientTo: "to-indigo-100"
    },
    {
      id: "afghanistan-energy",
      title: "Afghanistan's Energy Access Journey",
      subtitle: "A Decade of Progress Visualization",
      description: "Data storytelling project tracking SDG progress in energy access across Afghanistan provinces",
      businessProblem: "International development agencies and governments need to track progress on key initiatives like the UN's Sustainable Development Goals to allocate resources effectively and measure the impact of policies.",
      achievements: [
        "Time-series Forecasting Models",
        "Interactive Tableau Dashboards",
        "Provincial-level Analysis"
      ],
      technologies: ["Tableau", "Power BI", "Python", "Time Series", "Data Visualization"],
      dashboardUrl: "", // TODO: Add Tableau/Power BI dashboard URL
      badge: { text: "Data for Good", variant: "outline", color: "bg-blue-100 text-blue-800" },
      icon: "fas fa-chart-line",
      iconColor: "text-green-600",
      gradientFrom: "from-green-50",
      gradientTo: "to-emerald-100"
    },
    {
      id: "credit-risk",
      title: "Credit Risk Assessment with XGBoost",
      subtitle: "at American Express",
      description: "Machine learning model optimization for predicting credit default risk with improved accuracy",
      businessProblem: "Lenders must accurately predict the likelihood of a borrower defaulting on a loan to minimize financial losses while providing fair access to credit. Traditional models can often be improved.",
      achievements: [
        "XGBoost vs CNN Model Comparison",
        "Feature Engineering & Selection",
        "Hyperparameter Optimization"
      ],
      technologies: ["XGBoost", "Python", "Scikit-learn", "Power BI", "Feature Engineering"],
      dashboardUrl: "", // TODO: Add Power BI dashboard URL
      codeUrl: "", // TODO: Add Jupyter notebook URL
      badge: { text: "Machine Learning", variant: "destructive", color: "bg-red-100 text-red-800" },
      icon: "fas fa-shield-alt",
      iconColor: "text-red-600",
      gradientFrom: "from-red-50",
      gradientTo: "to-pink-100"
    },
    {
      id: "covid-forecast",
      title: "COVID-19 Case Forecasting",
      subtitle: "Time Series Analysis & Visualization",
      description: "Exploratory analysis and forecasting of global COVID-19 cases using advanced time series models",
      businessProblem: "Health agencies require accurate case forecasts to plan resources and interventions.",
      achievements: [
        "Data Cleaning Across Sources",
        "ARIMA vs Prophet Models",
        "Power BI Dashboard"
      ],
      technologies: ["Python", "Pandas", "Prophet", "Power BI"],
      dashboardUrl: "", // TODO: attach dashboard file
      codeUrl: "",
      badge: { text: "Time Series", variant: "secondary", color: "bg-purple-100 text-purple-800" },
      icon: "fas fa-virus",
      iconColor: "text-purple-600",
      gradientFrom: "from-purple-50",
      gradientTo: "to-purple-100"
    },
    {
      id: "carrollton-calls",
      title: "City of Carrollton Call Center Analytics",
      subtitle: "Operational Dashboard & Recommendations",
      description: "Analyzed call center data to identify trends and improve customer-service efficiency",
      businessProblem: "City officials needed metrics on call volumes and staffing gaps to reduce unanswered calls and wait times.",
      achievements: [
        "Imputed Missing Metrics",
        "Interactive Power BI Dashboard",
        "Actionable Staffing Plan"
      ],
      technologies: ["Power BI", "Python", "Excel"],
      dashboardUrl: "", // TODO: attach dashboard file
      badge: { text: "Operations", variant: "outline", color: "bg-indigo-100 text-indigo-800" },
      icon: "fas fa-city",
      iconColor: "text-indigo-600",
      gradientFrom: "from-indigo-50",
      gradientTo: "to-indigo-100"
    },
    {
      id: "court-disposition",
      title: "Court Disposition Time Analysis",
      subtitle: "Kentucky 61st District",
      description: "Examined felony and misdemeanor cases to highlight outliers and backlog issues for 2022",
      businessProblem: "Judicial leaders needed insight into case processing delays to allocate resources and improve scheduling.",
      achievements: [
        "Merged Multi-Source Data",
        "Monthly Disposition Visuals",
        "Identified 4% Invalid Records"
      ],
      technologies: ["Excel", "Power BI", "Python"],
      dashboardUrl: "", // TODO: attach dashboard file
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

  const renderProjectDemo = (project: Project) => (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <h4 className="font-semibold text-slate-800 mb-4">Prediction Accuracy</h4>
        <p className="text-5xl font-bold text-blue-600">{accuracy[project.id]}%</p>
      </div>
      <motion.img
        src={DashboardImg}
        alt={`${project.title} dashboard`}
        className="rounded-lg mt-6 w-full h-48 object-cover shadow-lg"
        whileHover={{ scale: 1.05 }}
      />
    </div>
  );

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

                    {/* Key Achievement Box */}
                    {project.id === "afghanistan-energy" && (
                      <div className="bg-green-50 p-4 rounded-lg mb-6">
                        <h4 className="font-semibold text-green-800 mb-2">Key Achievement</h4>
                        <p className="text-green-700 text-sm">Documented 96% improvement in electricity access (1.73% to 97.71%) supporting $2.3B in development funding decisions</p>
                      </div>
                    )}

                    {project.id === "credit-risk" && (
                      <div className="bg-red-50 p-4 rounded-lg mb-6">
                        <h4 className="font-semibold text-red-800 mb-2">Model Performance</h4>
                        <p className="text-red-700 text-sm">Achieved F1-score of 0.85, representing 11.6% improvement over baseline logistic regression model</p>
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
                        onClick={() => openUrl(project.dashboardUrl ?? '')}
                        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                      >
                        <i className="fas fa-file-alt mr-2"></i>
                        View Report
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => openUrl(project.codeUrl ?? '')}
                        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                      >
                        <i className="fab fa-github mr-2"></i>
                        GitHub
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
