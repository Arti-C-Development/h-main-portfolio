import React from "react";
import { default as ProjectCard } from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
}

interface ProjectsGridProps {
  projects?: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  projects = [
    {
      id: "1",
      title: "E-Commerce Website",
      imageUrl:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      link: "https://example.com/ecommerce",
    },
    {
      id: "2",
      title: "Portfolio Template",
      imageUrl:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      link: "https://example.com/portfolio",
    },
    {
      id: "3",
      title: "Blog Platform",
      imageUrl:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      link: "https://example.com/blog",
    },
    {
      id: "4",
      title: "Travel Agency",
      imageUrl:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
      link: "https://example.com/travel",
    },
    {
      id: "5",
      title: "Restaurant Website",
      imageUrl:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      link: "https://example.com/restaurant",
    },
    {
      id: "6",
      title: "Mobile App Landing",
      imageUrl:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      link: "https://example.com/app",
    },
  ],
}) => {
  return (
    <section id="projects" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Projects
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Explore my portfolio of example websites showcasing various designs
          and functionalities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
