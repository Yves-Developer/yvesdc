"use client";
import Image from "next/image";
import Header from "./Header";
import { Badge } from "./ui/badge";
import Link from "next/link";
import {
  Github,
  Link2,
  Link2Icon,
  LinkIcon,
  Loader,
  Loader2,
} from "lucide-react";
import { useData } from "@/context/DataProvider";
import clsx from "clsx";

const FeaturedProject = () => {
  const { projects, loading } = useData();
  // Log the projects to check their structure
  return (
    <section
      id="Featured"
      className="py-20 px-4 max-w-[1140px] mx-auto md:px-6 lg:px-8"
    >
      {/* Header */}
      <Header title="Featured Projects" />
      {loading ? (
        <div className="w-full flex justify-center text-center">
          <Loader2 className="animate-spin" />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-10 mt-10">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={project.sys.id}
              className="w-full flex flex-col items-center justify-center gap-28 mt-10"
            >
              <div
                className={clsx(
                  "flex h-auto flex-col md:flex-row gap-6",
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                )}
              >
                <a className="w-full h-full md:w-1/2 relative" href={"/"}>
                  <div className="w-full h-full">
                    <Image
                      src={`https:${project.fields.image.fields.file.url}`}
                      alt={
                        project.fields.image.fields.title ||
                        project.fields.title
                      }
                      width={1200}
                      height={1200}
                      className="w-full aspect-video h-full object-cover rounded-md"
                    />
                  </div>
                </a>

                <div
                  className={clsx(
                    "w-full md:w-1/2 flex flex-col md:items-end gap-6 z-10 md:text-right",
                    index % 2 === 0 ? "md:-ml-16" : ""
                  )}
                >
                  <h2 className="text-lg font-semibold text-primary">
                    {project.fields.title}
                  </h2>
                  <span
                    className={clsx(
                      "bg-[#112240] p-3 md:p-6 rounded-md",
                      index % 2 !== 0 ? "md:-mr-16  md:text-left" : ""
                    )}
                  >
                    <p className="line-clamp-3 text-sm md:text-base text-textLight">
                      This is a brief description of the project. It highlights
                      the main features and technologies used. This is a brief
                      description of the project. It highlights the main
                      features and technologies used. This is a brief
                      description of the project.
                    </p>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.fields.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex}>{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 px-6 ">
                    <Link
                      href={
                        project.fields.link.includes("github.com")
                          ? project.fields.link
                          : "https://github.com/Yves-Developer"
                      }
                      className="hover:text-primary p-2 bg-[#112240] rounded-md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github />
                    </Link>
                    <Link
                      href={
                        !project.fields.link.includes("github.com")
                          ? project.fields.link
                          : "https://github.com/Yves-Developer"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary p-2 bg-[#112240] rounded-md"
                    >
                      <LinkIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedProject;
