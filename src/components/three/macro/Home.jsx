import Gltf from './Gltf';
import Fire from '../Fire';
import { useState } from 'react';

export default function Home(props) {
  const [loaded, setLoaded] = useState(false);
  return (
    <group position={props.position}>
      <Gltf url={'/models/HOME.gltf'} setLoaded={setLoaded} />
      {/*loaded && <Fire position={[0, 34, 3]} />*/}
    </group>
  );
}
