"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BackgroundBeams } from "../ui/background-beams";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding">
      <div className="container-width z-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.h1
            className="text-7xl md:text-7xl font-bold mb-6 text-gradient whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creating Digital <br /> Experiences That Matter
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full-stack developer specializing in building exceptional digital
            experiences. Let&apos;s bring your ideas to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="mr-4">
              <a href="#projects">
                View Projects
              </a>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              <a href="#contact">
                Contact Me
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <BackgroundBeams />
    </section>
  );
}