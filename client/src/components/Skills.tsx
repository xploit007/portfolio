import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "./AnimatedSection";

import PythonLogo from "../resources/python.png";
import RLogo from "../resources/r.png";
import HTMLLogo from "../resources/html.png";
import ReactLogo from "../resources/react.png";
import VSLogo from "../resources/vs.png";
import JupyterLogo from "../resources/jupyter.png";
import HiveLogo from "../resources/hive.png";
import HadoopLogo from "../resources/hadoop.png";
import SparkLogo from "../resources/spark.png";
import GitLogo from "../resources/git.png";
import ExcelLogo from "../resources/excel.png";
import PowerBILogo from "../resources/powerbi.png";
import Tableau from "../resources/tableau.png";
import SQLLogo from "../resources/sql.png";
import AWS from "../resources/aws.png";
import Azure from "../resources/azure.png";
import MLLogo from "../resources/ml.png";
import DataMiningLogo from "../resources/datamining.png";
import BDSLogo from "../resources/bds.png";
import AWSLogo from "../resources/awscertified.png";
import AzureLogo from "../resources/azurecertified.png";
interface Certification {
  name: string;
  iconSrc: string;
  link: string;
}

const skills = [
  { name: "Python", icon: PythonLogo },
  { name: "R", icon: RLogo },
  { name: "SQL", icon: SQLLogo },
  { name: "HTML", icon: HTMLLogo },
  { name: "ReactJS", icon: ReactLogo },
  { name: "Visual Studio", icon: VSLogo },
  { name: "Jupyter Notebook", icon: JupyterLogo },
  { name: "Git & GitHub", icon: GitLogo },
  { name: "Excel", icon: ExcelLogo },
  { name: "Power BI", icon: PowerBILogo },
  { name: "Tableau", icon: Tableau },
  { name: "AWS", icon: AWS },
  { name: "Azure", icon: Azure },
  { name: "Hive", icon: HiveLogo },
  { name: "Hadoop", icon: HadoopLogo },
  { name: "Spark", icon: SparkLogo },
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

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-slate-600">
              Skilled across multiple technologies and platforms
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Honeycomb Skill Grid */}
          <AnimatedSection>
            <div ref={ref}>
              <h3 className="text-2xl font-semibold text-slate-800 mb-8">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-14 h-14 object-contain mb-2"
                    />
                    <span className="text-sm font-medium text-slate-700">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Certifications */}
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
                      className="text-lg text-slate-700 hover:underline"
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
