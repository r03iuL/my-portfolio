import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("skills.json");
        const data = await response.json();
        console.log(data); // Print the data to the console
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div></div>
    // Your JSX code here
  );
};

export default Skills;
