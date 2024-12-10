import { ColorPalette, defaultColorPalette } from './color/color'
import { FontThemeProperties, defaultFontThemeProperties } from './font/font'
import { MiscThemeProperties, defaultMiscThemeProperties } from './misc/misc'
import {
  SpacingThemeProperties,
  defaultSpacingThemeProperties,
} from './spacing/spacing'
import { buildColorTokens } from './color/color'
import { buildFontTokens } from './font/font'
import { buildMiscTokens } from './misc/misc'
import { buildSpacingTokens } from './spacing/spacing'
import { buildTypographyTokens } from './typography/typography'

// Extend the Theme interface to include spacing properties
export interface Theme {
  colors: ColorPalette
  font: FontThemeProperties
  misc: MiscThemeProperties
  typography: ReturnType<typeof buildTypographyTokens>
  spacing: ReturnType<typeof buildSpacingTokens>
  token: ReturnType<typeof buildThemeTokens>
}

// Combine all token builders into one function
export function buildThemeTokens(
  colorPalette: ColorPalette,
  fontThemeProperties: FontThemeProperties,
  miscThemeProperties: MiscThemeProperties,
  spacingThemeProperties: SpacingThemeProperties
) {
  return {
    ...buildColorTokens(colorPalette),
    ...buildFontTokens(fontThemeProperties),
    ...buildMiscTokens(miscThemeProperties),
    ...buildSpacingTokens(spacingThemeProperties),
    ...buildTypographyTokens(fontThemeProperties),
  }
}

// Generate the theme using color, font, misc, typography, and spacing properties
export function buildTheme(
  colorPalette: ColorPalette = defaultColorPalette,
  fontThemeProperties: FontThemeProperties = defaultFontThemeProperties,
  miscThemeProperties: MiscThemeProperties = defaultMiscThemeProperties,
  spacingThemeProperties: SpacingThemeProperties = defaultSpacingThemeProperties
): Theme {
  return {
    colors: colorPalette,
    font: fontThemeProperties,
    misc: miscThemeProperties,
    typography: buildTypographyTokens(fontThemeProperties),
    spacing: buildSpacingTokens(spacingThemeProperties),
    token: buildThemeTokens(
      colorPalette,
      fontThemeProperties,
      miscThemeProperties,
      spacingThemeProperties
    ),
  }
}

// Export the default theme
export const defaultTheme = buildTheme()
