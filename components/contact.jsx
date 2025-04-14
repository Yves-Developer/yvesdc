/** @format */

import { Mail, Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:yvesmugisha09@gmail.com",
    description: "Get in touch",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Yves-Developer",
    description: "Collaborate with me",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/yvesdc",
    description: "Connect on social media",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/yves_dc1/",
    description: "Follow my journey",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 rounded-sm px-4 md:px-6 lg:px-8 bg-[#112240] relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Decorative Shapes */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[10rem] left-[10rem] w-32 h-32 bg-blue-600 blur-2xl opacity-30 rounded-full"></div>
          <div className="absolute top-[32rem] md:top-[16rem] left-10 md:left-[30rem] w-20 h-20 bg-pink-400 blur-2xl rounded-full"></div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Let's Connect
        </h2>
        <p className="text-center mb-12 text-lg">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactLinks.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              className="flex items-center bg-transparent justify-start space-x-4 py-6 px-4 h-auto hover:shadow-md"
              asChild
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-semibold">{link.name}</div>
                  <div className="text-sm text-textDark">
                    {link.description}
                  </div>
                </div>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
