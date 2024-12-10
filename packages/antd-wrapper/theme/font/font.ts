// font.ts
export interface FontThemeProperties {
  fs32: string
  fs24: string
  fs22: string
  fs18: string
  fs16: string
  fs14: string
  fs12: string
  fwRegular: number
  fwMedium: number
  fwSemiBold: number
  fwBold: number
  lhAuto: string
}

export const defaultFontThemeProperties: FontThemeProperties = {
  fs32: '2rem',
  fs24: '1.5rem',
  fs22: '1.375rem',
  fs18: '1.125rem',
  fs16: '1rem',
  fs14: '0.875rem',
  fs12: '0.75rem',
  fwRegular: 400,
  fwMedium: 500,
  fwSemiBold: 600,
  fwBold: 700,
  lhAuto: 'normal',
}

export function buildFontTokens(fontThemeProperties: FontThemeProperties) {
  return {
    fs32: fontThemeProperties.fs32,
    fs24: fontThemeProperties.fs24,
    fs22: fontThemeProperties.fs22,
    fs18: fontThemeProperties.fs18,
    fs16: fontThemeProperties.fs16,
    fs14: fontThemeProperties.fs14,
    fs12: fontThemeProperties.fs12,
    fwRegular: fontThemeProperties.fwRegular,
    fwMedium: fontThemeProperties.fwMedium,
    fwSemiBold: fontThemeProperties.fwSemiBold,
    fwBold: fontThemeProperties.fwBold,
  }
}
