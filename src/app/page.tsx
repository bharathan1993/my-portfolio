"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AIChatbox from '@/components/AIChatbox';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Award,
  Send,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AnimatedArrow } from "@/components/ui/AnimatedArrow";
import ConfirmationMessage from '@/components/ConfirmationMessage';

const MotionSpan = motion.span;

export default function Portfolio() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const skills = [
    "Solution Consulting",
    "Customer Success Management",
    "Product Configuration",
    "SQL",
    "Technical Communication",
    "Business Development",
    "Trend Analysis",
    "REST APIs",
    "Strategic Planning", 
    "Zuora Billing",
    "Zuora Revenue (Basic)",
    "Python (Basic)",
    "Workshop Facilitation",
    "Architecture Design",
    "Product Webinars",
    "Business Presentations"
  ];

  const projects = [
    {
      title: "ATM Fraud Prevention System(2014)",
      description:
        "A mobile application aimed at reducing ATM fraud by preventing PIN hacking and skimming technology. The project was selected for a competition conducted by TANSCST.",
      technologies: ["Arudino", "Android", "Java", "Bluetooth","IoT","Embedded Systems"],
      link: "https://github.com/yourusername/ecommerce-platform",
      image: "/pr1.jpeg?height=600&width=400",
    },
    {
      title: "A Study on Agile Project Management Practices in IT Industries(2016)",
      description:
        "An analysis of bottlenecks faced by IT firms and the applicability of agile project management practices to enhance efficiency in software development.",
      technologies: ["Kanban", "Lean Software Development", "Extreme Programming", "Dynamic Systems Development Method(DSDM)"],
      link: "https://github.com/yourusername/task-management-app",
      image: "/pr2.jpeg?height=300&width=400",
    },
    {
      title: "X Culture Project(2016)",
      description:
        "A market expansion initiative for Sacona Entertainment’s 3D game balls, focusing on identifying new markets and developing entry and marketing strategies for overseas products.",
technologies: ["Market Research", "Competitive Strategy", "Data Analysis"],
      link: "https://github.com/yourusername/weather-dashboard",
      image: "/pr3.jpeg?height=300&width=400",
    },
  ];

  const certificates = [
    {
      title: "Zuora Billing Solution Architect",
      issuer: "Zuora University",
      date: "2024",
      link: "https://certifiedimplementer.zuora.com/d0a0caf9-c9d0-48ef-80c4-89db20a7561f",
    },
    {
      title: "Zuora Billing Delivery Architect",
      issuer: "Zuora University",
      date: "2023",
      link: "https://certifiedimplementer.zuora.com/30929eeb-e4ca-40a1-91d2-dc0f299a29d8#acc.mPalTEkz",
    },
    {
      title: "Zuora Billing Analyst",
      issuer: "Zuora University",
      date: "2022",
      link: "https://certifiedimplementer.zuora.com/3a1267c4-c041-4311-bdd5-977392737c4e#acc.jzdNv92x",
    },
    {
      title: "ITIL® Foundation Certificate",
      issuer: "AXELOS Global Best Practice",
      date: "2022",
      link: "https://drive.google.com/file/d/1HmZMCUgvJTJ0YmVKpDuoLv69wE4zgiWU/view",
    },
    {
      title: "RPA Business Analyst",
      issuer: "UI Path",
      date: "2018",
      link: "https://drive.google.com/file/d/1fXcEOffeNZ6w6j1fDAdJgXo70Mz-UL5Q/view",
    },
    {
      title: "Automation Essentials",
      issuer: "WorkFusion",
      date: "2017",
      link: "https://www.credential.net/41298822-e552-4a5b-9dd1-9048096b918a#acc.OGpJRnYr",
    }
  ];

  const experience = [
    {
      title: "Technical Account Manager",
      company: "Zuora Inc.",
      period: "March 2021 - Present",
      description:
        "Drive technical solutions and manage key client relationships for strategic, enterprise, and mid-market accounts. Conduct product workshops, collaborate with product engineers, and design tailored technical solutions."},
    {
      title: "Customer Success Engineer",
      company: "Zoho Corporation Pvt Ltd.",
      period: "March 2019 - March 2021",
      description: "Supported a range of SaaS products by understanding client needs, assisting sales, and conducting product webinars. Collaborated with product management and engineering teams to enhance user experience and improve product efficacy."},
    {
      title: "Associate Business Analyst",
      company: "Changepond Technologies",
      period: "August 2016 - February 2019",
      description: "Managed the presales lifecycle by decoding requirements and conducting client clarification sessions. Developed RFP documentation and created impactful sales presentations. Collaborated with marketing to align strategies with organizational goals and prepared Business Requirement Documents with cross-functional teams. Assisted the CTO in responding to RFIs, RFPs, and RFQs, and highlighted the company’s technical capabilities through presentations."},
  ];

  const sections = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "experience", title: "Experience" }, // Added this line
    { id: "projects", title: "Projects" },
    { id: "certificates", title: "Certificates" },
    { id: "contact", title: "Contact" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
  
    // Show confirmation message immediately
    setShowConfirmation(true);
    setIsContactOpen(false);
  
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      // Optionally, you can show an error message to the user here
      // For example: setErrorMessage('Failed to send message. Please try again later.');
      setErrorMessage('Failed to send message. Please try again later.');
      setShowConfirmation(false);
    } finally {
      // Hide confirmation message after 3 seconds, regardless of success or failure
      setTimeout(() => setShowConfirmation(false), 3000);
    }
  };

  const resetAnimation = () => {
    setAnimationKey(prevKey => prevKey + 1);
  };

  const handleNavClick = (sectionId: string) => {
    if (sectionId === "home") {
      resetAnimation();
    }
    // Smooth scroll to the section
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
/* Testing */
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-sm bg-background/80 shadow-sm">
        <div className="container mx-auto px-6 py-3 mt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl font-bold">Who I Am</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex space-x-6"
            >
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(section.id);
                  }}
                >
                  {section.title}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[calc(100vh-64px)] flex items-center justify-center"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            key={`image-${animationKey}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Image
              src="/b1.jpg"
              alt="Bharathan Alwarsamy"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
          </motion.div>
          <motion.h1
            key={`text-${animationKey}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            {"Hi, I'm Bharathan".split("").map((char, index) => (
              <MotionSpan
                key={`${char}-${index}-${animationKey}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {char === " " ? "\u00A0" : char}
              </MotionSpan>
            ))}
          </motion.h1>
          <motion.p
            key={`subtitle-${animationKey}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-muted-foreground"
          >
            Technical Account Manager | Customer Success Professional
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center space-y-16" // Increased space-y to 16
          >  
            <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
              <DialogTrigger asChild>
                <Button>Get in Touch</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Contact Me</DialogTitle>
                  <DialogDescription>
                    Fill out this form and I&apos;ll get back to you as soon as
                    possible.
                  </DialogDescription>
                </DialogHeader>
       <form onSubmit={handleSubmit} className="space-y-4">
  <div>
    <Label htmlFor="name-inline">Name</Label>
    <Input id="name-inline" name="name" required />
  </div>
  <div>
    <Label htmlFor="email-inline">Email</Label>
    <Input id="email-inline" name="email" type="email" required />
  </div>
  <div>
    <Label htmlFor="message-inline">Message</Label>
    <Textarea id="message-inline" name="message" required />
  </div>
  <motion.button
    type="submit"
    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
    whileTap={{ scale: 0.95 }}
  >
    Send Message
    <Send className="ml-2 h-4 w-4" />
  </motion.button>
</form>
              </DialogContent>
            </Dialog>
            
            <div className="flex justify-center space-x-6">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=itzbharathan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-8 h-8" />
              </a>
              <a
                href="https://github.com/bharathan1993"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/bharathan1993/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </motion.div>
        </div>
        <AnimatedArrow targetId="about" />
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-16 text-center" // Increased mb-12 to mb-16
          >
            About Me
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16"> {/* Added mb-16 for bottom margin */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full md:w-1/3"
            >
              <Image
                src="/b4.jpg?height=400&width=300"
                alt="About Me"
                width={300}
                height={400}
                className="rounded-lg shadow-lg mx-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full md:w-2/3"
            >
              <p className="text-lg mb-6 text-muted-foreground">
                I'm Bharathan Alwarsamy, a Solution Consultant and Technical Account Manager with over seven years in SaaS consulting and business development. At Zuora Inc., I help enterprise and mid-market clients optimize their order-to-cash workflows through tailored solutions and best practices.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Previously, as a Customer Success Engineer at Zoho, I worked across CRM, analytics, and project management tools, bridging customer needs with product teams to enhance user experience. This role sharpened my technical and communication skills, building a foundation for impactful client partnerships.
              </p>
              <p className="text-lg text-muted-foreground">
                With skills in SQL, REST APIs, and a background in Python, I blend technical expertise with strategic insight. I hold an MBA in Operations and a degree in Computer Science, and I'm passionate about continuous growth and delivering value-driven solutions.
              </p>
            </motion.div>
          </div>
        </div>
        <AnimatedArrow targetId="skills" />
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 bg-secondary/20">
        <div className="container mx-auto px-6 pb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Skills & Technologies
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full"> {/* Add h-full to make the card take full height */}
                  <CardContent className="flex items-center justify-center h-full p-4"> {/* Add h-full and adjust padding */}
                    <span className="text-lg font-semibold text-center">{skill}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        <AnimatedArrow targetId="experience" />
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 bg-background">
        <div className="container mx-auto px-6 pb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Professional Experience
          </motion.h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Briefcase className="w-6 h-6 mr-2 text-primary" />
                      {job.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold mb-2">{job.company}</p>
                    <p className="text-muted-foreground mb-2">{job.period}</p>
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        <AnimatedArrow targetId="projects" />
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 bg-secondary/20">
        <div className="container mx-auto px-6 pb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Academic Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="flex flex-col h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover rounded-t-lg" // Changed h-48 to h-64
                  />
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-block bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        <AnimatedArrow targetId="certificates" />
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="relative py-20 bg-background">
        <div className="container mx-auto px-6 pb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Certificates
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="w-6 h-6 mr-2 text-primary" />
                      {certificate.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">
                      Issuer: {certificate.issuer}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Date: {certificate.date}
                    </p>
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors flex items-center"
                    >
                      Verify Certificate{" "}
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        <AnimatedArrow targetId="contact" />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Get in Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full max-w-lg mx-auto"
          >
            <p className="text-center mb-8 text-muted-foreground">
              I&apos;m always open to new opportunities and collaborations. Feel
              free to reach out!
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name-inline">Name</Label>
                  <Input id="name-inline" required />
                </div>
                <div>
                  <Label htmlFor="email-inline">Email</Label>
                  <Input id="email-inline" type="email" required />
                </div>
                <div>
                  <Label htmlFor="message-inline">Message</Label>
                  <Textarea id="message-inline" required />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Bharathan Alwarsamy. All rights
            reserved.
          </p>
        </div>
      </footer>
      <AIChatbox />
      {showConfirmation && <ConfirmationMessage />}
      {errorMessage && (
        <div className="text-red-500 mt-2">{errorMessage}</div>
      )}
    </div>
  );
}
