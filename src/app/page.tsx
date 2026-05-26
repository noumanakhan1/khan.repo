"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { LinkButton } from "@/components/button";
import { ChevronDown, Code2, Briefcase, Mail } from "lucide-react";
import Image from "next/image";
import pic from "./pic.jpeg";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        {/* Left: Text Content */}
        <div className="flex-1 flex items-center">
          <Container>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-xl py-16 lg:py-24"
            >
              {/* Mobile only: Circular Profile Picture */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center mb-8 lg:hidden"
              >
                <div className="relative w-36 h-36 rounded-full overflow-hidden ring-4 ring-blue-500/50 ring-offset-4 ring-offset-slate-950 shadow-2xl shadow-blue-500/30">
                  <Image
                    src={pic}
                    alt="Nouman A Khan"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight text-center lg:text-left"
              >
                Hi, I'm <br /> Nouman A Khan
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-slate-400 mb-8 leading-relaxed text-center lg:text-left"
              >
                Full Stack Software Engineer focused on building scalable, secure, and high-performance applications. Experienced in end-to-end development, clean architecture, and integrating AI-powered solutions for better user experience.</motion.p>

              {/* CTA Button */}
              <motion.div
                variants={itemVariants}
                className="mb-10 flex justify-center lg:justify-start"
              >
                <LinkButton href="/services" variant="primary" size="lg">
                  All Services
                </LinkButton>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/noumanakhan1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800 text-slate-300 hover:bg-blue-900/30 hover:text-blue-600 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
                <a
                  href="https://linkedin.com/in/noumanakhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800 text-slate-300 hover:bg-blue-900/30 hover:text-blue-600 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a
                  href="mailto:hello.devkhan@gmail.com"
                  className="p-3 rounded-full bg-slate-800 text-slate-300 hover:bg-blue-900/30 hover:text-blue-600 transition-all duration-300"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                variants={itemVariants}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-12 flex justify-center lg:justify-start"
              >
                <ChevronDown className="w-6 h-6 text-slate-400" />
              </motion.div>
            </motion.div>
          </Container>
        </div>

        {/* Right: Full-bleed Image — desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block relative lg:w-[40%] lg:shrink-0"
        >
          <Image
            src={pic}
            alt="Nouman A Khan"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
        </motion.div>
      </section>



      {/* 1. Statement Section */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              I build things <br />
              <span className="text-blue-500">founders actually</span> <br />
              ship and sell.
            </h2>
          </motion.div>
        </Container>
      </section>

      {/* 2. Watch before you book Section */}
      <section className="py-24 bg-slate-950">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800"
            >
              <h2 className="text-3xl font-bold mb-4">Watch before you book</h2>
              <p className="text-xl text-slate-400 mb-8 font-medium">How I think about building products.</p>

              <div className="bg-slate-800/60 rounded-2xl p-6 mb-8 border border-slate-700">
                <p className="text-slate-300 mb-4 font-medium">A 90-second breakdown of how I approach MVPs, what kills most product builds before they ship, and what I do differently.</p>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> Why most MVPs fail before launch</li>
                  <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> What I scope before writing a line of code</li>
                  <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> How I deliver fixed price without losing margin</li>
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-colors shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto text-center"
              >
                Book a free 20-min call
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 3. Way to work with me Section */}
      <section id="work" className="py-24 bg-slate-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Way to work with me.</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Every engagement is led by me personally. Executed by my team at Brandiv Labs. No account managers. No hand-offs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-3xl p-8 md:p-12 border border-slate-700"
            >
              <h3 className="text-2xl font-bold mb-4">You have an idea. Let's build it.</h3>
              <p className="text-slate-400 mb-8">
                From scoped architecture to deployed product. Fixed price, fixed timeline. No hourly billing, no scope creep, no surprises.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {[
                  "Product scoping and architecture brief",
                  "Full UI design and frontend build",
                  "Backend, database, and integrations",
                  "Auth, payments, and user management",
                  "Staging, QA, and production deployment",
                  "Full handoff with documentation"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">✦</span>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-700">
                <p className="text-xl font-bold text-white">From $12,000 <span className="text-slate-400 font-normal">· Delivered in 4 to 8 weeks</span></p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>


      {/* 5. What I believe about building */}
      <section className="py-24 bg-slate-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center">What I believe about building.</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-10 rounded-3xl border border-slate-800 shadow-sm"
            >
              <div className="text-5xl font-extrabold text-slate-800 mb-6">01</div>
              <h3 className="text-2xl font-bold mb-4">Architecture determines scale</h3>
              <p className="text-slate-400 leading-relaxed">
                The decisions made in week one determine what is possible in year three. Most developers optimise for speed of delivery. I optimise for longevity of the system. The right architecture is unremarkable to build and invaluable to own.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-10 rounded-3xl border border-slate-800 shadow-sm"
            >
              <div className="text-5xl font-extrabold text-slate-800 mb-6">02</div>
              <h3 className="text-2xl font-bold mb-4">Systems over features</h3>
              <p className="text-slate-400 leading-relaxed">
                Founders ask for more features. I ask what problem we are actually solving. The best products I have shipped are often the ones with the least code: a tight system that does one thing exceptionally well and scales without breaking.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 6. From conversation to live product */}
      <section className="py-24 bg-slate-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold">From conversation to live product.</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { num: "01", title: "Strategy call", desc: "We talk for 45 minutes. I ask hard questions about your goals, your users, and your constraints. By the end, we both know exactly what needs to be built and whether we are the right fit." },
              { num: "02", title: "Architecture brief", desc: "I send a detailed written scope: what gets built, what does not, why, and what it costs. No vague proposals. No hourly estimates. Fixed scope, fixed price, fixed timeline." },
              { num: "03", title: "Build and iterate", desc: "You get weekly video updates, a live staging link, and direct access to me throughout. No black box." },
              { num: "04", title: "Launch and handoff", desc: "We launch, review, and I hand you a fully documented system. For growth clients, this is where ongoing optimisation begins: monthly reporting, A/B testing, and iteration." }
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col bg-slate-800/50 p-8 rounded-3xl border border-slate-700"
              >
                <div className="text-blue-500 font-bold text-xl mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              Start the Conversation
            </Link>
          </div>
        </Container>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Results, not just deliverables.</h2>
            <p className="text-xl text-blue-100 font-medium leading-relaxed">

            </p>I measure success by what happens after I build.
          </motion.div>
        </Container>
      </section>
    </>
  );
}
