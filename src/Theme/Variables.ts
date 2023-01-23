/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { Dimensions } from "react-native"

/**
 * Colors
 */
export const Colors = {
  // Example colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  primaryBg :"#f1f1f1",
  text: '#212529',
  font: "#000",
  primary: '#000000',
  paperBg: "#0ACF8347",
  primaryDark: '#01733B',
  success: '#0DAF36',
  error: '#dc3545',
  grey : '#80808060',
  grey200: '#F1F2F4',
  golden: '#FFCF98', 
  indicator: "#55efc4",
  INPUT_BORDER: "#E9E9E9",
  INPUT_PLACEHOLDER: "#CECECE",
  SUBTEXT: "#7F7E7E",
  SECONDARY: "#075B81",
  REJECTED_BG: "#4B4B4B"
}

export const NavigationColors = {
  primary: Colors.primary,
}


/**
 * Metrics Sizes
 */
const TINY = 5 // 10 calculate according to the screen size
const SMALL = TINY * 2 // 10
const REGULAR = TINY * 3 // 15
const LARGE = REGULAR * 2 // 30
const {height ,width } = Dimensions.get('window')
export const MetricsSizes = {
  TINY,
  SMALL,
  REGULAR,
  LARGE,
  height,
  width,
}

/**
 * FontSize
 */
export const FontSize = {
    xs : SMALL, //  10
    sm : SMALL*1.2,//12
    rg : REGULAR, // 15
    md : REGULAR*1.2, // 18
    lg : LARGE*0.8, // 24
    xl : LARGE, //30
    xxl : LARGE*1.2, //36

}

/**
 * FontFamily
 */

let fontPrefix = "Roboto"  //REPLACE WITH YOUR FONT NAME

const FontFamily = {
    BLACK : fontPrefix + "-Black",
    BLACK_ITALIC : fontPrefix + "-BlackItalic",
    BOLD : fontPrefix + "-Bold",
    BOLD_ITALIC : fontPrefix + "-BoldItalic",
    EXTRA_BOLD : fontPrefix + "-ExtraBold",
    EXTRA_BOLD_ITALIC : fontPrefix + "-ExtraBoldItalic",
    EXTRA_LIGHT : fontPrefix + "-ExtraLight",
    EXTRA_LIGHT_ITALIC : fontPrefix + "-ExtraLightItalic",
    ITALIC : fontPrefix + "-Italic",
    LIGHT : fontPrefix + "-Light",
    LIGHT_ITALIC : fontPrefix + "-LightItalic",
    MEDIUM : fontPrefix + "-Medium",
    MEDIUM_ITALIC : fontPrefix + "-MediumItalic",
    REGULAR : fontPrefix + "-Regular",
    SEMI_BOLD : fontPrefix + "-SemiBold",
    SEMI_BOLD_ITALIC : fontPrefix + "-SemiBoldItalic",
    THIN : fontPrefix + "-Thin",
    THIN_ITALIC : fontPrefix + "-ThinItalic",

}

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
  FontFamily,
}
