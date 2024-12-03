"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function FooterLinks() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-12">
      {links.map((link, index) => (
        <motion.div
          key={link.href}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Link
            href={link.href}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}