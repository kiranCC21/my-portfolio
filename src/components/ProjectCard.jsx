import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-[85%] md:w-[70%] bg-white p-8 rounded-2xl shadow-lg border"
    >

      <div className="w-12 h-1 bg-green-600 mb-4 rounded-full" />

      <h2 className="text-2xl font-semibold mb-3">
        {project.title}
      </h2>

      <p className="text-gray-600 mb-4">
        {project.desc}
      </p>

      <div className="grid md:grid-cols-3 gap-4 text-sm">

        <div>
          <p className="font-medium">Role</p>
          {project.role}
        </div>

        <div>
          <p className="font-medium">Tech</p>
          {project.tech}
        </div>

        <div>
          <p className="font-medium">Impact</p>
          {project.impact}
        </div>

      </div>

    </motion.div>
  );
};

export default ProjectCard;
