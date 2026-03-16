import { useState, useEffect } from "react";

const Projects = () => {

  return (
    <section className="min-h-screen bg-slate-900 text-white pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden flex flex-col"
            >
              
              {/* Project Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                  {project.title}
                </h2>

                <p className="text-gray-300 mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
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

        {/* Project count */}
        <div className="mt-10 text-center text-gray-400">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-xl p-8 text-center border border-indigo-800/30">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Interested in working together?
          </h2>

          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
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
