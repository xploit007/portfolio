// src/components/Experience.tsx
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "./AnimatedSection";
import Ackerman from "../resources/Ackerman.png";
import Innover from "../resources/innover.png";

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
  companyIcon: string;
  techColor: string;
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      id: "ackerman",
      title: "Research Analyst",
      company: "Ackerman Center for Holocaust Studies",
      period: "June 2024 - May 2025",
      description:
        "Assisted researchers to tell data-driven stories via Power BI dashboards.",
      achievements: [
        { value: "15+", label: "Dashboards Delivered", color: "text-blue-600" },
        { value: "40%", label: "Time Reduction", color: "text-green-600" },
        { value: "100+", label: "User Stories", color: "text-purple-600" },
      ],
      technologies: [
        "Python",
        "Power BI",
        "Web Scraping",
        "Data Cleaning",
        "Requirements Analysis",
        "Data Visualization",
      ],
      companyIcon: Ackerman,
      techColor: "bg-blue-100 text-blue-800",
    },
    {
      id: "innover",
      title: "Associate Analyst",
      company: "Innover Digital",
      period: "April 2022 - June 2023",
      description:
        "Bridged business and technical teams by converting requirements into Azure DevOps stories and crafting Power BI dashboards.",
      achievements: [
        { value: "200+", label: "User Stories", color: "text-green-600" },
        { value: "25%", label: "Sprint Velocity ↑", color: "text-amber-600" },
        { value: "5", label: "Client Projects", color: "text-purple-600" },
      ],
      technologies: [
        "Python",
        "SQL",
        "ETL Pipelines",
        "Stakeholder Management",
        "Azure DevOps",
        "Requirements Gathering",
      ],
      companyIcon: Innover,
      techColor: "bg-green-100 text-green-800",
    },
    // add more entries here…
  ];

  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-slate-600">
              Building data-driven solutions across industries
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div
            className="
              absolute 
              sm:left-8 left-4   /* closer on mobile */
              top-0 
              w-[2px] 
              h-full 
              bg-gradient-to-b from-blue-600 to-amber-500 opacity-30
            "
          />

          {/* Each timeline item */}
          <div className="space-y-12">
            {experiences.map((experience, idx) => (
              <AnimatedSection key={experience.id} delay={idx * 0.3}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Dot */}
                  <div
                    className="
                      absolute 
                      sm:-left-2 left-0 
                      top-0 
                      w-4 h-4 
                      bg-blue-600 
                      border-2 border-white 
                      rounded-full 
                      shadow-lg
                    "
                  />

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -5,
                      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                    }}
                    className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4">
                      <div className="flex items-center mb-4 lg:mb-0">
                        <img
                          src={experience.companyIcon}
                          alt={`${experience.company} logo`}
                          className="w-12 h-12 object-contain mr-4"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-slate-800">
                            {experience.title}
                          </h3>
                          <p className="text-blue-600 font-semibold text-lg">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-slate-600 text-sm">
                        <i className="fas fa-calendar-alt mr-2"></i>
                        {experience.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements grid: 1 col mobile, 3 cols ≥768px */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {experience.achievements.map((ach, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className={`
                            text-center p-4 rounded-lg transition-all duration-200
                            ${
                              ach.color.includes("blue")
                                ? "bg-blue-50 hover:bg-blue-100"
                                : ach.color.includes("green")
                                ? "bg-green-50 hover:bg-green-100"
                                : ach.color.includes("purple")
                                ? "bg-purple-50 hover:bg-purple-100"
                                : "bg-amber-50 hover:bg-amber-100"
                            }
                          `}
                        >
                          <div className={`text-2xl font-bold ${ach.color}`}>
                            {ach.value}
                          </div>
                          <div className="text-sm text-slate-600">
                            {ach.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech badges */}
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
        </div>
      </div>
    </section>
  );
}
