"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useContext } from "react";
import Header from "./Header";
import { ExternalLink, FolderIcon, Loader2 } from "lucide-react";
import { useData } from "@/context/DataProvider";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePlausible } from "next-plausible";
export default function Projects() {
  const { projects, loading } = useData(); // Access projects and loading state from context
  const [visibleProjects, setVisibleProjects] = useState(6); // Initially show 3 projects
  const plausible = usePlausible(); // Initialize Plausible tracking
  const handleLoadMore = () => {
    setVisibleProjects((prevVisible) => prevVisible + 3); // Show 3 more projects
    plausible("Load_More_Projects"); // Track the event with Plausible
  };

  return (
    <section
      id="Projects"
      className="py-20 px-4 max-w-[1140px] mx-auto md:px-6 lg:px-8"
    >
      {/* Header */}
      <Header title="Project Archives" />
      {loading ? (
        <div className="w-full flex justify-center text-center">
          <Loader2 className="animate-spin" />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.slice(0, visibleProjects).map((project, index) => (
            <Card key={project.id} className="flex flex-col">
              <CardContent className="flex-grow py-4">
                {/* <Image
                  src={`https:${project.image.fields.file.url}`}
                  alt={
                    project.image.fields.title || project.title
                  }
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                /> */}
                <div className="text-textLight flex justify-between items-center mb-4">
                  <FolderIcon className="w-12 h-12 text-primary" />
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink />
                  </Link>
                </div>
                <h2 className="text-lg font-semibold text-textLight">
                  {project.title}
                </h2>
                <p>{project.description}</p>
                <div className="w-full flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex}>{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      )}

      {visibleProjects < projects.length && (
        <div className="mt-8 text-center">
          <Button onClick={handleLoadMore}>Load More</Button>
        </div>
      )}
    </section>
  );
}
