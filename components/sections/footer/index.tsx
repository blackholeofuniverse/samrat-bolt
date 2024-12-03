"use client";

import { motion } from "framer-motion";
import { FooterLinks } from "./footer-links";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-16 border-t border-border">
      <div className="container-width px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 text-gradient"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let&apos;s Build Something Amazing Together
          </motion.h2>

          <FooterLinks />

          <motion.div
            className="text-center border-t border-border pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-sm">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}