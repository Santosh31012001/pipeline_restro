import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import buildFont, { defaultFontThemeProperties } from './build-font'
import buildSpacing, { defaultSpacingThemeProperties } from './build-spacing'
import buildMisc, { defaultMiscThemeProperties } from './build-misc'
import { Theme } from './types'
import { buildColors } from './build-color'
import { buildTypography } from './build-typography'

// DO NOT expose defaultThemeOptions for outside consumption
// instead rely on defaultTheme from buildTheme step
const defaultThemeOptions = {
  font: { ...defaultFontThemeProperties },
  spacing: { ...defaultSpacingThemeProperties },
  misc: { ...defaultMiscThemeProperties },
}
const font = buildFont(defaultThemeOptions.font)
const spacing = buildSpacing()
const misc = buildMisc()
const colors = buildColors()
const { textSizes, headingSizes } = buildTypography(font)

export function createTheme(): Theme {
  return {
    font,
    spacing,
    misc,
    colors,
  }
}

/**
 * always defaultTheme should get consumed all over
 * we might be introducing further customization in buildTheme step
 */
export const defaultTheme = createTheme()

/**
 * to check if theme exists on caller, else return defaultTheme
 */
export function useTheme(): Theme {
  const theme: Theme = useContext(ThemeContext)
  return theme || defaultTheme
}

export { font, spacing, misc, colors, textSizes, headingSizes }
