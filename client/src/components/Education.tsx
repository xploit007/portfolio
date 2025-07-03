import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "./AnimatedSection";
import UTDLogo from "../resources/utd.png";
import Reva from "../resources/reva.png";

interface CourseWork {
  name: string;
  icon: string;
}

interface Certification {
  name: string;
  icon: string;
  iconColor: string;
  year: string;
}

interface LearningItem {
  name: string;
  icon: string;
}

export default function Education() {
  // TODO: Update with actual education details
const courseWorkUTD: CourseWork[] = [
  {
    name: "Applied Econometrics & Time Series Analysis",
    icon: "fas fa-chart-line",
  },
  {
    name: "Database Foundations for Business Analytics",
    icon: "fas fa-database",
  },
  {
    name: "Predictive Analytics for Data Science",
    icon: "fas fa-bolt",
  },
  {
    name: "Prescriptive Analytics",
    icon: "fas fa-sliders-h",
  },
  {
    name: "Advanced Statistics for Data Science",
    icon: "fas fa-calculator",
  },
  {
    name: "Programming for Data Science",
    icon: "fas fa-code",
  },
  {
    name: "Applied Machine Learning",
    icon: "fas fa-robot",
  },
  {
    name: "Applied Natural Language Processing",
    icon: "fas fa-language",
  },
  {
    name: "Big Data",
    icon: "fas fa-network-wired",
  },
  {
    name: "Causal Analytics & A/B Testing",
    icon: "fas fa-vials",
  },
];


  const courseWorkREVA: CourseWork[] = [
    { name: "Machine Learning & Deep Learning", icon: "fas fa-robot" },
    { name: "Big Data & Data Science", icon: "fas fa-database" },
    { name: "Python Programming", icon: "fas fa-chart-line" },
    { name: "C Programming", icon: "fas fa-cloud" },
    { name: "Object Oriented Programming", icon: "fas fa-chart-bar" },
    { name: "Web Programming", icon: "fas fa-calculator" },
    { name: "Data Structures using C++", icon: "fas fa-chart-line" },
    { name: "Cloud Computing", icon: "fas fa-cloud" },
    { name: "Database Management System", icon: "fas fa-chart-bar" },
    { name: "Theory of Algorithms", icon: "fas fa-calculator" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
            <p className="text-xl text-slate-600">Building expertise through formal education</p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Current Education */}
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 h-full"
            >
              <div className="flex items-center mb-6">
                {/* Circular logo container */}
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={UTDLogo}
                    alt="UT Dallas logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    Master of Science
                  </h3>
                  <p className="text-blue-600 font-semibold">
                    Business Analytics & Artificial Intelligence
                  </p>
                </div>
              </div>

              
           {/* University + Period + Location */}
                <div className="mb-6">
                  <p className="text-lg font-bold text-slate-800">
                    The University of Texas at Dallas, Richardson, TX
                  </p>
                  <p className="text-sm text-slate-600 mb-1">
                    August&nbsp;2023&nbsp;–&nbsp;May&nbsp;2025
                  </p>
                  {/* <div className="flex items-center text-sm text-slate-600">
                    <i className="fas fa-map-marker-alt mr-2" />
                  </div> */}
                </div>


              {/* Key Coursework */}
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-800">Key Coursework</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {courseWorkUTD.map((course, index) => (
                    <motion.div
                      key={course.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center hover:bg-white hover:bg-opacity-50 p-2 rounded transition-colors duration-200"
                    >
                      <i className={`${course.icon} text-blue-600 mr-2 text-xs`}></i>
                      <span>{course.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Previous Education */}
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 h-full"
            >
              <div className="flex items-center mb-6">
                {/* Circular logo container */}
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={Reva}
                    alt="Reva logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    Bachelor of Technology
                  </h3>
                  <p className="text-blue-600 font-semibold">
                    Electronics and Communications Engineering
                  </p>
                </div>
              </div>

              
                  {/* University + Period + Location */}
                  <div className="mb-6">
                    <p className="text-lg font-bold text-slate-800">
                      REVA University, Bengaluru, India
                    </p>
                    <p className="text-sm text-slate-600 mb-1">
                      August&nbsp;2018&nbsp;–&nbsp;May&nbsp;2022
                    </p>
                    {/* <div className="flex items-center text-sm text-slate-600">
                      <i className="fas fa-map-marker-alt mr-2" />
                    </div> */}
                  </div>


              {/* Key Coursework */}
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-800">Key Coursework</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {courseWorkREVA.map((course, index) => (
                    <motion.div
                      key={course.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center hover:bg-white hover:bg-opacity-50 p-2 rounded transition-colors duration-200"
                    >
                      <i className={`${course.icon} text-blue-600 mr-2 text-xs`}></i>
                      <span>{course.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
