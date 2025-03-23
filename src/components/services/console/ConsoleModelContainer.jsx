import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ConsoleModel } from "./ConsoleModel";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const ConsoleModelContainer = () => {
  return (
    <div className="model-container">
      <Canvas>
        <Suspense fallback="loading...">
          {/* Improve Lighting */}
          <ambientLight intensity={3} />
          <directionalLight position={[5, 5, 5]} intensity={3} />
          <spotLight position={[0, 5, 5]} angle={0.3} intensity={3} />
          {/* Model */}
          <ConsoleModel position={[0, 0.3, 0]} /> // Move model slightly up
          {/* Camera Fix */}
          <OrbitControls enableZoom={true} autoRotate />
          <PerspectiveCamera position={[0, 2, 5]} zoom={2.5} makeDefault />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ConsoleModelContainer;
