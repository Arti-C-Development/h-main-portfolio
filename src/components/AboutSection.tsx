import React from "react";
import { motion } from "framer-motion";

interface AboutSectionProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = "About Me",
  description = "I'm a passionate web developer with over 5 years of experience creating beautiful, responsive websites and applications. My expertise includes front-end development with React, TypeScript, and modern CSS frameworks like Tailwind. I believe in clean code, intuitive user experiences, and staying on the cutting edge of web technologies. When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes in the kitchen.",
  imageSrc = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
  imageAlt = "Profile photo",
}) => {
  return (
    <section id="about" className="py-16 px-4 md:px-8 bg-background">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Image - Left on desktop, top on mobile */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto object-cover aspect-square md:aspect-[4/3]"
              />
            </div>
          </motion.div>

          {/* Text - Right on desktop, bottom on mobile */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed text-foreground/80">
                {description}
              </p>
              <div className="mt-6">
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded mr-2">
                      React
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded mr-2">
                      TypeScript
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded mr-2">
                      Tailwind CSS
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded mr-2">
                      Next.js
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded mr-2">
                      UI/UX Design
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded mr-2">
                      Responsive Design
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
