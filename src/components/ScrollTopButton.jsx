import { motion } from "framer-motion";
import { CiCircleChevUp } from "react-icons/ci";

const ScrollTopButton = ({ visible }) => {

  if (!visible) return null;

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-10 right-6 bg-indigo-600 text-white rounded-full z-50"
    >
      <CiCircleChevUp className="text-5xl" />
    </motion.button>
  );
};

export default ScrollTopButton;
