import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Chartered Accountant and Fitness Coach \n\nEmpowering the Workplace with Fitness & Events",
            // 1000,
            // "Strengthing your Wealth, Strengthening your Health",
            // 1000,
          ]}
          wrapper="span"
          className="type-animation-text"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="/hero.png" alt="" />
    </motion.div>
  );
};

export default Speech;
