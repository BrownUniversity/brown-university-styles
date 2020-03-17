const idRed = "#ED1C24";
const webRed = "#C00404";
const gold = "#FFC72C";
const gray = "#98A4AE";
const emerald = "#00B398";
const darkEmerald = "#008672";
const taupe = "#B7B09C";
const bearBrown = "#8b572a";
const lightGold = "#fef1cd";

export default {
  /*
    brown university visual identity
  */
  // primary
  idRed,
  brown: "#4E3629",
  gold,
  gray,
  // secondary
  skyBlue: "#59CBE8",
  emerald,
  darkEmerald,
  navy: "#003C71",
  taupe,

  /*
    fastspot visual styles
  */
  // primary
  red: webRed, // prefer webRed over idRed
  yellow: gold,
  // secondary`
  beige: taupe,

  /*
    brown university theme
  */
  lightBeige: "#EFECE5", // renamed from "beige" to resolve naming conflict with fastspot visual styles
  sand: "#CCC6B8",
  lightBrown: "#A79A94",
  mediumBrown: "#745D54",

  /*
    other themes
  */
  // used by athletics
  bearBrown,

  /*
    accent
  */
  lightGold,

  /*
    grayscale
  */
  white: "#FFFFFF",
  backgroundGray: "#f7f7f7",
  lightGray: "#F0F3F5",
  mediumGray: "#687078",
  darkGray: "#3C3C3C",
  black: "#000000",
  transparentBlack: "rgba(0, 0, 0, 0.15)",

  /*
    notifications
  */
  successBackground: "#e0f4f1",
  successForeground: emerald,
  errorBackground: "#ebd9db",
  errorForeground: "#d0021b",
  warningBackground: lightGold,
  warningForeground: bearBrown
};
