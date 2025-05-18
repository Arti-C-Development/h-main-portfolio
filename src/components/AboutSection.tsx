import React from "react";
import { motion } from "framer-motion";
import aiImage  from "./assets/images/AI_helper.png";

interface AboutSectionProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  description = "We're a small development company, specializing in rebranding websites, SPAs and landing pages specifically for hotels and resorts. We offer a variety of different designs, fully customizable and beautifully made. As part of our services we also offer different AI-related solutions such as Chatbots to improve your customer support, and most importantly - to ensure you offer support to your guests 24/7, AI workflows to create invoices for your customers after they successfully create a reservation, and many more depending on what your needs are.",
  imageAlt = "Future is AI",
}) => {
  return (
    <section id="about" className="py-16 px-4 md:px-8 bg-background">
      <div className="container mx-auto">
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
                src={aiImage}
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
