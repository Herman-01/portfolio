import { useState, useEffect } from "react";

const Resume = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const education = [
    {
      school: "Lovely Professional University",
      location: "Punjab, India",
      qualification: "Bachelor of Technology - Computer Science and Engineering",
      result: "CGPA: 7.3",
      date: "Since August 2023",
    },
    {
      school: "Marian Boys' High School",
      location: "Pwani, Tanzania",
      qualification: "Advanced level",
      result: "Division: 1.6",
      date: "March 2021 - May 2023",
    },
    {
      school: "Marian Boys' Secondary School",
      location: "Pwani, Tanzania",
      qualification: "Ordinary level",
      result: "Division: 1.10",
      date: "Jan 2017 - Nov 2020",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden relative pt-24 pb-16 px-6">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 opacity-10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400">
              My Resume
            </span>
          </h2>

          <div className="mb-6 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          </div>

          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10 text-lg">
            My educational background and resume download.
          </p>

          {/* Education */}
          <div className="mt-8 space-y-8">
            {education.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-300 mb-2">
                      {item.school}
                    </h3>
                    <p className="text-gray-400 mb-3">{item.location}</p>
                    <p className="text-gray-200 text-lg mb-2">
                      {item.qualification}
                    </p>
                    <p className="text-gray-300">{item.result}</p>
                  </div>

                  <div className="shrink-0">
                    <span className="inline-block px-4 py-2 rounded-full bg-indigo-900/60 text-indigo-300 text-sm font-medium">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Download Buttons */}
          <div className="mt-12 text-center space-y-4">
            {/* Resume */}
            <a
              href="/Herman CV final3.pdf"
              download
              className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-lg shadow-lg hover:shadow-indigo-500/30 transition duration-300 overflow-hidden"
            >
              <span className="relative z-10">📄 Download CV</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            {/* CV */}
            <a
              href="/Resume Herman1.pdf" // 👈 change this if your CV file name is different
              download
              className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium text-lg shadow-lg hover:shadow-purple-500/30 transition duration-300 overflow-hidden"
            >
              <span className="relative z-10">📄 Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
