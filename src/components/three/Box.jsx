import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { BackSide, TextureLoader } from "three";

const Floor = () => {

  const texture = useLoader(TextureLoader, '/resources/SPAda.png');

  return (
    <>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
        castShadow={false}>
        <planeBufferGeometry attach="geometry" args={[700, 700]} />
        <meshStandardMaterial />
      </mesh>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.2, 0]}
        receiveShadow
        castShadow={false}>
        <planeBufferGeometry attach="geometry" args={[250, 250]} />
        <meshStandardMaterial colorWrite map={texture} />
      </mesh>
    </>
  )
};

const FloorWrapper = () => {
  return <Suspense fallback={null}>
    <Floor />
  </Suspense>
}

const Box = () => (
  <>
    <FloorWrapper />
    <mesh position={[0, 49, 0]} receiveShadow > {/* BOX CONTENITORE */}
      <boxGeometry args={[700, 100, 700]} />
      <meshStandardMaterial emissive={'white'}
        side={BackSide} roughness={0} />
    </mesh>
  </>
);


export default Box;