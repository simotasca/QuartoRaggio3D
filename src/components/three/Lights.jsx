import { useMemo } from "react";
import { DirectionalLight, SpotLight } from "three";

{/*
const Point = (props) => {
  return <pointLight color={props.color || 'white'}
    intensity={props.intensity || 1}
    position={props.position || [0, 0, 0]}
    distance={props.distance || 0}
    castShadow
    shadow-mapSize-width={2048}
    shadow-mapSize-height={2048} />
}
*/}

const Spot = (props) => {
  const light = useMemo(() => new SpotLight(props.color || 'lightyellow'), [props.color]);
  light.intensity = props.intensity || 8;
  light.penumbra = props.penumbra || 0;
  light.distance = props.distance || 0;
  light.angle = Math.PI * .83;
  light.castShadow = false;
  return <>
    <primitive object={light} position={props.position || [0, 50, 0]} />
    <primitive object={light.target} position={props.target || [0, 0, 0]} />
  </>;
}

const Direct = (props) => {
  const light = useMemo(() => new DirectionalLight(props.color || 'lightyellow'), [props.color]);
  light.intensity = props.intensity || 8;
  light.penumbra = props.penumbra || .5;
  light.distance = props.distance || 0;
  light.castShadow = true;
  return <>
    <primitive object={light} position={props.position || [0, 50, 0]} />
    <primitive object={light.target} position={props.target || [0, 0, 0]} />
  </>;
}


const Lights = () => (
  <>
    <Direct color={'white'} position={[-300, 100, 1000]} target={[490, -270, -500]} intensity={3.5} distance={999} />
  </>
);
export default Lights;
