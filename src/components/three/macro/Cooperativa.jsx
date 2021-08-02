import Gltf from "./Gltf";

const Cooperativa = (props) => {
  return <group position={props.position} rotation={[0, Math.PI/6, 0]}>
    <Gltf url={"/models/DracoCOOPERATIVA.gltf"} />
  </group>;
}

export default Cooperativa;