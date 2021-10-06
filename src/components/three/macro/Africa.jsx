import Gltf from './Gltf';
import Fire from '../Fire';
import { useState } from 'react';

export default function Africa(props) {
  const [loaded, setLoaded] = useState(false);
  return (
    <group position={props.position}>
      <Gltf url={'/models/AFRICA.gltf'} setLoaded={setLoaded} />
      {loaded && <Fire position={[23, 24, 36]} />}
    </group>
  );
}
