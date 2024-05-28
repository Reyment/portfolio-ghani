"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Service Application",
    description: "",
    image: "/images/projects/portofolio14.png",
    tag: ["Web"],
    previewUrl: "https://icare.documentsolution.com/client/",
  },

  {
    id: 4,
    title: "E-Commercec Application",
    description: "",
    image: "/images/projects/portofolio4.png",
    tag: [ "Web"],
    previewUrl: "https://play.google.com/store/apps/details?id=com.barangkulakan.mobile&hl=en&gl=US",
  },
  {
    id: 5,
    title: "Landing Page",
    description: "",
    image: "/images/projects/portofolio13.png",
    tag: ["Web"],
    previewUrl: "https://penuh-makna.vercel.app/",
  },
  {
    id: 5,
    title: "Real Estate Website",
    description: "",
    image: "/images/projects/portofolio15.png",
    tag: ["Web"],
    previewUrl: "https://example-convert-figma-html-3.vercel.app/",
  },

  // {
  //   id: 7,
  //   title: "Ilustrator Design",
  //   description: "",
  //   image: "/images/projects/portofolio7.png",
  //   tag: ["Design"],
  //   previewUrl: "/",
  // },
  // {
  //   id: 8,
  //   title: "Ilustrator Design",
  //   description: "",
  //   image: "/images/projects/portofolio8.png",
  //   tag: [ "Design"],
  //   previewUrl: "/",
  // },
  // {
  //   id: 9,
  //   title: "Flyer Design",
  //   description: "",
  //   image: "/images/projects/portofolio9.png",
  //   tag: [ "Design"],
  //   previewUrl: "/",
  // },
  // {
  //   id: 10,
  //   title: "Flyer Design",
  //   description: "",
  //   image: "/images/projects/portofolio10.png",
  //   tag: [ "Design"],
  //   previewUrl: "/",
  // },
  // {
  //   id: 11,
  //   title: "Mock Up Desin",
  //   description: "",
  //   image: "/images/projects/portofolio11.png",
  //   tag: ["Design"],
  //   previewUrl: "/",
  // },
  // {
  //   id: 12,
  //   title: "Logo Design",
  //   description: "",
  //   image: "/images/projects/portofolio12.png",
  //   tag: ["Design"],
  //   previewUrl: "/",
  // },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Web");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">

        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Design"
          isSelected={tag === "Design"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
