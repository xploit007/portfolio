import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "./AnimatedSection";

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: Array<{
    value: string;
    label: string;
    color: string;
  }>;
  technologies: string[];
  techColor: string;
}

export default function Experience() {
  // TODO: Update with actual experience details and achievements
  const experiences: Experience[] = [
    {
      id: "ackerman",
      title: "Business Analyst",
      company: "Ackerman Solutions",
      period: "2023 - Present",
      description: "Led cross-functional teams in delivering data-driven business solutions, specializing in Power BI dashboard development and stakeholder requirement analysis.",
      achievements: [
        { value: "15+", label: "Dashboards Delivered", color: "text-blue-600" },
        { value: "40%", label: "Time Reduction", color: "text-green-600" },
        { value: "100+", label: "User Stories", color: "text-purple-600" }
      ],
      technologies: ["Power BI", "Stakeholder Management", "Requirements Analysis", "Data Visualization"],
      techColor: "bg-blue-100 text-blue-800"
    },
    {
      id: "innover",
      title: "Business Analyst", 
      company: "Innover Digital",
      period: "2022 - 2023",
      description: "Drove agile transformation initiatives and optimized sprint delivery processes for digital transformation projects across multiple client portfolios.",
      achievements: [
        { value: "200+", label: "User Stories", color: "text-green-600" },
        { value: "25%", label: "Sprint Velocity ↑", color: "text-amber-600" },
        { value: "5", label: "Client Projects", color: "text-purple-600" }
      ],
      technologies: ["Agile/Scrum", "Jira", "Azure DevOps", "Sprint Planning"],
      techColor: "bg-green-100 text-green-800"
    }
    // TODO: Add more experience entries as needed
  ];

  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Professional Experience</h2>
            <p className="text-xl text-slate-600">Building data-driven solutions across industries</p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-blue-600 to-amber-500 opacity-30"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <AnimatedSection key={experience.id} delay={index * 0.3}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative timeline-item pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 border-2 border-white rounded-full shadow-lg"></div>

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ y: -5, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                    className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">{experience.title}</h3>
                        <p className="text-blue-600 font-semibold text-lg">{experience.company}</p>
                      </div>
                      <div className="flex items-center text-slate-600 text-sm mt-2 lg:mt-0">
                        <i className="fas fa-calendar-alt mr-2"></i>
                        {experience.period}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-slate-600 mb-6 leading-relaxed">{experience.description}</p>
                    
                    {/* Achievement Metrics */}
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      {experience.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className={`text-center p-4 rounded-lg transition-all duration-200 ${
                            achievement.color.includes('blue') ? 'bg-blue-50 hover:bg-blue-100' :
                            achievement.color.includes('green') ? 'bg-green-50 hover:bg-green-100' :
                            achievement.color.includes('purple') ? 'bg-purple-50 hover:bg-purple-100' :
                            'bg-amber-50 hover:bg-amber-100'
                          }`}
                        >
                          <div className={`text-2xl font-bold ${achievement.color}`}>
                            {achievement.value}
                          </div>
                          <div className="text-sm text-slate-600">{achievement.label}</div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          className={`${experience.techColor} text-xs font-medium px-2.5 py-0.5`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Placeholder for Additional Experience */}
          <AnimatedSection delay={0.6}>
            <div className="relative timeline-item pl-20 mt-12">
              <div className="absolute -left-2 top-4 w-4 h-4 bg-gray-400 border-2 border-white rounded-full shadow-lg"></div>
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <i className="fas fa-plus-circle text-3xl text-gray-400 mb-3"></i>
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Additional Experience</h3>
                  <p className="text-gray-500 text-sm">Previous roles and internships can be added here</p>
                  {/* TODO: Add more experience entries as career progresses */}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
