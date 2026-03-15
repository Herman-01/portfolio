import { useState, useEffect } from "react";

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievements = [
    {
      title: "YUNA (Youth of United Nations Association) Club Leader",
      description:
        "Delegated youths on United Nations Agenda in empowering youth of this generation.",
    },
    {
      title: "TASIJA (Tanzania Students’ Association) Treasurer",
      description:
        "Entrusted with the association’s treasures and funds, taking responsibility for allocation of funds along with its collection.",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-900 text-white pt-24 pb-16 px-6">
      <div
        className={`max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 inline-block">
            Achievements
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            Leadership roles and responsibilities that reflect my involvement,
            trust, and contribution.
          </p>
        </div>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-blue-400 mb-3">
                {achievement.title}
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
