import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Button from "../components/Button";

// ---------------- SKILLS DATA ----------------

const SKILL_GROUPS = [
  {
    category: "Automation & Integration",
    level: 95,
    skills: [
      "WhatsApp Automation (Gallabox)",
      "API Integration",
      "Workflow Automation",
    ],
  },
  {
    category: "Web Development",
    level: 85,
    skills: [
      "React",
      "MongoDB",
      "WordPress",
      "Frontend UI Development",
    ],
  },
  {
    category: "AI & Programming",
    level: 90,
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "Data Analysis",
    ],
  },
  {
    category: "Tools & Platforms",
    level: 90,
    skills: [
      "Learnyst LMS",
      "Gallabox",
      "CRM Tools",
      "Visual Studio Code",
      "Startup Operations",
    ],
  },
];

// ---------------- COMPONENT ----------------

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-50 px-6 py-20"
    >

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Skills & Expertise
      </motion.h2>

      {/* Skill Grid */}
      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {SKILL_GROUPS.map((group, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition"
          >

            {/* Header */}
            <div className="flex justify-between items-center mb-3">

              <h3 className="font-semibold text-lg">
                {group.category}
              </h3>

              <span className="text-sm font-medium text-gray-600">
                {group.level}%
              </span>

            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">

              <div
                className="bg-green-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${group.level}%` }}
              />

            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2">

              {group.skills.map((skill, i) => (

                <span
                  key={i}
                  className="text-sm bg-amber-100 text-amber-800 border border-amber-400 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>

              ))}

            </div>

          </motion.div>

        ))}

      </div>

      {/* Back To Home */}
      {/* <div className="text-center mt-14">

        <ScrollLink to="home" smooth duration={600}>
          <Button>
            Back To Home
          </Button>
        </ScrollLink>

      </div> */}

    </section>
  );
}

export default Skills;
