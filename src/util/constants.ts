import { GameState } from "./types";

export const colors = [
  "#008e90", // 0
  "#00c428", // 1
  "#01efff", // 2
  "#0279ff", // 3
  "#417300", // 4
  "#aa048a", // 5
  "#f70000", // 6
  "#fd369c", // 7
  "#ff8800", // 8
  "#ffa5a0", // 9
  "#fff302", // 10
  "#ffffff", // 11
];

const namedColors = {
  teal: 0,
  lightGreen: 1,
  lightBlue: 2,
  blue: 3,
  darkGreen: 4,
  purple: 5,
  red: 6,
  magenta: 7,
  orange: 8,
  salmon: 9,
  yellow: 10,
  white: 11,
};

export const BASE_GAME_STATE: GameState = {
  buckets: [],
};

export const TEST_GAME_STATE: GameState = {
  buckets: [
    [
      namedColors.yellow,
      namedColors.salmon,
      namedColors.orange,
      namedColors.blue,
    ],
    [
      namedColors.blue,
      namedColors.yellow,
      namedColors.darkGreen,
      namedColors.lightGreen,
    ],
    [
      namedColors.red,
      namedColors.magenta,
      namedColors.blue,
      namedColors.lightGreen,
    ],
    [namedColors.salmon, namedColors.teal, namedColors.white, namedColors.teal],
    [
      namedColors.purple,
      namedColors.purple,
      namedColors.lightGreen,
      namedColors.red,
    ],
    [namedColors.purple, namedColors.teal, namedColors.yellow, namedColors.red],
    [
      namedColors.salmon,
      namedColors.lightBlue,
      namedColors.darkGreen,
      namedColors.darkGreen,
    ],
    [
      namedColors.darkGreen,
      namedColors.red,
      namedColors.white,
      namedColors.white,
    ],
    [
      namedColors.orange,
      namedColors.teal,
      namedColors.blue,
      namedColors.magenta,
    ],
    [
      namedColors.white,
      namedColors.lightGreen,
      namedColors.lightBlue,
      namedColors.orange,
    ],
    [
      namedColors.magenta,
      namedColors.lightBlue,
      namedColors.yellow,
      namedColors.orange,
    ],
    [
      namedColors.purple,
      namedColors.salmon,
      namedColors.magenta,
      namedColors.lightBlue,
    ],
    [],
    [],
  ],
};
