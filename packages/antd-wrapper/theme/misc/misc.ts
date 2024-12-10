// misc.ts
export interface MiscThemeProperties {
  borderRadius: { unit: number; unitScale: number }
  border: { unit: number }
  zIndex: Record<string, number>
}

export const defaultMiscThemeProperties: MiscThemeProperties = {
  borderRadius: { unit: 0.4, unitScale: 0.2 },
  border: { unit: 0.1 },
  zIndex: {
    xxsmall: 2,
    xsmall: 3,
    small: 4,
    base: 5,
    large: 6,
    xlarge: 9,
    xxlarge: 99,
    xxxlarge: 999,
    maximum: 1999,
  },
}

export function buildMiscTokens(miscThemeProperties: MiscThemeProperties) {
  return {
    borderRadiusUnit: miscThemeProperties.borderRadius.unit,
    borderRadiusUnitScale: miscThemeProperties.borderRadius.unitScale,
    borderUnit: miscThemeProperties.border.unit,
    zIndexXXSmall: miscThemeProperties.zIndex.xxsmall,
    zIndexXSmall: miscThemeProperties.zIndex.xsmall,
    zIndexSmall: miscThemeProperties.zIndex.small,
    zIndexBase: miscThemeProperties.zIndex.base,
    zIndexLarge: miscThemeProperties.zIndex.large,
    zIndexXLarge: miscThemeProperties.zIndex.xlarge,
    zIndexXXLarge: miscThemeProperties.zIndex.xxlarge,
    zIndexXXXLarge: miscThemeProperties.zIndex.xxxlarge,
    zIndexMaximum: miscThemeProperties.zIndex.maximum,
  }
}
