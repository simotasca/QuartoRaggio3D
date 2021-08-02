import Gltf from "./Gltf";

const Integrazione = (props) => {
  return <group position={props.position} rotation={[0, -Math.PI / 1.1, 0]}>
    <Gltf url={"/models/DracoINTEGRAZIONE.gltf"}  />
  </group>;
}

export default Integrazione;