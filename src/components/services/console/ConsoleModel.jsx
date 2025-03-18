import { useGLTF } from "@react-three/drei";

export function ConsoleModel(props) {
  const { nodes, materials } = useGLTF("/dumbleModel.glb");

  return (
    <group {...props} dispose={null} scale={[0.05, 0.05, 0.05]} position={[0, -1, 0]}>
      {nodes?.Object_2 && (
        <mesh geometry={nodes.Object_2.geometry} material={materials?.wire_008008136} />
      )}
      {nodes?.Object_3 && (
        <mesh geometry={nodes.Object_3.geometry} material={materials?.wire_008008136} />
      )}
    </group>
  );
}

useGLTF.preload("/dumbleModel.glb");
