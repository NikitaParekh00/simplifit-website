import "./contact.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContactSvg from "./ContactSvg";

const followVariants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
};

const Contact = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="contact" ref={ref}>
      {/* Left Section */}
      <div className="cSection">
        <motion.h1 className="cTitle">Book your session now!</motion.h1>

        {/* Social Icons */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="contact-follow"
        >
          <motion.a
            variants={followVariants}
            href="https://www.instagram.com/simpli_fit_/"
            target="_blank"
            className="contact-link"
          >
            <img src="/instagram.png" alt="Instagram" />
          </motion.a>

          <motion.a
            variants={followVariants}
            href="https://api.whatsapp.com/send?phone=918591996356"
            target="_blank"
            className="contact-link"
          >
            <img src="/whatsapp.png" alt="WhatsApp" />
          </motion.a>

          <motion.a
            variants={followVariants}
            href="tel:+917506256356"
            target="_blank"
            className="contact-link"
          >
            <img src="/call.png" alt="Call" />
          </motion.a>
        </motion.div>
      </div>

      {/* Right Section - Image */}
      <div className="cSection">
        <ContactSvg className="contact-image" />
      </div>

      {/* Footer - Made with ❤️ */}
      <div className="footer">
        Made with ❤️ by
        <a
          href="https://www.hiddenleafventures.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="brand-name"
        >
          HiddenLeaf
        </a>
      </div>
    </div>
  );
};

export default Contact;
