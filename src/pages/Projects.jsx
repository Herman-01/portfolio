import { useState, useEffect } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Real Time Weather App",
      image: "/projects/weather.jpg",
      description:
        "Developed a real-time weather application that provides users with up-to-date weather information based on their current location or selected cities.",
      technologies: ["HTML", "CSS", "JavaScript", "React.js"],
      category: "Web",
    },
    {
      title: "Art and Assets E-commerce Website",
      image: "/projects/ecommerce.jpg",
      description:
        "Developed an e-commerce platform for selling artwork, designed art pieces, and second-hand commodities with product browsing, ordering, and digital payment features.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Node.js"],
      category: "Web",
    },
    {
      title: "Network Setup and Topology Design",
      image: "/projects/network.jpg",
      description:
        "Designed a network infrastructure for a 12-floor building including IP addressing schemes, subnetting, and proper device placement using Cisco Packet Tracer.",
      technologies: ["Cisco Packet Tracer", "Networking", "Subnetting"],
      category: "Networking",
    },
  ];

  const filters = ["All", "Web", "Networking"];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="min-h-screen bg-slate-900 text-white pt-24 pb-16 px-6">
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 inline-block">
            My Projects
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            A selection of projects showcasing my skills in software, web, and
            network development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                  : "bg-slate-800 text-gray-300 hover:bg-slate-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                  {project.title}
                </h2>

                <p className="text-gray-300 mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700 text-indigo-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-gray-400">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-xl p-8 text-center border border-indigo-800/30">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Interested in working together?
          </h2>

          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-indigo-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
