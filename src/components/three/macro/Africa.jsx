import Gltf from "./Gltf";
import Fire from "../Fire";

const Africa = (props) => {
  return <group position={props.position}>
    <Gltf url={"/models/AFRICA.gltf"} />
    <Fire position={[23, 24, 36]} />
  </group >;
}

export default Africa;