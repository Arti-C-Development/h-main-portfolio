import React from "react";
import { motion } from "framer-motion";
import background from "./assets/images/hero.jpg";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Welcome to our Showroom",
  subtitle = "Showcasing some of our creative designs tthat will inspire you",
}: HeroSectionProps) => {
  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-gray-900">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-lg text-gray-200 md:text-xl">{subtitle}</p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8"
          >
            <button className="rounded-md bg-white px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-200">
              Check out our latest projects
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
