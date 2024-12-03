"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, X } from "lucide-react";
import 'remixicon/fonts/remixicon.css'
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: <i className="ri-github-fill"></i>,
    href: "https://github.com/blackholeofuniverse",
    label: "GitHub",
    delay: 0.1,
  },
  {
    icon: <i className="ri-twitter-x-line"></i>,
    href: "https://x.com/Samrat1428",
    label: "Twitter",
    delay: 0.2,
  },
  {
    icon: <i className="ri-linkedin-box-fill"></i>,
    href: "https://www.linkedin.com/in/om-bandre-758a4425b/",
    label: "LinkedIn",
    delay: 0.3,
  },
  {
    icon: <i className="ri-instagram-line"></i>,
    href: "https://www.instagram.com/samrat_1428/",
    label: "Instagram",
    delay: 0.4,
  },
  {
    icon: <i className="ri-discord-fill"></i>,
    href: "https://discord.com/users/1048146813691101236",
    label: "Discord",
    delay: 0.5,
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      {socialLinks.map((social, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: social.delay,
            type: "spring",
            stiffness: 100,
          }}
        >
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-white hover:text-black transition-all duration-300"
            asChild
          >
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}