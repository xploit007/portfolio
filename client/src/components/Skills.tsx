import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "./AnimatedSection";

interface Skill {
  name: string;
  percentage: number;
  category: string;
}

interface Certification {
  name: string;
  icon: string;
  color: string;
  description: string;
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // TODO: Update with actual skills and percentages based on real experience
  const skills: Skill[] = [
    { name: "Python & Machine Learning", percentage: 95, category: "technical" },
    { name: "Power BI & Tableau", percentage: 90, category: "visualization" },
    { name: "AWS & Azure Cloud", percentage: 85, category: "cloud" },
    { name: "SQL & Data Modeling", percentage: 92, category: "data" },
    { name: "Agile & Scrum", percentage: 88, category: "methodology" },
  ];

  // TODO: Update with actual certifications
  const certifications: Certification[] = [
    { name: "AWS", icon: "fab fa-aws", color: "text-orange-500", description: "AWS Certified Solutions Architect" },
    { name: "Azure", icon: "fab fa-microsoft", color: "text-blue-600", description: "Microsoft Azure Certified" },
    { name: "Python", icon: "fab fa-python", color: "text-yellow-600", description: "Python Programming Expert" },
    { name: "Power BI", icon: "fas fa-chart-bar", color: "text-amber-500", description: "Power BI Data Analyst" },
    { name: "Tableau", icon: "fas fa-chart-line", color: "text-blue-500", description: "Tableau Certified Professional" },
    { name: "Scrum", icon: "fas fa-users-cog", color: "text-green-600", description: "Certified Scrum Master" },
    { name: "ML", icon: "fas fa-robot", color: "text-purple-600", description: "Machine Learning Specialist" },
    { name: "Git", icon: "fab fa-git-alt", color: "text-red-600", description: "Version Control Expert" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Technical Expertise</h2>
            <p className="text-xl text-slate-600">Proficient in modern data analytics and business intelligence tools</p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Grid */}
          <AnimatedSection>
            <div ref={ref}>
              <h3 className="text-2xl font-semibold text-slate-800 mb-8">Core Skills</h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="skill-item"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-600">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: "0%" }}
                        animate={inView ? { width: `${skill.percentage}%` } : { width: "0%" }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection>
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-8">Certifications & Tools</h3>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="certification-icon flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer group"
                    title={cert.description}
                  >
                    <i className={`${cert.icon} text-4xl ${cert.color} mb-2 transition-transform duration-200`}></i>
                    <span className="text-xs text-slate-600 text-center font-medium">{cert.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
