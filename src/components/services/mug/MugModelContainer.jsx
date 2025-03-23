import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MugModel } from "./MugModel";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const MugModelContainer = () => {
  return (
    <div className="model-container">
      <Canvas>
        <Suspense fallback="loading...">
          {/* ADD MORE LIGHTS */}
          <ambientLight intensity={2} /> {/* Increase brightness */}
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <spotLight position={[0, 5, 0]} angle={0.5} intensity={2} />
          <MugModel position={[0, -1.5, 0]} />
          <OrbitControls enableZoom={true} autoRotate />
          <PerspectiveCamera
            position={[0, 1, 5]}
            zoom={1}
            makeDefault
            near={0.1}
            far={100}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MugModelContainer;
