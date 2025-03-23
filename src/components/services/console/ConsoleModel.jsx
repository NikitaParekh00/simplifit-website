import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ConsoleModel(props) {
  const { scene, materials, animations } = useGLTF("/pushupnew.glb");
  const modelRef = useRef();
  const mixerRef = useRef();

  useEffect(() => {
    console.log("Loaded Scene:", scene);
    console.log("Loaded Materials:", materials);

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
      scale={50}
      position={[0, -1, 0]}
      {...props}
    />
  );
}

useGLTF.preload("/pushupnew.glb");
