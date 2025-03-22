import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 50 },
          color: { value: "#ffcc00" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          move: {
            enable: true,
            speed: 2,
            direction: "top",
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "bubble" } },
          modes: { bubble: { size: 6, distance: 100 } },
        },
      }}
    />
  );
};

export default ParticlesBackground;
