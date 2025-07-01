import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import AnimatedSection from "./AnimatedSection";
import { FaEnvelope, FaLinkedin, FaGithub, FaClock } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";

const FORM_ENDPOINT = "https://formsubmit.co/Mallikarjun.Gudum@gmail.com";

interface ContactInfo {
  Icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  title: string;
  value: string;
  url: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo: ContactInfo[] = [
    {
      Icon: FaEnvelope,
      iconBg: "bg-blue-600",
      title: "Email",
      value: "Mallikarjun.Gudum@gmail.com",
      url: "mailto:Mallikarjun.Gudum@gmail.com",
    },
    {
      Icon: FaLinkedin,
      iconBg: "bg-blue-600",
      title: "LinkedIn",
      value: "in/mallikarjungn/",
      url: "https://linkedin.com/in/mallikarjungn/",
    },
    {
      Icon: FaGithub,
      iconBg: "bg-gray-800",
      title: "GitHub",
      value: "github.com/xploit007",
      url: "https://github.com/xploit007",
    },
  ];

  const handleInputChange = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Build form data
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    data.append("message", formData.message);
    // Formsubmit hidden fields:
    data.append("_captcha", "false");
    data.append(
      "_subject",
      "New message from Portfolio site"
    );

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error("Network error");

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form state
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
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
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-slate-600">
              Ready to collaborate on data-driven solutions? Let's chat.
            </p>
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
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-700 mb-2 block"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      handleInputChange("name", e.target.value)
                    }
                    placeholder="Your full name"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700 mb-2 block"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      handleInputChange("email", e.target.value)
                    }
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="subject"
                    className="text-sm font-medium text-slate-700 mb-2 block"
                  >
                    Subject
                  </Label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      handleInputChange("subject", e.target.value)
                    }
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-slate-700"
                  >
                    <option value="" disabled hidden>
                      Select a topic
                    </option>
                    <option value="Project Collaboration">
                      Project Collaboration
                    </option>
                    <option value="Consulting Opportunity">
                      Consulting Opportunity
                    </option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-700 mb-2 block"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
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
                  <FaEnvelope className="mr-2 w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </AnimatedSection>

          {/* Other Ways to Reach Me */}
          <AnimatedSection delay={0.2}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-6">
                Other Ways to Reach Me
              </h3>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info, idx) => (
                  <motion.a
                    key={info.title}
                    href={info.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center hover:bg-white hover:bg-opacity-50 p-3 rounded-lg transition-all duration-200"
                  >
                    <div
                      className={`w-10 h-10 ${info.iconBg} rounded-lg flex items-center justify-center mr-4`}
                    >
                      <info.Icon className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">
                        {info.title}
                      </p>
                      <p className="text-slate-600 text-sm">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4"
              >
                <div className="flex items-center mb-2">
                  <FaClock className="text-green-600 mr-2 w-5 h-5" />
                  <span className="font-medium text-slate-800">
                    Quick Response
                  </span>
                </div>
                <p className="text-sm text-slate-600">
                  I typically respond within 24 hours during business days.
                </p>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
