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
  Lamp,
  Maximize2,
  Minimize2,
  X,
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

export default function Portfolio() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "REST APIs",
    "Tailwind CSS",
    "Sass",
    "Framer Motion",
    "Jest",
    "Cypress",
    "Git",
    "Docker",
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      link: "https://github.com/yourusername/ecommerce-platform",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Task Management App",
      description:
        "A Kanban-style task management application with team collaboration features.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "GraphQL"],
      link: "https://github.com/yourusername/task-management-app",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Weather Dashboard",
      description:
        "An interactive weather dashboard with location-based forecasts and historical data.",
      technologies: ["React", "D3.js", "OpenWeatherMap API"],
      link: "https://github.com/yourusername/weather-dashboard",
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      link: "https://www.yourverificationlink.com",
    },
    {
      title: "Google Professional Cloud Developer",
      issuer: "Google Cloud",
      date: "2022",
      link: "https://www.yourverificationlink.com",
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2021",
      link: "https://www.yourverificationlink.com",
    },
  ];

  const experience = [
    {
      title: "Technical Account Manager",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description:
        "Manage key client relationships and drive technical solutions.",
    },
    {
      title: "Customer Success Manager",
      company: "Cloud Innovations Ltd.",
      period: "2018 - 2021",
      description:
        "Ensured client satisfaction and adoption of cloud technologies.",
    },
    {
      title: "Presales Engineer",
      company: "Software Systems Co.",
      period: "2015 - 2018",
      description: "Provided technical expertise during the sales process.",
    },
  ];

  const sections = [
    { id: "hero", title: "Home" },
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "experience", title: "Experience" },
    { id: "projects", title: "Projects" },
    { id: "certificates", title: "Certificates" },
    { id: "contact", title: "Contact" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the data to an API
    console.log("Form submitted");
    setIsContactOpen(false);
  };

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
              <span className="text-2xl font-bold">Bharathan</span>
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
        id="hero"
        className="relative h-[calc(100vh-64px)] flex items-center justify-center"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
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
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg mb-2"
          >
            Bharathan Alwarsamy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Hi, I&apos;m Bharathan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-muted-foreground"
          >
            Technical Account Manager | Full Stack Enthusiast
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center space-y-4"
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
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" required />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href="mailto:your.email@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-8 h-8" />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
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
            className="text-3xl font-bold mb-8 text-center"
          >
            About Me
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
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
                className="rounded-lg shadow-lg"
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
                With a solid foundation in presales, customer success, and
                currently excelling as a Technical Account Manager, I bring a
                unique blend of technical expertise and strategic business
                insight. My passion lies in bridging the gap between technology
                and business, ensuring that innovative solutions align
                seamlessly with client needs. Throughout my career, I have
                thrived on driving results, fostering long-lasting
                relationships, and delivering tangible value. I am dedicated to
                helping clients unlock growth by offering tailored solutions
                that address both immediate challenges and long-term goals.
                Let&apos;s connect and collaborate on driving success together!
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                I specialize in creating responsive and intuitive user
                interfaces using React and enhancing them with smooth
                animations. On the server-side, I&apos;m proficient with Node.js
                and have experience with both SQL and NoSQL databases.
              </p>
              <p className="text-lg text-muted-foreground">
                When I&apos;m not coding, you can find me exploring new tech,
                contributing to open-source projects, or sharing my knowledge
                through tech blogs.
              </p>
            </motion.div>
          </div>
        </div>
        <AnimatedArrow targetId="skills" />
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
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
                <Card>
                  <CardContent className="flex items-center justify-center h-20">
                    <span className="text-lg font-semibold">{skill}</span>
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
        <div className="container mx-auto px-6">
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
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Featured Projects
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
                <Card>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-block bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors flex items-center"
                    >
                      View Project <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
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
        <div className="container mx-auto px-6">
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
                <Button type="submit" className="w-full">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
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
    </div>
  );
}
