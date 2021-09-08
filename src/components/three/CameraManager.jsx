import { a, useSpring } from '@react-spring/three';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { MACRO_CHANGE_TIME_MS, PAGE_TOGGLE_TIME_MS } from '../../helpers/animationConfig';
import { sinInOut } from '../../helpers/easing';
import {
  camMinorPositions,
  camMinorSidePositions,
  camMinorSideTargets,
  camMinorTargets,
  camPositions,
  camSidePositions,
  camSideTargets,
  camTargets
} from '../../helpers/macros';
import usePrevious from '../../hooks/usePrevious';
import useWindowSize from '../../hooks/useWindowSize';

function CameraManager({ currentMacro, start, stop }) {
  //#region CAMERA SETTINGS
  const cam = useRef();
  const threeSet = useThree((state) => state.set);
  useEffect(() => {
    // non so perchè non lo fa da solo sto figlio di puta
    cam.current.aspect = window.innerWidth / window.innerHeight;
    cam.current.updateProjectionMatrix();

    threeSet({ camera: cam.current });
  }, [threeSet]);

  //#endregion

  //#region SPRING SETTINGS
  const currMacro = currentMacro;
  const prevMacro = usePrevious(currMacro);
  const changedMacro = (prevMacro != currMacro) & (prevMacro != undefined);

  const screenTreshold = 1.8; // width / height
  const size = useWindowSize();
  const minorPose = size.width / size.height < screenTreshold;
  //#endregion

  //#region POSITION Spring
  const { positionCoords } = useSpring({
    to: !minorPose
      ? [
          changedMacro ? { positionCoords: camPositions[currMacro], config: { duration: MACRO_CHANGE_TIME_MS, easing: sinInOut } } : {},
          { positionCoords: camSidePositions[currMacro], config: { duration: PAGE_TOGGLE_TIME_MS, easing: sinInOut }, onRest: () => stop() }
        ]
      : [
          changedMacro ? { positionCoords: camMinorPositions[currMacro], config: { duration: MACRO_CHANGE_TIME_MS, easing: sinInOut } } : {},
          { positionCoords: camMinorSidePositions[currMacro], config: { duration: PAGE_TOGGLE_TIME_MS, easing: sinInOut }, onRest: () => stop() }
        ]
  });
  //#endregion

  //#region TARGET Spring
  const { targetCoords } = useSpring({
    to: !minorPose
      ? [
          changedMacro ? { targetCoords: camTargets[currMacro], config: { duration: MACRO_CHANGE_TIME_MS, easing: sinInOut } } : {},
          { targetCoords: camSideTargets[currMacro], config: { duration: PAGE_TOGGLE_TIME_MS, easing: sinInOut } }
        ]
      : [
          changedMacro ? { targetCoords: camMinorTargets[currMacro], config: { duration: MACRO_CHANGE_TIME_MS, easing: sinInOut } } : {},
          { targetCoords: camMinorSideTargets[currMacro], config: { duration: PAGE_TOGGLE_TIME_MS, easing: sinInOut } }
        ]
  });

  const target = useRef();
  useFrame(() => {
    cam.current.lookAt(target.current.position);
  });
  //#endregion

  return (
    <>
      <a.mesh ref={target} position={targetCoords || (minorPose ? camMinorSideTargets[currMacro] : camSideTargets[currMacro])} />
      <a.perspectiveCamera ref={cam} position={positionCoords || (minorPose ? camMinorSidePositions[currMacro] : camSidePositions[currMacro])} />
    </>
  );
}

export default CameraManager;
