import React, { useContext, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraManager, Box, Lights } from ".";

import {
  MACRO_AFRICA,
  MACRO_COOPERATIVA,
  MACRO_HOME,
  MACRO_INCLUSIONE,
  MACRO_INTEGRAZIONE,
  MACRO_POSITIONS,
} from "../../helpers/macros";
import { MacroContext, macros } from "../../store/macroContext";
import MacroFactory from "./macro/MacroFactory";

const ThreeScene = () => {
  const canvasOnCreated = (ctx) => {
    ctx.gl.setClearColor("white");
  };

  const { macro } = useContext(MacroContext);

  return (
    <Canvas
      onCreated={(ctx) => canvasOnCreated(ctx)}
      style={{ width: "100vw", height: "100vh" }}
      colorManagement
      camera={{ fov: 60, position: [0, 10, 20], far: 1500 }}
    >
      <Lights />

      <Box />

      <CameraManager currentMacro={macro} />

      <>
        {" "}
        {/*GLTF MACRO*/}
        <MacroFactory macro={macros.home} currentMacro={macro} />
        <MacroFactory macro={macros.cooperativa} currentMacro={macro} />
        <MacroFactory macro={macros.integrazione} currentMacro={macro} />
        <MacroFactory macro={macros.africa} currentMacro={macro} />
        <MacroFactory macro={macros.inclusione} currentMacro={macro} />
      </>
    </Canvas>
  );
};

export default ThreeScene;
