import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

interface CurrentFocus {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
}

interface Stat {
  value: string;
  label: string;
  color: string;
}

export default function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openLinkedIn = () => {
    // TODO: Replace with actual LinkedIn profile URL
    console.log("LinkedIn profile to be opened");
  };

  // TODO: Update with actual current focus areas
  const currentFocus: CurrentFocus[] = [
    {
      title: "AI/ML Research",
      description: "Advanced NLP and computer vision applications",
      icon: "fas fa-brain",
      iconBg: "bg-blue-600",
      iconColor: "text-white"
    },
    {
      title: "Cloud Analytics", 
      description: "Scalable data pipelines on AWS and Azure",
      icon: "fas fa-cloud",
      iconBg: "bg-green-600", 
      iconColor: "text-white"
    },
    {
      title: "Data for Good",
      description: "Using analytics for social impact projects",
      icon: "fas fa-globe",
      iconBg: "bg-purple-600",
      iconColor: "text-white"
    }
  ];

  const stats: Stat[] = [
    { value: "500+", label: "Hours Coding", color: "text-blue-600" },
    { value: "50+", label: "Projects", color: "text-green-600" },
    { value: "15+", label: "Technologies", color: "text-purple-600" }
  ];

  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <p className="text-xl text-slate-600">Passionate about turning data into actionable business insights</p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">My Journey</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                {/* TODO: Update with actual personal story */}
                <p>
                  My passion for data science began during my undergraduate studies when I discovered the power of analytics to solve real-world business problems. This fascination led me to pursue advanced studies in Business Analytics and AI.
                </p>
                <p>
                  Throughout my professional journey at Ackerman Solutions and Innover Digital, I've had the privilege of working with diverse teams to deliver impactful data solutions. From reducing manual reporting time by 40% to improving sprint velocity by 25%, I've seen firsthand how the right analytical approach can transform business operations.
                </p>
                <p>
                  What drives me is the intersection of technology and human impact. Whether it's analyzing energy access in Afghanistan for the UN's SDGs or building emotion detection models for better customer understanding, I believe data science has the power to create positive change in the world.
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <i className="fas fa-envelope mr-2"></i>Get In Touch
                </Button>
                <Button 
                  variant="outline"
                  onClick={openLinkedIn}
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  <i className="fab fa-linkedin mr-2"></i>LinkedIn Profile
                </Button>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Interactive Elements */}
          <AnimatedSection delay={0.2}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">What I'm Working On</h3>
              
              <div className="space-y-6">
                {/* Current Focus Areas */}
                {currentFocus.map((focus, index) => (
                  <motion.div
                    key={focus.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-4 rounded-lg transition-all duration-200 cursor-pointer hover:shadow-md"
                    style={{
                      backgroundColor: focus.iconBg.includes('blue') ? '#dbeafe' : 
                                     focus.iconBg.includes('green') ? '#dcfce7' : '#f3e8ff'
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-12 h-12 ${focus.iconBg} rounded-lg flex items-center justify-center mr-4`}
                    >
                      <i className={`${focus.icon} ${focus.iconColor}`}></i>
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{focus.title}</h4>
                      <p className="text-sm text-slate-600">{focus.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Fun Stats */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className="cursor-pointer"
                    >
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-xs text-slate-600">{stat.label}</div>
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
