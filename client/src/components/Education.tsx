import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "./AnimatedSection";

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
  const courseWork: CourseWork[] = [
    { name: "Machine Learning", icon: "fas fa-robot" },
    { name: "Data Mining", icon: "fas fa-database" },
    { name: "Predictive Analytics", icon: "fas fa-chart-line" },
    { name: "Cloud Computing", icon: "fas fa-cloud" },
    { name: "Business Intelligence", icon: "fas fa-chart-bar" },
    { name: "Statistical Methods", icon: "fas fa-calculator" }
  ];

  // TODO: Update with actual certifications and dates
  const certifications: Certification[] = [
    { name: "AWS Certified Solutions Architect", icon: "fab fa-aws", iconColor: "text-orange-500", year: "2023" },
    { name: "Microsoft Azure Fundamentals", icon: "fab fa-microsoft", iconColor: "text-blue-600", year: "2023" },
    { name: "Power BI Data Analyst", icon: "fas fa-chart-bar", iconColor: "text-amber-500", year: "2022" }
  ];

  const learningItems: LearningItem[] = [
    { name: "Coursera Data Science Specialization", icon: "fas fa-book" },
    { name: "Advanced Python for Data Science", icon: "fas fa-code" },
    { name: "Tableau Advanced Analytics", icon: "fas fa-chart-line" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Education & Learning</h2>
            <p className="text-xl text-slate-600">Building expertise through formal education and continuous learning</p>
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
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mr-4"
                >
                  <i className="fas fa-graduation-cap text-2xl text-white"></i>
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Master of Science</h3>
                  <p className="text-blue-600 font-semibold">Business Analytics & Artificial Intelligence</p>
                </div>
              </div>
              
              <div className="mb-6">
                {/* TODO: Update with actual university name and location */}
                <p className="text-slate-700 font-medium mb-2">University Name</p>
                <p className="text-sm text-slate-600 mb-4">Expected Graduation: 2024</p>
                <div className="flex items-center text-sm text-slate-600">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  <span>Location</span>
                </div>
              </div>

              {/* Key Coursework */}
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-800">Key Coursework</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {courseWork.map((course, index) => (
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

          {/* Previous Education & Certifications */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              
              {/* Undergraduate Degree */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ rotate: -10 }}
                    className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4"
                  >
                    <i className="fas fa-university text-white"></i>
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">Bachelor's Degree</h3>
                    {/* TODO: Update with actual undergraduate field */}
                    <p className="text-green-600 font-semibold">Engineering/Business</p>
                  </div>
                </div>
                {/* TODO: Update with actual undergraduate details */}
                <p className="text-slate-600 text-sm mb-2">University Name</p>
                <p className="text-xs text-slate-500">Graduation Year</p>
              </motion.div>

              {/* Professional Certifications */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-slate-800 mb-4">Professional Certifications</h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-between p-3 bg-white rounded-lg cursor-pointer transition-all duration-200"
                    >
                      <div className="flex items-center">
                        <i className={`${cert.icon} ${cert.iconColor} mr-3 text-lg`}></i>
                        <span className="font-medium text-sm text-slate-700">{cert.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {cert.year}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Continuous Learning */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-slate-800 mb-4">Continuous Learning</h3>
                <div className="space-y-2 text-sm">
                  {learningItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center hover:bg-white hover:bg-opacity-50 p-2 rounded transition-colors duration-200"
                    >
                      <i className={`${item.icon} text-purple-600 mr-2`}></i>
                      <span className="text-slate-700">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
