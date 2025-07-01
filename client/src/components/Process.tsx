import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  tags: string[];
  tagColor: string;
}

export default function Process() {
  // TODO: Customize process steps based on actual methodology used
  const processSteps: ProcessStep[] = [
    {
      number: "1",
      title: "Discover & Define",
      description: "Stakeholder interviews and requirement gathering to understand business needs",
      icon: "fas fa-users",
      iconBg: "bg-blue-100",
      tags: ["Stakeholder Interviews", "Requirement Gathering"],
      tagColor: "bg-blue-100 text-blue-800"
    },
    {
      number: "2", 
      title: "Plan & Prioritize",
      description: "Creating user stories and managing backlogs for agile delivery",
      icon: "fas fa-tasks",
      iconBg: "bg-green-100",
      tags: ["User Stories", "Jira", "Azure DevOps"],
      tagColor: "bg-green-100 text-green-800"
    },
    {
      number: "3",
      title: "Develop & Analyze", 
      description: "Building data pipelines and implementing machine learning solutions",
      icon: "fas fa-cogs",
      iconBg: "bg-purple-100",
      tags: ["Python", "AWS Redshift", "ML Models"],
      tagColor: "bg-purple-100 text-purple-800"
    },
    {
      number: "4",
      title: "Visualize & Deliver",
      description: "Creating dashboards and reports for stakeholder communication",
      icon: "fas fa-chart-bar", 
      iconBg: "bg-orange-100",
      tags: ["Power BI", "Tableau", "Sprint Delivery"],
      tagColor: "bg-orange-100 text-orange-800"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">My Business Analysis Process</h2>
            <p className="text-xl text-slate-600">A proven methodology from stakeholder needs to data-driven solutions</p>
          </div>
        </AnimatedSection>

        {/* Process Flow Diagram */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-green-600 via-purple-600 to-amber-500 opacity-30"></div>
          
          {/* Process Steps Grid */}
          <div className="grid lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.2}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  {/* Step Icon and Number */}
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-20 h-20 ${step.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-200 group-hover:shadow-lg`}
                    >
                      <i className={`${step.icon} text-3xl ${step.iconBg.includes('blue') ? 'text-blue-600' : 
                                                                step.iconBg.includes('green') ? 'text-green-600' :
                                                                step.iconBg.includes('purple') ? 'text-purple-600' : 
                                                                'text-amber-600'}`}></i>
                    </motion.div>
                    
                    {/* Step Number Badge */}
                    <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 ${
                      step.iconBg.includes('blue') ? 'bg-blue-600' : 
                      step.iconBg.includes('green') ? 'bg-green-600' :
                      step.iconBg.includes('purple') ? 'bg-purple-600' : 
                      'bg-amber-600'
                    } text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{step.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap justify-center gap-2 text-xs">
                    {step.tags.map((tag) => (
                      <span key={tag} className={`${step.tagColor} px-2 py-1 rounded-full`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Process Application Examples */}
        <AnimatedSection delay={0.8}>
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-slate-800 text-center mb-8">Applied at Leading Organizations</h3>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Ackerman Solutions Example */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-building text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-slate-800">Ackerman Solutions</h4>
                    <p className="text-slate-600 text-sm">Business Analyst</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {/* TODO: Update with actual achievements and metrics */}
                  Applied this process to deliver 15+ Power BI dashboards and reduce manual reporting time by 40% across multiple client engagements.
                </p>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="text-center p-2 bg-white rounded">
                    <div className="text-lg font-bold text-blue-600">15+</div>
                    <div className="text-xs text-slate-600">Dashboards</div>
                  </div>
                  <div className="text-center p-2 bg-white rounded">
                    <div className="text-lg font-bold text-green-600">40%</div>
                    <div className="text-xs text-slate-600">Time Saved</div>
                  </div>
                  <div className="text-center p-2 bg-white rounded">
                    <div className="text-lg font-bold text-purple-600">100+</div>
                    <div className="text-xs text-slate-600">User Stories</div>
                  </div>
                </div>
              </motion.div>

              {/* Innover Digital Example */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-digital-tachograph text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-slate-800">Innover Digital</h4>
                    <p className="text-slate-600 text-sm">Business Analyst</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {/* TODO: Update with actual achievements and metrics */}
                  Streamlined agile delivery processes, wrote 200+ user stories, and improved sprint velocity by 25% for digital transformation projects.
                </p>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="text-center p-2 bg-white rounded">
                    <div className="text-lg font-bold text-green-600">200+</div>
                    <div className="text-xs text-slate-600">User Stories</div>
                  </div>
                  <div className="text-center p-2 bg-white rounded">
                    <div className="text-lg font-bold text-amber-600">25%</div>
                    <div className="text-xs text-slate-600">Sprint Velocity ↑</div>
                  </div>
                  <div className="text-center p-2 bg-white rounded">
                    <div className="text-lg font-bold text-purple-600">5</div>
                    <div className="text-xs text-slate-600">Client Projects</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
