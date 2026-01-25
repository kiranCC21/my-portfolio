import { Link as ScrollLink } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#070e16] text-gray-300 py-10 px-6 bg-cover bg-no-repeat"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Branding */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Kiran C C
          </h3>
          <p className="text-sm">
            Full Stack Developer • Automation Engineer • AI Enthusiast
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-2">
            Quick Links
          </h4>

          <ul className="space-y-1 text-sm">
            <li>
              <ScrollLink
                to="home"
                smooth
                duration={600}
                className="cursor-pointer hover:text-white"
              >
                Home
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="skills"
                smooth
                duration={600}
                className="cursor-pointer hover:text-white"
              >
                Skills
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="projects"
                smooth
                duration={600}
                className="cursor-pointer hover:text-white"
              >
                Projects
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-white mb-2">
            Contact
          </h4>

          <div className="space-y-2 text-sm">

            {/* Email */}
            <p>
              📧{" "}
              <a
                href="mailto:kiranchoutaje@gmail.com"
                className="hover:text-white transition underline-offset-2 hover:underline"
              >
                kiranchoutaje@gmail.com
              </a>
            </p>

            {/* Phone */}
            <p>
              📞{" "}
              <a
                href="tel:+918904200159"
                className="hover:text-white transition underline-offset-2 hover:underline"
              >
                +91 8904200159
              </a>
            </p>

            {/* LinkedIn */}
            <p>
              🔗{" "}
              <a
                href="https://linkedin.com/in/kiran-c-c-132b04243"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition underline-offset-2 hover:underline"
              >
                My LinkedIn Profile
              </a>
            </p>

            {/* WhatsApp */}
            <p>
              <a
                href="https://wa.me/918904200159"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-500 transition"
              >
                <FaWhatsapp className="text-lg" />
                <span>WhatsApp</span>
              </a>
            </p>

          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Kiran C C — All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;
