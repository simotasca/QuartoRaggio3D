import { useEffect, useState } from "react";
//import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Gltf = ({ url, castShadow, position }) => {
  const [model, setModel] = useState(null)

  useEffect(() => {
    const { GLTFLoader } = require('three/examples/jsm/loaders/GLTFLoader');

    const loader = new GLTFLoader();
    loader.load(url, async (gltf) => {
      const scene = gltf.scene;
      if (castShadow && castShadow == true)
        scene.traverse(node => {
          if (node.isMesh) node.castShadow = true;
        });
      setModel(scene);
    });
  }, [castShadow, url])

  return (
    <group position={position} dispose={null}>
      {model ? (<primitive name="Object_0" object={model} />) : (<mesh position={[0, 20, 0]}>
        <boxGeometry args={[10, 10, 10]} />
        <meshStandardMaterial color='orange' />
      </mesh>)}
    </group>
  );
}

export default Gltf;