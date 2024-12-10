// typography.ts
import { FontThemeProperties } from '../font/font'

export function buildTypography(font: FontThemeProperties) {
  const {
    fs32,
    fs24,
    fs22,
    fs18,
    fs16,
    fs14,
    fs12,
    fwRegular,
    fwMedium,
    fwSemiBold,
    fwBold,
    lhAuto,
  } = font

  const textSizes = {
    Large: {
      'font-size': fs18,
      'font-weight': fwRegular,
      'line-height': lhAuto,
    },
    Medium: {
      'font-size': fs16,
      'font-weight': fwMedium,
      'line-height': lhAuto,
    },
    Small: {
      'font-size': fs14,
      'font-weight': fwSemiBold,
      'line-height': lhAuto,
    },
    exSmall: {
      'font-size': fs12,
      'font-weight': fwSemiBold,
      'line-height': lhAuto,
    },
  }

  const headingSizes = {
    xLarge: { 'font-size': fs32, 'font-weight': fwBold, 'line-height': lhAuto },
    Large: { 'font-size': fs24, 'font-weight': fwBold, 'line-height': lhAuto },
    Medium: {
      'font-size': fs22,
      'font-weight': fwSemiBold,
      'line-height': lhAuto,
    },
  }

  return { textSizes, headingSizes }
}
export function buildTypographyTokens(
  fontThemeProperties: FontThemeProperties
) {
  const typography = buildTypography(fontThemeProperties)

  return {
    textSizeLarge: typography.textSizes.Large['font-size'],
    textWeightLarge: typography.textSizes.Large['font-weight'],
    textSizeMedium: typography.textSizes.Medium['font-size'],
    textWeightMedium: typography.textSizes.Medium['font-weight'],
    textSizeSmall: typography.textSizes.Small['font-size'],
    textWeightSmall: typography.textSizes.Small['font-weight'],
    headingSizeXLarge: typography.headingSizes.xLarge['font-size'],
    headingWeightXLarge: typography.headingSizes.xLarge['font-weight'],
    headingSizeLarge: typography.headingSizes.Large['font-size'],
    headingWeightLarge: typography.headingSizes.Large['font-weight'],
    headingSizeMedium: typography.headingSizes.Medium['font-size'],
    headingWeightMedium: typography.headingSizes.Medium['font-weight'],
  }
}
