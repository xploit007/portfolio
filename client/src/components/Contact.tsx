import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "./AnimatedSection";

interface ContactInfo {
  icon: string;
  iconBg: string;
  title: string;
  value: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // TODO: Update with actual contact information
  const contactInfo: ContactInfo[] = [
    {
      icon: "fas fa-envelope",
      iconBg: "bg-blue-600",
      title: "Email",
      value: "your.email@example.com" // TODO: Replace with actual email
    },
    {
      icon: "fab fa-linkedin",
      iconBg: "bg-blue-600",
      title: "LinkedIn", 
      value: "/in/yourprofile" // TODO: Replace with actual LinkedIn
    },
    {
      icon: "fab fa-github",
      iconBg: "bg-gray-800",
      title: "GitHub",
      value: "github.com/yourprofile" // TODO: Replace with actual GitHub
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Implement backend API call for form submission
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Let's Connect</h2>
            <p className="text-xl text-slate-600">Ready to collaborate on data-driven solutions? Let's discuss how we can work together.</p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-slate-700 mb-2 block">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Your full name"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-slate-700 mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-slate-700 mb-2 block">
                    Subject
                  </Label>
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="collaboration">Project Collaboration</SelectItem>
                      <SelectItem value="consulting">Consulting Opportunity</SelectItem>
                      <SelectItem value="job">Job Opportunity</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-slate-700 mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <i className="fas fa-paper-plane mr-2"></i>Send Message
                </Button>
              </form>
            </motion.div>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection delay={0.2}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Other Ways to Reach Me</h3>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center cursor-pointer hover:bg-white hover:bg-opacity-50 p-3 rounded-lg transition-all duration-200"
                  >
                    <div className={`w-10 h-10 ${info.iconBg} rounded-lg flex items-center justify-center mr-4`}>
                      <i className={`${info.icon} text-white`}></i>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">{info.title}</p>
                      <p className="text-slate-600 text-sm">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4"
              >
                <div className="flex items-center mb-2">
                  <i className="fas fa-clock text-green-600 mr-2"></i>
                  <span className="font-medium text-slate-800">Quick Response</span>
                </div>
                <p className="text-sm text-slate-600">I typically respond to messages within 24 hours during business days.</p>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
