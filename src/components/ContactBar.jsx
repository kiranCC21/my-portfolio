import { IoLogoLinkedin, IoMailOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const ContactBar = ({ hidden }) => {

  if (hidden) return null;

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-black text-white dark:bg-white dark:text-black px-5 py-3 rounded-tl-xl rounded-tr-xl shadow-lg z-[1000]">

      <p>Contact Me</p>

      <div className="transition-transform duration-300 hover:-translate-y-2">
      <a
        href="https://linkedin.com/in/kiran-c-c-132b04243"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <IoLogoLinkedin className="text-2xl text-gray-400 dark:text-black transition hover:text-blue-500 dark:hover:text-blue-600" />
      </a>
    </div>

     <div className="transition-transform duration-300 hover:-translate-y-2">
      <a
        href="https://wa.me/918904200159"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Chat"
      >
        <FaWhatsapp className="text-2xl text-gray-400 dark:text-black transition hover:text-green-500 dark:hover:text-green-600" />

      </a>
    </div>

       <div className="transition-transform duration-300 hover:-translate-y-2">
      <a
        href="mailto:kiranchoutaje@gmail.com"
        aria-label="Send Email"
      >
        <IoMailOutline className="text-2xl text-gray-400 dark:text-black transition hover:text-amber-500 dark:hover:text-amber-600" />

      </a>
    </div>
    </div>
  );
};

export default ContactBar;
