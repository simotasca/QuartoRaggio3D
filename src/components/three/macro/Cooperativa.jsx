import Gltf from './Gltf';

export default function Cooperativa(props) {
  return (
    <group position={props.position} rotation={[0, Math.PI / 6, 0]}>
      <Gltf url={'/models/COOPERATIVA.gltf'} />
    </group>
  );
}
