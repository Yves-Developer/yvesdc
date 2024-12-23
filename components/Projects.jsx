'use client';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]); // State to store Contentful projects
  const [visibleProjects, setVisibleProjects] = useState(3); // Initially show 3 projects
  const [loading, setLoading] = useState(true); // State to track loading status

  // Fetch projects data from Contentful API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/content'); // Assuming your Contentful API route is '/contentful'
        const data = await res.json();
        
        console.log('Fetched data from Contentful:', data); // Log data to check its structure

        // Ensure the data contains items and map them
        if (data && data.items) {
          setProjects(data.items); // Set the items array as projects
        } else {
          console.error('Contentful data is not in the expected format:', data);
        }
      } catch (error) {
        console.error('Error fetching data from Contentful:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []); // Run the effect only once when the component mounts

  const handleLoadMore = () => {
    setVisibleProjects((prevVisible) => prevVisible + 3); // Show 3 more projects
  };

  return (
    <section id="Projects" className="py-20 px-4 md:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h2>
      
      {loading ? (
        <div className="text-center">Loading...</div> // Show a loading indicator while fetching data
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <Card key={project.sys.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {project.fields.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <Image
                  src={`https:${project.fields.image.fields.file.url}`}
                  alt={project.fields.image.fields.title || project.fields.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.fields.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="primary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <a href={project.fields.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {visibleProjects < projects.length && (
        <div className="mt-8 text-center">
          <Button onClick={handleLoadMore}>Load More</Button>
        </div>
      )}
    </section>
  );
}
