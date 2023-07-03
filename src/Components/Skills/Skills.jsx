import { useEffect, useState } from "react";
import './Skills.css'

const Skills = () => {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("/skills.json");
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error("Error loading skills:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="mx-5 lg:mx-0 min-h-screen ">
      <h1 className="text-3xl font-bold border-b-4 border-orange-400 py-2 mb-5">
        Skills
      </h1>
      {skills && (
        <div className="wavy-bg py-5">
          <div >
            <p className="text-3xl mx-auto font-bold border-b-4 bg-orange-400 rounded-lg p-2 mb-5 h-1/2 w-40 text-center">
              FrontEnd
            </p>
            <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4 mx-5 my-10 h-1/2">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="w-full">
                  <div className="card h-full">
                    <figure className="px-2 pt-12">
                      <img
                        src={`/icons/${skill.img}`}
                        alt={skill.name}
                        className="w-14"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{skill.name}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-3xl mx-auto font-bold border-b-4 bg-orange-400 rounded-lg p-2 mb-5 h-1/2 w-40 text-center">
              Backend
            </p>
            <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4 mx-5 my-10 h-1/2">
              {skills.backend.map((skill, index) => (
                <div key={index} className="w-full">
                  <div className="card h-full">
                    <figure className="px-10 pt-10">
                      <img
                        src={`/icons/${skill.img}`}
                        alt={skill.name}
                        className="w-14"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{skill.name}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-3xl mx-auto font-bold border-b-4 bg-orange-400 rounded-lg p-2 mb-5 h-1/2 w-40 text-center">
              Tools
            </p>
            <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4 mx-5 my-10 h-1/2">
              {skills.tools.map((skill, index) => (
                <div key={index} className="w-full">
                  <div className="card h-full">
                    <figure className="px-10 pt-10">
                      <img
                        src={`/icons/${skill.img}`}
                        alt={skill.name}
                        className="w-14"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{skill.name}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
