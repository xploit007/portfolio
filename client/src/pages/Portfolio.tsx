import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import About from "@/components/About";
import Contact from "@/components/Contact";
// import ChatBot from "@/components/ChatBot";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Mallikarjun Gudumagatte Nagaraja";
    
    // SEO meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'MS in Business Analytics & AI candidate with hands-on experience in cloud data pipelines, machine learning, and agile product delivery. View interactive projects and professional experience.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'MS in Business Analytics & AI candidate with hands-on experience in cloud data pipelines, machine learning, and agile product delivery. View interactive projects and professional experience.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Navigation - Sticky header with smooth scrolling */}
      <Navigation />
      
      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section - Professional headshot and introduction */}
        <section id="home">
          <Hero />
        </section>
        
        {/* 2. Skills Section - Animated skill bars and certifications */}
        <section id="skills">
          <Skills />
        </section>
        
        {/* 3. Experience Section - Professional timeline with achievements */}
        <section id="experience">
          <Experience />
        </section>
        
                {/* 6. Projects Section - Interactive project showcases with scrollytelling */}
        <section id="projects">
          <Projects />
        </section>
        {/* 4. Education Section - Academic background and certifications */}
        <section id="education">
          <Education />
        </section>
        
        {/* 5. About Section - Personal story and current focus */}
        {/* <section id="about">
          <About />
        </section> */}
      
        
        {/* 7. Process Section - Business Analysis methodology visualization */}
        {/* <section id="process">
          <Process />
        </section> */}
        
        {/* Contact Section - Contact form and social links */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Mallikarjun Gudumagatte Nagaraja</h3>
          <p className="text-gray-300 mb-6">Data Story Teller | DataTellsStorySells</p>
          
          <div className="flex justify-center space-x-6 mb-8">
  <a
    href="https://linkedin.com/in/mallikarjungn/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white transition-colors duration-200"
  >
    <i className="fab fa-linkedin text-2xl"></i>
  </a>
  <a
    href="https://github.com/xploit007"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white transition-colors duration-200"
  >
    <i className="fab fa-github text-2xl"></i>
  </a>
  <a
    href="mailto:Mallikarjun.Gudum@gmail.com"
    className="text-gray-300 hover:text-white transition-colors duration-200"
  >
    <i className="fas fa-envelope text-2xl"></i>
  </a>
  <a
    href="https://www.instagram.com/xploited.shots/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white transition-colors duration-200"
  >
    <i className="fab fa-instagram text-2xl"></i>
  </a>
</div>

          
          <div className="border-t border-gray-600 pt-6">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Mallikarjun Gudumagatte Nagaraja. Built with React & Framer Motion.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Floating Chatbot - Expandable chat interface for portfolio assistance
      <ChatBot /> */}
    </div>
  );
}
