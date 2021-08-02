import Gltf from "./Gltf";

const Inclusione = (props) => {
  return <group position={props.position}>
    <Gltf url={"/models/DracoINCLUSIONE.gltf"} />
  </group>;
}

export default Inclusione;