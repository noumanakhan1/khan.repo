"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { services } from "@/data/portfolio";
import { LinkButton } from "@/components/button";

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-transparent dark:from-slate-900/50 dark:to-transparent">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-6">Expertise & Solutions</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              I deliver high-performance, scalable, and secure engineering solutions. 
              From intelligent AI integrations to enterprise-grade web applications, 
              I build robust systems tailored to fuel your business growth.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500 dark:hover:border-purple-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                      <span className="text-blue-500 font-bold">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>


      {/* Tech Stack Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-900/50 dark:to-slate-900/50">
        <Container>
          <h2 className="text-4xl font-bold mb-12 text-center">Tech Stack</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                category: "Frontend",
                techs: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion"],
              },
              {
                category: "Backend",
                techs: ["Node.js", "Express.js", "Django", "Python", "Next.js API Routes", "RESTful APIs", "Socket.io"],
              },
              {
                category: "Database & Caching",
                techs: ["MongoDB", "PostgreSQL", "SQL", "Prisma ORM", "Firebase", "Redis"],
              },
              {
                category: "DevOps & Deployment",
                techs: ["Vercel", "Nginx", "Git", "GitHub Actions", "VPS Deployment", "CI/CD Pipelines"],
              },
            ].map((stack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                <h3 className="text-lg font-bold mb-4">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.techs.map((tech) => (
                    <li key={tech} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 -z-10"></div>
            <div className="px-8 py-16 sm:px-12 sm:py-20 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to start your project?
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Let's discuss your requirements and create something amazing together.
              </p>
              <LinkButton
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-slate-100"
              >
                Get in Touch
              </LinkButton>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
