import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

import Button from "../components/Button";
import ContactBar from "../components/ContactBar";
import ScrollTopButton from "../components/ScrollTopButton";

function Home() {

  const [showTop, setShowTop] = useState(false);
  const [hideContact, setHideContact] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHideContact(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(footer);
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <section id="home">

      {/* HERO */}
      <section
        className="flex flex-col items-center justify-center text-center py-28 px-4 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/herobg.jpg')" }}
      >

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-bold mb-3 text-white"
        >
          Kiran C C
        </motion.h1>

        <p className="text-lg text-white mb-1">
          Full Stack Developer • Automation Engineer • AI Enthusiast
        </p>

        <p className="text-sm text-white mb-5">
          B.E Graduate in Artificial Intelligence & Machine Learning
        </p>

        <div className="flex gap-4">

          <ScrollLink to="skills" smooth duration={600}>
            <Button variant="outline">Skills</Button>
          </ScrollLink>

          <ScrollLink to="projects" smooth duration={600}>
            <Button>Projects</Button>
          </ScrollLink>
          
          <a href="/Kiran.CC_Resume.pdf" download> <Button variant="outline">Resume</Button> </a>

        </div>

      </section>

      <ContactBar hidden={hideContact} />
      <ScrollTopButton visible={showTop} />

    </section>
  );
}

export default Home;
