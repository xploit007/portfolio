import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // TODO: Replace with actual resume file path
    console.log("Download resume functionality to be implemented");
  };

  return (
    <div className="min-h-screen flex items-center gradient-bg pt-20">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Profile Image with Animation */}
        <div className="lg:order-2 flex justify-center">
          <AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              {/* Animated gradient background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              
              {/* Profile Image Container */}
              <div className="relative">
                {/* TODO: Replace with actual professional headshot */}
                {/* Placeholder using a professional stock image */}
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                  alt="Mallikarjun Gudumagatte Nagaraja - Professional Headshot" 
                  className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-2xl transition-all duration-300"
                />
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg"
                >
                  <i className="fas fa-chart-line"></i>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg"
                >
                  <i className="fas fa-brain"></i>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Hero Content */}
        <div className="lg:order-1">
          <AnimatedSection>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight"
            >
              {/* TODO: Update with actual name */}
              Mallikarjun<br />
              <span className="text-gradient">Gudumagatte Nagaraja</span>
            </motion.h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-slate-600 mb-8 font-medium"
            >
              {/* Using Option C from blueprint: The Hybrid approach */}
              MS in Business Analytics & AI candidate with hands-on experience in cloud data pipelines, machine learning, and agile product delivery.
            </motion.h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-slate-600 mb-10 leading-relaxed"
            >
              I thrive at the intersection of business and technology, converting stakeholder needs into actionable user stories and building end-to-end analytical solutions. My experience spans from AWS data integration and Power BI reporting to deploying NLP models with Python.
            </motion.p>
          </AnimatedSection>
          
          {/* Call-to-Action Buttons */}
          <AnimatedSection delay={0.6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                View My Projects
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('process')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                My Process
              </Button>
              <Button 
                variant="ghost"
                onClick={downloadResume}
                className="text-slate-600 hover:text-blue-600 font-semibold px-8 py-4 text-lg border border-gray-300 hover:border-blue-600 transition-all duration-200"
              >
                <i className="fas fa-download mr-2"></i>Download Resume
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>

      {/* Floating scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <i className="fas fa-chevron-down text-blue-600 text-2xl"></i>
      </motion.div>
    </div>
  );
}
