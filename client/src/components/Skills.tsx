import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "./AnimatedSection";

import MLLogo from "../resources/ml.png";
import AzureLogo from "../resources/azure.png";
import AWSLogo from "../resources/aws.png";
import DataMiningLogo from "../resources/datamining.png";
import BDSLogo from "../resources/bds.png";

interface Skill {
  name: string;
  percentage: number;
  category: string;
}

interface Certification {
  name: string;
  iconSrc: string;
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
      iconSrc: AWSLogo,
      link: "https://www.credly.com/badges/4766e333-f070-4658-b8fa-14fc4bded7f8/linked_in_profile",
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      iconSrc: AzureLogo,
      link: "https://www.credly.com/badges/9bbb657b-bec8-46c3-b076-f9f617a3b575/linked_in_profile",
    },
    {
      name: "Graduate Certificate in Applied Machine Learning",
      iconSrc: MLLogo,
      link: "https://drive.google.com/file/d/1UUV8EemoeEi4A2SBqcfeZvxN2fdTtWOp/view?usp=sharing",
    },
    {
      name: "Graduate Certificate in Business Intelligence & Data Mining",
      iconSrc: DataMiningLogo,
      link: "https://drive.google.com/file/d/1F-qWCgeBiK8awBizxHduBc8_ln0DKQea/view?usp=sharing",
    },
    {
      name: "Graduate Certificate in Business Decision Sciences",
      iconSrc: BDSLogo,
      link: "https://drive.google.com/file/d/1Efy5CkA-Oeics5jsu6KOTPcILfDhta-Y/view?usp=sharing",
    },
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
                    <img
                      src={cert.iconSrc}
                      alt={cert.name}
                      className="w-10 h-10 object-contain"
                    />
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
            </div>
          </AnimatedSection>




        </div>
      </div>
    </section>
  );
}
