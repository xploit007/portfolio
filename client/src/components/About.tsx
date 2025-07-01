import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import NYCSkyLine from "../resources/NYC_Skyline.png"

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
      title: "Travel Analytics",
      description: "Analyzing patterns in cities, cultures, and urban landscapes",
      icon: "fas fa-map-marked-alt",
      iconBg: "bg-blue-600",
      iconColor: "text-white"
    },
    {
      title: "Global Exploration", 
      description: "Discovering new destinations through an analytical lens",
      icon: "fas fa-globe-americas",
      iconBg: "bg-green-600", 
      iconColor: "text-white"
    },
    {
      title: "Cultural Data",
      description: "Finding insights in diverse neighborhoods and local patterns",
      icon: "fas fa-users",
      iconBg: "bg-purple-600",
      iconColor: "text-white"
    }
  ];

  const stats: Stat[] = [
    { value: "10+", label: "States Explored", color: "text-blue-600" },
    { value: "4+", label: "Countries Analyzed", color: "text-green-600" },
    { value: "∞", label: "Patterns Discovered", color: "text-purple-600" }
  ];

  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Travel Tales</h2>
            <p className="text-xl text-slate-600">Exploring the world with an analytical mind, one destination at a time</p>
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
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">What Drives Me</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                {/* TODO: Update with actual personal travel stories and experiences */}
                <p>
                  When I'm not analyzing datasets, you'll find me exploring the world with the same analytical curiosity I bring to my work. I absolutely love traveling and discovering new places, always carrying my data-driven perspective wherever I go.
                </p>
                <p>
                  Standing in New York, I can't help but see the Manhattan skyline as a magnificent histogram - with One World Trade Center rising like the tallest bar, each skyscraper telling a story of urban growth patterns and architectural evolution over time. Every city becomes a living dataset waiting to be explored.
                </p>
              </div>

              {/* Travel Photo Section */}
              <div className="mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative rounded-xl overflow-hidden shadow-2xl"
                >
                  <img 
                    src={NYCSkyLine} 
                    alt="NYC Skyline - Data Analyst's Perspective"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <p className="text-white text-sm font-medium italic">
                      "One World Trade Center rising like the tallest bar in a skyline histogram"
                    </p>
                  </div>
                </motion.div>
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
              <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">Current Focus</h3>
              
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