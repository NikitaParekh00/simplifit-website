import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ConsoleModel(props) {
  const { scene, animations } = useGLTF("/pushupnew.glb");
  const modelRef = useRef();
  const mixerRef = useRef();

  useEffect(() => {
    console.log("Loaded Scene:", scene);

    if (animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        const action = mixerRef.current.clipAction(clip);
        action.play();
      });
    }

    // Ensure materials are correctly applied
    scene.traverse((obj) => {
      if (obj.isMesh && obj.material) {
        obj.material.side = THREE.DoubleSide; // Fix transparency issues
      }
    });
  }, [animations, scene]);

  useFrame((_, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={8} // Adjust scale for better visibility
      position={[0, -0.5, 0]} // Adjust to keep model above ground
      {...props}
    />
  );
}

useGLTF.preload("/pushupnew.glb");
