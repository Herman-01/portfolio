import { useState } from "react";

const Certifications = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "Weather App Project Completion",
      description:
        "Successfully completed an industry-oriented Weather App project using Full Stack, MERN Stack, and its ecosystem.",
      issuer: "Allsoft Solutions / IBM Business Partner",
      date: "Jun 2025 - Jul 2025",
      image: "/certificates/weather-app-certificate.png", // replace with your actual image path
      link: "#", // already updated by you
      skills: ["MERN Stack", "Full Stack Development", "React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Build Generative AI Apps and Solutions with No-Code Tools",
      description:
        "Completed a Udemy certification focused on building generative AI apps and solutions using no-code tools and workflows.",
      issuer: "Udemy",
      date: "Aug 18, 2025",
      image: "/certificates/build-generative-ai-no-code.png", // replace with your actual image path
      link: "#", // already updated by you
      skills: ["Generative AI", "No-Code Tools", "AI Apps", "Prompting", "Automation"],
    },
    {
      id: 3,
      title: "Master Generative AI & Generative AI Tools (ChatGPT & more)",
      description:
        "Completed advanced training on Generative AI tools including ChatGPT and other AI productivity platforms.",
      issuer: "Udemy",
      date: "Aug 22, 2025",
      image: "/certificates/master-generative-ai-tools.png", // replace with your actual image path
      link: "#", // already updated by you
      skills: ["ChatGPT", "Generative AI", "AI Tools", "Prompt Engineering", "Productivity"],
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Certifications</h1>
        <p className="text-gray-400 text-center mb-12">
          Professional certifications and project completion achievements.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const isFlipped = flippedCard === index;

            return (
              <div
                key={cert.id}
                className="group [perspective:1200px]"
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div
                  className="relative h-[420px] w-full duration-700"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-56 object-cover"
                    />

                    <div className="p-5 flex flex-col h-[calc(100%-14rem)]">
                      <h2 className="text-xl font-semibold text-blue-400 mb-3 line-clamp-2">
                        {cert.title}
                      </h2>

                      <p className="text-gray-300 text-sm mb-4 flex-1">
                        {cert.description.length > 100
                          ? `${cert.description.substring(0, 100)}...`
                          : cert.description}
                      </p>

                      <div className="flex justify-between items-center mt-auto">
                        <span className="text-gray-400 text-sm">{cert.issuer}</span>
                        <span className="text-indigo-400 text-sm">{cert.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 rounded-xl overflow-hidden border border-indigo-700 bg-gradient-to-br from-indigo-900/90 to-slate-800/90 shadow-lg p-6 flex flex-col"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <h2 className="text-xl font-semibold text-white mb-4">
                      {cert.title}
                    </h2>

                    <div className="mb-4">
                      <div className="flex items-center mb-1">
                        <span className="text-indigo-300 mr-2">📚</span>
                        <span className="text-gray-300">Issued by:</span>
                      </div>
                      <p className="text-white font-medium ml-6">{cert.issuer}</p>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center mb-1">
                        <span className="text-indigo-300 mr-2">🗓️</span>
                        <span className="text-gray-300">Date:</span>
                      </div>
                      <p className="text-white font-medium ml-6">{cert.date}</p>
                    </div>

                    <div className="mb-6 flex-1">
                      <div className="flex items-center mb-1">
                        <span className="text-indigo-300 mr-2">🔍</span>
                        <span className="text-gray-300">Skills:</span>
                      </div>

                      <div className="flex flex-wrap gap-2 ml-6 mt-2">
                        {cert.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-indigo-800/50 text-indigo-200 text-xs rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-indigo-900 font-medium py-2 px-4 rounded-lg text-center hover:bg-gray-100 transition-colors"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                <div className="mt-2 text-center text-xs text-gray-400">
                  Hover to view details
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
