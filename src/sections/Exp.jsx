import { motion } from "framer-motion";
import Expc from "../components/Expcard";
import { Link as ScrollLink } from "react-scroll";
import Button from "../components/Button";
// ---------------- EXPERIENCE DATA ----------------
// ---------------- EXPERIENCE DATA ----------------
const Company_Name = ["Yaticorp India Private Limited", "Concentrix Services India Private Limited"];

const EXP_GROUPS = [
  {
    category: "Yaticorp India Private Limited",
    details: [
      { label: "Company Name", value: Company_Name[0] },
      { label: "Duration", value: "16 December 2024 - 31 December 2025" },
      { label: "Designation", value: "Full Stack Developer & Automation Team Lead" },
      { label: "Description", value: "Led full-stack web development and automation initiatives in a fast-paced startup environment. Spearheaded the migration of core web platforms from WordPress to React, integrated secure APIs with MongoDB, and built custom dashboards. Managed end-to-end EdTech operations, including LMS administration. Additionally, directed the WhatsApp Automation team using Gallabox to scale learner onboarding, event communication, and cross-functional business workflows." }
    ],
  },
  {
    category: "Concentrix Services India Private Limited",
    details: [
      { label: "Company Name", value: Company_Name[1] },
      { label: "Duration", value: "6 July 2026 - Present" },
      { label: "Designation", value: "Technical Support Advisor" },
      { label: "Description", value: "Deliver high-tier technical support and troubleshooting solutions for complex software, hardware, and network issues. Act as a critical bridge between users and technical infrastructure by diagnosing system anomalies, guiding cross-functional resolutions, and ensuring maximum uptime. Utilize deep analytical problem-solving skills to optimize system performance and maintain industry-leading service delivery standards." }
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
            className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition relative overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-xl text-indigo-600">
                {group.category}
              </h3>
              <span className="text-sm font-semibold text-black">
                {group.level}
              </span>
            </div>

            {/* Horizontal Line at Top Left */}
            <div className="w-16 h-1 bg-indigo-600 rounded-full mb-5"></div>

            {/* Render Details with Bold Labels */}
            <div className="mb-3 space-y-2">
              {group.details.map((item, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">
                  <strong className="font-bold text-gray-900">{item.label}:</strong> {item.value}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


export default Experience;

// import ExpCard from "../components/Expcard";
// import { EXP_DATA } from "../data/expData";

// function Experience() {

//   return (
//     <div
//       id="Experience"
//     //   className="bg-black bg-fixed bg-cover"
//     //   style={{ backgroundImage: "url('/projectbg.jpg')" }}
//     >

//       {EXP_DATA.map((exp, index) => (

//         <section
//           key={index}
//           className="sticky top-0 h-screen flex items-center justify-center"
//           style={{
//             marginTop: index === 0 ? "0px" : "-20vh",
//             zIndex: index + 1,
//           }}
//         >

//           <ExpCard exp={exp} />

//         </section>

//       ))}

//     </div>
//   );
// }

// export default Experience;
