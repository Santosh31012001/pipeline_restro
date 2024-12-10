export const defaultFontThemeProperties = {
  fontFamily: 'Rubik',
  unit: 1.2,
  unitScale: 1,
  unitScaleStartingPoint: 0.2,
}

export default function buildFont(
  fontThemeProperties = defaultFontThemeProperties
) {
  return {
    fontFamily: fontThemeProperties.fontFamily,
    base: fontThemeProperties.unit + 'rem', // 12px | 1.2rem
    small:
      fontThemeProperties.unit -
      fontThemeProperties.unitScaleStartingPoint +
      'rem', // 10px | 1rem
    xsmall:
      fontThemeProperties.unit -
      fontThemeProperties.unitScaleStartingPoint * 2 +
      'rem', // 8px | 0.8rem
    large:
      fontThemeProperties.unit +
      fontThemeProperties.unitScaleStartingPoint * 3 +
      'rem', // 18px | 1.8rem
    lineHeight: {
      base: 1.33,
    },
    fs32: '32px',
    fs24: '24px',
    fs22: '22px',
    fs18: '18px',
    fs16: '16px',
    fs14: '14px',
    fs12: '12px',
    fwRegular: '400',
    fwMedium: '500',
    fwSemiBold: '600',
    fwBold: '700',
    lhAuto: 'normal',
    custom: (
      multiplier: 14 | 16 | 20 | 22 | 24 // 14 - 14px | 16 - 16px | 20px 22px 24px
    ) => multiplier * 0.1 + 'rem',
  }
}
