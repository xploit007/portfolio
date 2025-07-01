import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import Headshot from '../resources/Headshot1.png';
import Resume from '../resources/Mallikarjun_GudumagatteNagaraja-resume.pdf';
import LR from '../resources/RecommendationLetter_Mallikarjun.pdf';


export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

const downloadResume = () => {
  // create a temporary anchor tag
  console.log("Download resume functionality to be implemented");
  const link = document.createElement('a');
  link.href = Resume;
  link.download = 'Resume-Mallikarjun_Gudumagatte_Nagaraja.pdf'; // the filename that will be downloaded
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const downloadLR = () => {
  // create a temporary anchor tag
  console.log("Download recommendation letter functionality to be implemented");
  const link = document.createElement('a');
  link.href = LR;
  link.download = 'Recommendation-Mallikarjun_Gudumagatte_Nagaraja.pdf'; // the filename that will be downloaded
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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
                  src={Headshot} 
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
              Mallikarjun (Arjun)<br />
              <span className="text-gradient">Gudumagatte Nagaraja</span>
            </motion.h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-slate-600 mb-4 font-medium"
            >
              MS in Business Analytics &amp; AI
            </motion.h2>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-slate-600 mb-10 leading-relaxed"
            >
              I play with data and translate complex datasets into clear, stakeholder-ready stories, engineer ETL pipelines, fine-tune ML algorithms, and craft interactive Power BI dashboards that empower non-technical audiences to make data-driven decisions.
            </motion.p>
          </AnimatedSection>
          
          {/* Call-to-Action Buttons */}
          <AnimatedSection delay={0.6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-flex flex-col gap-4"
            >
              {/* first row */}
              {/* <div className="flex gap-4">
                <Button
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  View My Projects
                </Button>

                <Button
                  onClick={() => scrollToSection('process')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  My Process
                </Button>
              </div> */}

              {/* second row — w-full makes it span the combined width above */}
              <Button
                onClick={downloadResume}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <i className="fas fa-download mr-2" />
                Download Resume
              </Button>
              {/* second row — w-full makes it span the combined width above */}
              <Button
                onClick={downloadLR}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <i className="fas fa-download mr-2" />
                Download Recommendation Letter
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
