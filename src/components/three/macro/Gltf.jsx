import { useEffect, useState } from "react";
import { LoadingManager } from "three";
import { DRACOLoader, GLTFLoader } from "three-stdlib";
//import { BufferGeometryUtils } from "three";
//import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Gltf = ({ url, castShadow, position }) => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const manager = new LoadingManager();

    const loader = new GLTFLoader(manager).setDRACOLoader(
      new DRACOLoader(manager).setDecoderPath(
        "https://www.gstatic.com/draco/v1/decoders/"
      )
    );

    loader.load(
      // resource URL
      url,
      // called when the resource is loaded
      async (gltf) => {
        // console.log(gltf.scene.children.length);
        // SHADOW
        //if (castShadow)
        //scene.traverse((node) => {
        //  if (node.isMesh) node.castShadow = true;
        //});

        setModel(gltf.scene);
      }
      // called while loading is progressing
      // (xhr) => {
      //   console.log(xhr.loaded, xhr.total, "% loaded");
      // },
      // called when loading has errors
      // (error) => {
      // console.log("An error happened loading gltf");
      //   console.log(error);
      // }
    );
  }, [castShadow, url]);

  return (
    <group position={position} dispose={null}>
      {model ? (
        <primitive name="Object_0" object={model} />
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
