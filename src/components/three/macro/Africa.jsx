import Gltf from "./Gltf";
import Fire from "../Fire";

const Africa = (props) => (
  <group position={props.position}>
    <Gltf url={"/models/DracoAFRICA.gltf"} />
    <Fire position={[23, 24, 36]} />
  </group>
);

export default Africa;
