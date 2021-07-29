import { useEffect, useState } from "react";
import { LoadingManager } from "three";
import { /*DRACOLoader,*/ GLTFLoader } from "three-stdlib";

const Gltf = ({ url, position }) => {
  const [model, setModel] = useState(null);

  const load = async () => {
    const manager = new LoadingManager();
    const loader = new GLTFLoader(manager);
    // .setDRACOLoader(
    // new DRACOLoader(manager).setDecoderPath(
    //     "https://www.gstatic.com/draco/v1/decoders/"
    //   )
    // );
    loader.load(url, async (gltf) => setModel(gltf.scene));
  };

  useEffect(() => {
    load(); //async hopefully
  }, [url]);

  return (
    <group position={position} dispose={null}>
      {model ? (
        <primitive name="model" object={model} />
      ) : (
        <mesh position={[0, 20, 0]}>
          <boxGeometry args={[10, 10, 10]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      )}
    </group>
  );
};

export default Gltf;

// SHADOW
//if (castShadow)
//scene.traverse((node) => {
//  if (node.isMesh) node.castShadow = true;
//});
