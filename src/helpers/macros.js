export const macros = {
  home: 0,
  cooperativa: 1,
  integrazione: 2,
  africa: 3,
  inclusione: 4,
  comunita: 5
}

//#region MACRO POSITIONS
const macroPositions = new Array(6);
macroPositions[macros.home] = [50, 0, 190];
macroPositions[macros.cooperativa] = [-150, 0, 50];
macroPositions[macros.integrazione] = [180, 0, 40];
macroPositions[macros.africa] = [150, 0, -130];
macroPositions[macros.inclusione] = [-100, 0, -170];
macroPositions[macros.comunita] = [0, 0, 0];
export { macroPositions };
//#endregion

//#region CAM TARGETS
const camTargets = new Array(6);
camTargets[macros.home] = [40, 20, 190];
camTargets[macros.cooperativa] = [-150, 22, 50];
camTargets[macros.integrazione] = [180, 15, 40];
camTargets[macros.africa] = [150, 8, -130];
camTargets[macros.inclusione] = [-100, 14, -170];
camTargets[macros.comunita] = [0, 0, -1];
export { camTargets };
//#endregion

//#region CAM MINOR TARGETS
const camMinorTargets = new Array(6);
camMinorTargets[macros.home] = [50, 20, 190];
camMinorTargets[macros.cooperativa] = [-150, 22, 50];
camMinorTargets[macros.integrazione] = [180, 15, 40];
camMinorTargets[macros.africa] = [150, 8, -130];
camMinorTargets[macros.inclusione] = [-100, 14, -170];
camMinorTargets[macros.comunita] = [0, 0, -1];
export { camMinorTargets };
//#endregion

//#region CAM SIDE TARGETS
const camSideTargets = new Array(6);
camSideTargets[macros.home] = [31, 24, 190];
camSideTargets[macros.cooperativa] = [-210, 15, 20];
camSideTargets[macros.integrazione] = [155, 12, 40];
camSideTargets[macros.africa] = [95, 17, -130];
camSideTargets[macros.inclusione] = [-125, 13, -170];
camSideTargets[macros.comunita] = [-150, 0, -1];
export { camSideTargets };
//#endregion

//#region CAM MINOR SIDE TARGETS
const camMinorSideTargets = new Array(6);
camMinorSideTargets[macros.home] = [36, 25, 200];
camMinorSideTargets[macros.cooperativa] = [-185, 17, 20];
camMinorSideTargets[macros.integrazione] = [167, 15, 40];
camMinorSideTargets[macros.africa] = [115, 17, -130];
camMinorSideTargets[macros.inclusione] = [-120, 14, -170];
camMinorSideTargets[macros.comunita] = [-105, 0, -11];
export { camMinorSideTargets };
//#endregion

//#region CAM POSITIONS
const camPositions = new Array(6);
camPositions[macros.home] = [50, 15, 250];
camPositions[macros.cooperativa] = [-200, 10, 120];
camPositions[macros.integrazione] = [150, 20, 80];
camPositions[macros.africa] = [145, 22, -25];
camPositions[macros.inclusione] = [-150, 10, -140];
camPositions[macros.comunita] = [0, 300, 0];
export { camPositions };
//#endregion

//#region CAM MINOR POSITIONS
const camMinorPositions = new Array(6);
camMinorPositions[macros.home] = [50, 15, 250];
camMinorPositions[macros.cooperativa] = [-200, 10, 120];
camMinorPositions[macros.integrazione] = [150, 20, 80];
camMinorPositions[macros.africa] = [145, 22, -25];
camMinorPositions[macros.inclusione] = [-150, 10, -140];
camMinorPositions[macros.comunita] = [0, 300, 0];
export { camMinorPositions };
//#endregion

//#region CAM SIDE POSITIONS
const camSidePositions = new Array(6);
camSidePositions[macros.home] = [41, 20, 233];
camSidePositions[macros.cooperativa] = [-170, 40, 160];
camSidePositions[macros.integrazione] = [160, 20, 93];
camSidePositions[macros.africa] = [150, 20, 5];
camSidePositions[macros.inclusione] = [-140, 10, -150];
camSidePositions[macros.comunita] = [-150, 300, 0];
export { camSidePositions };
//#endregion

//#region CAM MINOR SIDE POSITIONS
const camMinorSidePositions = new Array(6);
camMinorSidePositions[macros.home] = [40, 25, 240];
camMinorSidePositions[macros.cooperativa] = [-145, 35, 140];
camMinorSidePositions[macros.integrazione] = [160, 20, 80];
camMinorSidePositions[macros.africa] = [185, 28, -20];
camMinorSidePositions[macros.inclusione] = [-140, 10, -150];
camMinorSidePositions[macros.comunita] = [-105, 350, -10];
export { camMinorSidePositions };
//#endregion