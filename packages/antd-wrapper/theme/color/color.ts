// color.ts
export interface ColorPalette {
  [key: string]: {
    base: string
    dark?: string
    medium?: string
    light?: string
  }
}

export const defaultColorPalette: ColorPalette = {
  primary: { base: '#1958B6', dark: '#2274E0', light: '#E8F3FF' },
  secondary: { base: '#FF6D38', dark: '#D95204', light: '#FFF1ED' },
  success: { base: '#18A160', dark: '#148730', light: '#E9F6EA' },
  warning: { base: '#ffc24a', dark: '#FBAC43', light: '#FFFDE9' },
  error: { base: '#FF3A5C', dark: '#E63148', light: '#FFF5F7' },
  neutral: { base: '#141823', dark: '#46484d', light: '#C2C2C2' },
}

export function buildColorTokens(colorPalette: ColorPalette) {
  return {
    colorP1: colorPalette.primary.base,
    colorP2: colorPalette.primary.dark,
    colorP3: colorPalette.primary.light,
    colorSuccess: colorPalette.success.base,
    colorWarning: colorPalette.warning.base,
    colorError: colorPalette.error.base,
    colorText: colorPalette.neutral.base,
  }
}
