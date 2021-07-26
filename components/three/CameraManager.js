import { a, useSpring } from "@react-spring/three";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { MACRO_CHANGE_TIME_MS, PAGE_TOGGLE_TIME_MS } from "../../helpers/animationConfig";
import { sinInOut } from "../../helpers/easing";
import { CAM_MINOR_POSITIONS, CAM_MINOR_SIDE_POSITIONS, CAM_MINOR_SIDE_TARGETS, CAM_MINOR_TARGETS, CAM_POSITIONS, CAM_SIDE_POSITIONS, CAM_SIDE_TARGETS, CAM_TARGETS } from "../../helpers/macros";
import usePrevious from "../../hooks/usePrevious";
import useWindowSize from "../../hooks/useWindowSize";

function CameraManager({ currentMacro }) {
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
  const changedMacro = prevMacro != currMacro & prevMacro != undefined;

  const screenTreshold = 1.8; // larghezza / altezza
  const size = useWindowSize();
  const minorPose = (size.width / size.height) < screenTreshold;
  //#endregion

  //#region POSITION Spring
  const { positionCoords } = useSpring({
    to: !minorPose ? [
      changedMacro ? { positionCoords: CAM_POSITIONS[currMacro], config: { duration: MACRO_CHANGE_TIME_MS, easing: sinInOut } } : {},
      { positionCoords: CAM_SIDE_POSITIONS[currMacro], config: { duration: PAGE_TOGGLE_TIME_MS, easing: sinInOut } }
    ] : [
      changedMacro ? { positionCoords: CAM_MINOR_POSITIONS[currMacro], config: { duration: MACRO_CHANGE_TIME_MS, easing: sinInOut } } : {},
      { positionCoords: CAM_MINOR_SIDE_POSITIONS[currMacro], config: { duration: PAGE_TOGGLE_TIME_MS, easing: sinInOut } }
    ],
    //delay: !changedMacro ? 0 : PAGE_TOGGLE_TIME_MS
  });
  //#endregion

  //#region TARGET Spring
  const { targetCoords } = useSpring({
    to: !minorPose ? [
      changedMacro ? { targetCoords: CAM_TARGETS[currMacro], config: { duration: MACRO_CHANGE_TIME_MS, easing: sinInOut } } : {},
      { targetCoords: CAM_SIDE_TARGETS[currMacro], config: { duration: PAGE_TOGGLE_TIME_MS, easing: sinInOut } }
    ] : [
      changedMacro ? { targetCoords: CAM_MINOR_TARGETS[currMacro], config: { duration: MACRO_CHANGE_TIME_MS, easing: sinInOut } } : {},
      { targetCoords: CAM_MINOR_SIDE_TARGETS[currMacro], config: { duration: PAGE_TOGGLE_TIME_MS, easing: sinInOut } }
    ],
    // delay: !changedMacro ? 0 : PAGE_TOGGLE_TIME_MS
  });

  const target = useRef();
  useFrame(() => {
    cam.current.lookAt(target.current.position);
  });
  //#endregion

  return <>
    <a.mesh ref={target} position={targetCoords || (minorPose ? CAM_MINOR_SIDE_TARGETS[currMacro] : CAM_SIDE_TARGETS[currMacro])} />
    <a.perspectiveCamera ref={cam} position={positionCoords || (minorPose ? CAM_MINOR_SIDE_POSITIONS[currMacro] : CAM_SIDE_POSITIONS[currMacro])} />
  </>;
}

export default CameraManager;