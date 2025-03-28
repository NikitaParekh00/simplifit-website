import ParticlesBackground from "../portfolio/ParticlesBackground";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import ConsoleModelContainer from "./console/ConsoleModelContainer";
import Counter from "./Counter";
import MugModelContainer from "./mug/MugModelContainer";
import "./services.css";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const textVariants = {
  initial: { x: -100, y: -100, opacity: 0 },
  animate: { x: 0, y: 0, opacity: 1, transition: { duration: 1 } },
};

const listVariants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.5 },
  },
};

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Corporate Stretching Session",
    counter: 35,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Corporate Team Bonding Event",
    counter: 23,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Corporate Fitness Activity",
    counter: 46,
  },
];

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="services" ref={ref}>
      {/* <ParticlesBackground /> */}

      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          How do I help?
        </motion.h1>

        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`service ${
                currentServiceId === service.id ? "active" : ""
              }`}
              onClick={() => setCurrentServiceId(service.id)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="serviceIcon">
                <img src={service.img} alt="" />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                {/* <h3>{service.counter} Events</h3> */}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="counterList">
          <Counter from={500} to={1000} text="Total Participants" />
          {/* <Counter from={0} to={72} text="Happy Clients" /> */}
        </div>
      </div>

      <div className="sSection right">
        {currentServiceId === 1 ? (
          <ComputerModelContainer />
        ) : currentServiceId === 2 ? (
          <MugModelContainer />
        ) : (
          <ConsoleModelContainer />
        )}
      </div>
    </div>
  );
};

export default Services;
