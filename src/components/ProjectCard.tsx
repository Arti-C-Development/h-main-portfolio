import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard = ({
  title = "Project Title",
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  projectUrl = "#",
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="h-full bg-white"
    >
      <Card className="h-full flex flex-col overflow-hidden border-2 hover:border-primary transition-colors duration-300">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <CardContent className="flex-grow pt-6">
          <h3 className="text-xl font-semibold text-center">{title}</h3>
        </CardContent>

        <CardFooter className="pt-0 pb-6">
          <Button className="w-full" variant="default" asChild>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              Go to {title}
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
