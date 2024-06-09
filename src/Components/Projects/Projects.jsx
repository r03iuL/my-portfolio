import './Project.css';

const Projects = () => {
  return (
    <div className="mx-5 lg:mx-0 min-h-screen" id="Project">
      <h1 className="text-3xl font-bold border-b-4 border-orange-400 py-2 mb-5">
        Projects
      </h1>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row lg:justify-between">

          {/* first card */}
          <div className="card mx-5 glass mb-5 lg:mb-0">
            <div className="screenshot-container">
              <img src="/musical.png" alt="Screenshot 1" className="screenshot-img" />
            </div>
            <div className="card-body">
              <h2 className="card-title">MUSICAL OASIS</h2>
              <p>A summer camp site that offers classes for musical instruments.</p>
              <div className="technologies">
                <h2 className="card-title">Technologies:</h2>
                <p>
                  React, React Router, JavaScript, MongoDB, Firebase, JWT, Tailwind
                </p>
              </div>
              <div className="flex flex-row card-actions">
                <a href="https://musical-oasis.web.app/" className="mx-auto bg-orange-400 p-2 rounded-lg">
                  Live Site
                </a>
                <a href="https://github.com/r03iuL/PHA-12-musical-oasis" className="mx-auto bg-orange-400 p-2 rounded-lg">
                  Frontend Code Github
                </a>
                <a href="https://github.com/r03iuL/PHA-12-musical-oasis-server" className="mx-auto bg-orange-400 p-2 rounded-lg">
                  Backend Code Github
                </a>
              </div>
            </div>
          </div>
          {/* second card */}
          <div className="card mx-5 glass">
            <div className="screenshot-container">
              <img src="/chef.png" alt="Screenshot 3" className="screenshot-img" />
            </div>
            <div className="card-body">
              <h2 className="card-title">TASTE BUDS</h2>
              <p>A site with many chefs and their popular recipes.</p>
              <div className="technologies">
                <h2 className="card-title">Technologies:</h2>
                <p>
                  React, React Router, JavaScript, MongoDB, Firebase, Tailwind
                </p>
              </div>
              <div className="flex flex-row card-actions">
                <a href="https://chefhunter-81e8d.web.app/" className="mx-auto bg-orange-400 p-2 rounded-lg">
                  Live Site
                </a>
                <a href="https://github.com/r03iuL/PHA-10-taste-buds" className="mx-auto bg-orange-400 p-2 rounded-lg">
                  Frontend Code Github
                </a>
                <a href="https://github.com/r03iuL/PHA-10-taste-buds-server" className="mx-auto bg-orange-400 p-2 rounded-lg">
                  Backend Code Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
