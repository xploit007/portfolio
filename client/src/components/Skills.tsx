import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "./AnimatedSection";

import MLLogo from "../resources/ml.png";
import DataMiningLogo from "../resources/datamining.png";
import BDSLogo from "../resources/bds.png";

import {
  VisualStudioLogo24Regular,
  ExcelLogo24Regular,
  PowerBILogo24Regular,
  AzureLogo24Regular,
  Cloud24Regular,
} from "@fluentui/react-icons";

interface Skill {
  name: string;
  percentage: number;
  category: string;
}

interface Certification {
  name: string;
  icon: ReactNode;
  link: string;
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills: Skill[] = [
    { name: "Python & Machine Learning", percentage: 95, category: "technical" },
    { name: "Excel & Data Analysis", percentage: 95, category: "methodology" },
    { name: "Power BI & Tableau", percentage: 95, category: "visualization" },
    { name: "SQL & Data Modeling", percentage: 92, category: "data" },
    { name: "AWS & Azure Cloud", percentage: 85, category: "cloud" },
  ];

  const certifications: Certification[] = [
    {
      name: "AWS Certified Developer – Associate",
      icon: <Cloud24Regular className="w-10 h-10" />,
      link: "https://www.credly.com/badges/4766e333-f070-4658-b8fa-14fc4bded7f8/linked_in_profile",
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      icon: <AzureLogo24Regular className="w-10 h-10" />,
      link: "https://www.credly.com/badges/9bbb657b-bec8-46c3-b076-f9f617a3b575/linked_in_profile",
    },
    {
      name: "Graduate Certificate in Applied Machine Learning",
      icon: <img src={MLLogo} alt="Machine Learning" className="w-10 h-10 object-contain" />,
      link: "https://drive.google.com/file/d/1UUV8EemoeEi4A2SBqcfeZvxN2fdTtWOp/view?usp=sharing",
    },
    {
      name: "Graduate Certificate in Business Intelligence & Data Mining",
      icon: <img src={DataMiningLogo} alt="Business Intelligence" className="w-10 h-10 object-contain" />,
      link: "https://drive.google.com/file/d/1F-qWCgeBiK8awBizxHduBc8_ln0DKQea/view?usp=sharing",
    },
    {
      name: "Graduate Certificate in Business Decision Sciences",
      icon: <img src={BDSLogo} alt="Business Decision Sciences" className="w-10 h-10 object-contain" />,
      link: "https://drive.google.com/file/d/1Efy5CkA-Oeics5jsu6KOTPcILfDhta-Y/view?usp=sharing",
    },
  ];

  const tools = [
    { name: "Visual Studio Code", icon: <VisualStudioLogo24Regular className="w-8 h-8" /> },
    { name: "Microsoft Excel", icon: <ExcelLogo24Regular className="w-8 h-8" /> },
    { name: "Power BI", icon: <PowerBILogo24Regular className="w-8 h-8" /> },
    { name: "Amazon AWS", icon: <Cloud24Regular className="w-8 h-8" /> },
    { name: "Microsoft Azure", icon: <AzureLogo24Regular className="w-8 h-8" /> },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-slate-600">
              Proficient in modern data analytics and business intelligence tools
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Grid */}
          <AnimatedSection>
            <div ref={ref}>
              <h3 className="text-2xl font-semibold text-slate-800 mb-8">
                Core Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-600">{skill.percentage}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-blue-600 h-2 rounded-full"
                        initial={{ width: "0%" }}
                        animate={inView ? { width: `${skill.percentage}%` } : { width: "0%" }}
                        transition={{ duration: 1.5, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Certifications & Tools */}
          <AnimatedSection>
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-8">
                Certifications
              </h3>
              <ul className="space-y-5">
                {certifications.map((cert, i) => (
                  <motion.li
                    key={cert.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="flex items-center space-x-6"
                  >
                    {cert.icon}
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-slate-700 hover:underline whitespace-nowrap"
                    >
                      {cert.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold text-slate-800 mt-12 mb-8">
                Tools
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    {tool.icon}
                    <span className="text-sm text-slate-600 mt-2 text-center">
                      {tool.name}
                    </span>
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
