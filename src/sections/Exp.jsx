import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Button from "../components/Button";

// ---------------- EXPERIENCE DATA ----------------
const Company_Name = ["Yaticorp India Private Limited", "Concentrix Services India Private Limited"];
const EXP_GROUPS = [
  {
    category: "Yaticorp India Private Limited",
    Company_Name: [
      "Company Name: " + Company_Name[0], 
      "Duration: 16 December 2024 - 31 December 2025",
      "Designation: Full Stack Developer & Automation Team Lead",
      "Description: Led full-stack web development and automation initiatives in a fast-paced startup environment. Spearheaded the migration of core web platforms from WordPress to React, integrated secure APIs with MongoDB, and built custom dashboards. Managed end-to-end EdTech operations, including LMS administration. Additionally, directed the WhatsApp Automation team using Gallabox to scale learner onboarding, event communication, and cross-functional business workflows."
    ],
  },
    {
    category: "Concentrix Services India Private Limited",
    Company_Name: [
      "Company Name: " + Company_Name[1],  
      "Duration: 6 July 2026 - Present",
    "Designation: Technical support Advisor",
    "Description: Deliver high-tier technical support and troubleshooting solutions for complex software, hardware, and network issues. Act as a critical bridge between users and technical infrastructure by diagnosing system anomalies, guiding cross-functional resolutions, and ensuring maximum uptime. Utilize deep analytical problem-solving skills to optimize system performance and maintain industry-leading service delivery standards."
    ,
    ],
    }
];

// ---------------- COMPONENT ----------------

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gray-50 px-6 py-20"
    >

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Experience
      </motion.h2>

      {/* Experience Grid */}
      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {EXP_GROUPS.map((group, index) => (

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
            {/* Company Name */}
            <div className="mb-3">
              {group.Company_Name.map((item, i) => (

                <p key={i} className="text-gray-700">
                  {item}
                </p>

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

export default Experience;
