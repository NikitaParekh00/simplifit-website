import { motion } from "framer-motion";
import "./loader.css"; // Import the styles

const Loader = () => {
  return (
    <div className="loader-container">
      <motion.div
        className="spinner"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
      />
      <p className="loader-text">Loading...</p>
    </div>
  );
};

export default Loader;
