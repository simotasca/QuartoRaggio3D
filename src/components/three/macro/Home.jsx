import Gltf from "./Gltf";
import Fire from "../Fire";

const Home = (props) => {
  return <group position={props.position}>
    <Gltf url={"/models/DracoHOME.gltf"} />
    <Fire position={[0, 34, 3]} />
  </group>;
}

export default Home;