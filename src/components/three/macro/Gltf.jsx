import { useEffect, useState } from 'react';
import { LoadingManager } from 'three';
import { DRACOLoader, GLTFLoader } from 'three-stdlib';

const Gltf = ({ url, position, setLoaded }) => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const manager = new LoadingManager();
    const loader = new GLTFLoader(manager).setDRACOLoader(new DRACOLoader(manager).setDecoderPath('https://www.gstatic.com/draco/v1/decoders/'));
    loader.load(url, async (gltf) => setModel(gltf.scene));
  }, [url]);

  useEffect(() => {
    model && setLoaded && setLoaded(true);
  }, [model, setLoaded]);

  return <group position={position} /*dispose={null}*/>{model && <primitive name="model" object={model} />}</group>;
};

export default Gltf;

// SHADOW
//if (castShadow)
//scene.traverse((node) => {
//  if (node.isMesh) node.castShadow = true;
//});
