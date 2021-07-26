import React, { useContext, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraManager, Box, Lights } from "."

import { MACRO_AFRICA, MACRO_COOPERATIVA, MACRO_HOME, MACRO_INCLUSIONE, MACRO_INTEGRAZIONE, MACRO_POSITIONS } from "../../helpers/macros";
import { Africa, Cooperativa, Home, Inclusione, Integrazione } from "./macro";
import { MacroContext } from "../../context/macroContext";

const ThreeScene = () => {

  const canvasOnCreated = (ctx) => {
    ctx.gl.setClearColor('white');
  }

  const { macro } = useContext(MacroContext);

  return (
    <Canvas
      onCreated={ctx => canvasOnCreated(ctx)}
      style={{ width: "100vw", height: "100vh" }}
      colorManagement

      camera={{ fov: 60, position: [0, 10, 20], far: 1500 }}>

      <Lights />

      <Box />

      <CameraManager currentMacro={macro} />

      <> {/*GLTF MACRO*/}
        <Home position={MACRO_POSITIONS[MACRO_HOME]} />
        <Cooperativa position={MACRO_POSITIONS[MACRO_COOPERATIVA]} />
        <Integrazione position={MACRO_POSITIONS[MACRO_INTEGRAZIONE]} />
        <Africa position={MACRO_POSITIONS[MACRO_AFRICA]} />
        <Inclusione position={MACRO_POSITIONS[MACRO_INCLUSIONE]} />
      </>

    </Canvas>
  );
};

export default ThreeScene;
