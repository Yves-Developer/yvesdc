"use client";
import { createContext, useContext, useEffect, useState } from "react";
const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [projects, setProjects] = useState([]); // State to store Contentful projects
  const [loading, setLoading] = useState(true); // State to track loading status

  // Fetch projects data from Contentful API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/content"); // Assuming your Contentful API route is '/contentful'
        const data = await res.json();

        console.log("Fetched data from Contentful:", data); // Log data to check its structure

        // Ensure the data contains items and map them
        if (data && data.items) {
          setProjects(data.items); // Set the items array as projects
        } else {
          console.error("Contentful data is not in the expected format:", data);
        }
      } catch (error) {
        console.error("Error fetching data from Contentful:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []); // Run the effect only once when the component mounts

  return (
    <DataContext.Provider value={{ projects, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

export const useData = () => useContext(DataContext); // Custom hook to use the DataContext
