export const TOKEN = 'TOKEN';
export const MARKA = 'MARKA';
export const MODEL = 'MODEL';
export const REGION = 'REGION';

export function Token(data) {
  return {
    type: TOKEN,
    payload: data,
  };
}
// ----------------------------
export function Marka(data) {
  return {
    type: MARKA,
    payload: data,
  };
}
// ----------------------------
export function Model(data) {
  return {
    type: MODEL,
    payload: data,
  };
}
// ----------------------------
export function setRegion(data) {
  return {
    type: REGION,
    payload: data,
  };
}
// ----------------------------
