import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "./AnimatedSection";

const EMOTIONS = ["sadness", "joy", "love", "anger", "fear", "surprise"] as const;

function EmotionDemo() {
  const [text, setText] = useState("I'm so excited about this new project!");
  const [results, setResults] = useState<Record<string, number> | null>(null);
  const analyze = async () => {
    setResults(null);
    try {
      const res = await fetch("/api/emotion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      if (data) {
        const counts: Record<string, number> = {};
        for (const label of Object.values<string>(data)) {
          counts[label] = (counts[label] || 0) + 1;
        }
        setResults(counts);
      }
    } catch (err) {
      console.error("Failed to analyze", err);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h4 className="font-semibold text-slate-800 mb-4">Try the Demo</h4>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-sm"
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={analyze} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Analyze Emotions
        </Button>
        {results && (
          <div className="mt-4 space-y-2">
            {EMOTIONS.map((emo) => {
              const val = results[emo] || 0;
              const pct = (val / 6) * 100;
              return (
                <div key={emo} className="flex justify-between items-center">
                  <span className="text-sm capitalize">{emo}</span>
                  <div className="w-1/2 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${pct}%` }}></div>
                  </div>
                  <span className="text-sm font-medium">{Math.round(pct)}%</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  businessProblem: string;
  achievements: string[];
  technologies: string[];
  demoUrl?: string;
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
      demoUrl: "", // TODO: Add actual Streamlit app URL
      codeUrl: "", // TODO: Add GitHub repository URL
      badge: { text: "Live Demo", variant: "default", color: "bg-green-100 text-green-800" },
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
    switch (project.id) {
      case "emotion-detection":
        return (
          <EmotionDemo />
        );
      
      case "afghanistan-energy":
        return (
          <div className="w-full">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="font-semibold text-slate-800 mb-4">Afghanistan Energy Access Progress</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">2000</span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
                    <div className="bg-red-500 h-3 rounded-full" style={{width: '2%'}}></div>
                  </div>
                  <span className="text-sm">1.73%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">2010</span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
                    <div className="bg-yellow-500 h-3 rounded-full" style={{width: '40%'}}></div>
                  </div>
                  <span className="text-sm">43.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">2020</span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{width: '98%'}}></div>
                  </div>
                  <span className="text-sm">97.71%</span>
                </div>
              </div>
              <div className="mt-6 h-48 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-map-marked-alt text-4xl text-green-600 mb-2"></i>
                  <p className="text-sm text-slate-600">Interactive Province Map</p>
                  <p className="text-xs text-slate-500 mt-1">Click to explore dashboard</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case "credit-risk":
        return (
          <div className="w-full">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="font-semibold text-slate-800 mb-4">Model Performance Metrics</h4>
              
              <div className="mb-6">
                <p className="text-sm font-medium mb-3">Model Accuracy Comparison</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">XGBoost</span>
                    <div className="w-1/2 bg-gray-200 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">CNN</span>
                    <div className="w-1/2 bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-500 h-3 rounded-full" style={{width: '82%'}}></div>
                    </div>
                    <span className="text-sm font-medium">82%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Baseline</span>
                    <div className="w-1/2 bg-gray-200 rounded-full h-3">
                      <div className="bg-red-500 h-3 rounded-full" style={{width: '76%'}}></div>
                    </div>
                    <span className="text-sm font-medium">76%</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-3">Top Risk Factors</p>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>Credit Utilization</span>
                    <span className="font-medium">0.23</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment History</span>
                    <span className="font-medium">0.19</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Income Ratio</span>
                    <span className="font-medium">0.15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
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
                      {project.demoUrl !== undefined && (
                        <Button 
                          onClick={() => openUrl(project.demoUrl!)}
                          className={`${project.iconColor === 'text-blue-600' ? 'bg-blue-600 hover:bg-blue-700' : 
                                     project.iconColor === 'text-green-600' ? 'bg-green-600 hover:bg-green-700' : 
                                     'bg-red-600 hover:bg-red-700'} text-white`}
                        >
                          <i className="fas fa-external-link-alt mr-2"></i>
                          {project.id === "emotion-detection" ? "View Live Demo" : "View Dashboard"}
                        </Button>
                      )}
                      
                      {project.codeUrl !== undefined && (
                        <Button 
                          variant="outline"
                          onClick={() => openUrl(project.codeUrl!)}
                          className={`border-2 ${project.iconColor === 'text-blue-600' ? 'border-blue-600 text-blue-600 hover:bg-blue-600' : 
                                     project.iconColor === 'text-green-600' ? 'border-green-600 text-green-600 hover:bg-green-600' : 
                                     'border-red-600 text-red-600 hover:bg-red-600'} hover:text-white`}
                        >
                          <i className="fab fa-github mr-2"></i>
                          {project.id === "credit-risk" ? "Jupyter Notebook" : "View Code"}
                        </Button>
                      )}

                      {project.dashboardUrl !== undefined && (
                        <Button 
                          variant="outline"
                          onClick={() => openUrl(project.dashboardUrl!)}
                          className={`border-2 ${project.iconColor === 'text-green-600' ? 'border-green-600 text-green-600 hover:bg-green-600' : 
                                     'border-red-600 text-red-600 hover:bg-red-600'} hover:text-white`}
                        >
                          <i className={`${project.id === "afghanistan-energy" ? "fas fa-chart-bar" : "fas fa-chart-pie"} mr-2`}></i>
                          {project.id === "afghanistan-energy" ? "Read Analysis" : "Model Dashboard"}
                        </Button>
                      )}
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

        {/* Additional Projects Placeholder */}
        <AnimatedSection>
          <div className="text-center mt-20">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-dashed border-gray-300">
              <i className="fas fa-plus-circle text-4xl text-gray-400 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">More Projects Coming Soon</h3>
              <p className="text-gray-500">Additional case studies and interactive demos will be added here</p>
              {/* TODO: Add more projects as they are completed */}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
