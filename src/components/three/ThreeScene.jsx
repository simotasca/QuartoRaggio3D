import React, { useContext, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraManager, Box, Lights } from '.';
import { Africa, Cooperativa, Home, Inclusione, Integrazione, Obj } from './macro';
import { MacroContext } from '../../store/macroContext';
import { macroPositions, macros } from '../../helpers/macros';
import { AnimationContext } from '../../store/animationContext';

const ThreeScene = () => {
  const canvasOnCreated = (ctx) => {
    ctx.gl.setClearColor('white');
  };

  const { macro } = useContext(MacroContext);
  const { startAnimating, stopAnimating } = useContext(AnimationContext);

  return (
    <Canvas onCreated={(ctx) => canvasOnCreated(ctx)} style={{ width: '100vw', height: '100vh' }} colorManagement camera={{ fov: 60, position: [0, 10, 20], far: 1500 }}>
      <Lights />

      <Box />

      <CameraManager currentMacro={macro} start={startAnimating} stop={stopAnimating} />

      <Home position={macroPositions[macros.home]} />
      <Cooperativa position={macroPositions[macros.cooperativa]} />
      <Integrazione position={macroPositions[macros.integrazione]} />
      <Africa position={macroPositions[macros.africa]} />
      <Inclusione position={macroPositions[macros.inclusione]} />
    </Canvas>
  );
};

export default ThreeScene;
