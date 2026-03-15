import { useState, useEffect } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  const skills = {
  ProgrammingLanguages: [
    { name: "C", icon: "/icons/c.png", proficiency: 70 },
    { name: "C++", icon: "/icons/cpp.png", proficiency: 78 },
    { name: "Java", icon: "/icons/java.png", proficiency: 72 },
    { name: "Python", icon: "/icons/python.png", proficiency: 75 },
    { name: "JavaScript", icon: "/icons/javascript.png", proficiency: 82 },
  ],

  Frontend: [
    { name: "HTML", icon: "/icons/html.png", proficiency: 82 },
    { name: "CSS", icon: "/icons/css.png", proficiency: 82 },
    { name: "React.js", icon: "/icons/react.png", proficiency: 81 },
  ],

  Databases: [
    { name: "MySQL", icon: "/icons/mysql.png", proficiency: 71 },
  ],
};

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ["all", ...Object.keys(skills)];

  const displayedSkills =
    activeCategory === "all"
      ? Object.entries(skills).flatMap(([category, items]) =>
          items.map((skill) => ({ ...skill, category }))
        )
      : skills[activeCategory].map((skill) => ({
          ...skill,
          category: activeCategory,
        }));

  return (
    <section className="min-h-screen bg-slate-900 text-white pt-24 pb-16 px-6">
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 inline-block">
            My Skills
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            Here are the programming languages, web technologies, and tools I
            use to build responsive and practical software solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                  : "bg-slate-800 text-gray-300 hover:bg-slate-700"
              }`}
            >
              {category === "all" ? "All" : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedSkills.map((skill, index) => (
            <div
              key={`${skill.category}-${skill.name}`}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-lg font-semibold text-gray-100">
                      {skill.name}
                    </h3>
                    <span className="text-sm text-indigo-300">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{skill.category}</p>
                </div>
              </div>

              <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                  style={{ width: isVisible ? `${skill.proficiency}%` : "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
