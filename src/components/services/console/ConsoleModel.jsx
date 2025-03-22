import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export function ConsoleModel(props) {
  const { scene } = useGLTF("/dumbleModel.glb");

  // Debugging: Check what’s inside the model
  useEffect(() => {
    console.log("GLTF Scene:", scene);
  }, [scene]);

  return (
    <group
      {...props}
      scale={[0.2, 0.2, 0.2]}
      position={[0, -1, 0]}
      rotation={[0, Math.PI, 0]}
    >
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/dumbleModel.glb");
