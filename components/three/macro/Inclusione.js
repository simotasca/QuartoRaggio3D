import Gltf from "./Gltf";

const Inclusione = (props) => {
  return <group position={props.position}>
    <Gltf url={"/models/INCLUSIONE.gltf"} />
  </group>;
}

export default Inclusione;