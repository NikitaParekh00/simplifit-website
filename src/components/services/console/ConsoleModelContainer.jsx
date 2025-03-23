import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ConsoleModel } from "./ConsoleModel";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const ConsoleModelContainer = () => {
  return (
    <div className="model-container">
      <Canvas>
        <Suspense fallback="loading...">
          {/* Increased Lights */}
          <ambientLight intensity={3} />
          <directionalLight position={[5, 5, 5]} intensity={3} />
          <spotLight position={[0, 5, 0]} angle={0.5} intensity={3} />

          {/* Scale Fix for Small Model */}
          <ConsoleModel scale={2} position={[0, -1.5, 0]} />

          <OrbitControls enableZoom={true} autoRotate />

          {/* Move Camera Closer */}
          <PerspectiveCamera
            position={[0, 1, 3]}
            zoom={1.5}
            makeDefault
            near={0.1}
            far={100}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ConsoleModelContainer;
