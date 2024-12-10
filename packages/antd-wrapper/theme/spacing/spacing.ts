// spacing.ts
export interface SpacingThemeProperties {
  unit: number
}

export const defaultSpacingThemeProperties: SpacingThemeProperties = {
  unit: 1, // Base unit = 10px (1rem)
}

export default function buildSpacing(
  spacingThemeProperties = defaultSpacingThemeProperties
) {
  return {
    unit: spacingThemeProperties.unit, // Include the `unit` property
    nospacing: 0,
    xxsmall: spacingThemeProperties.unit * 0.1 + 'rem',
    xsmall: spacingThemeProperties.unit * 0.2 + 'rem',
    small: spacingThemeProperties.unit * 0.5 + 'rem',
    base: spacingThemeProperties.unit + 'rem',
    large: spacingThemeProperties.unit * 1.5 + 'rem',
    xlarge: spacingThemeProperties.unit * 2 + 'rem',
    xxlarge: spacingThemeProperties.unit * 2.5 + 'rem',
  }
}

export function buildSpacingTokens(
  spacingThemeProperties: SpacingThemeProperties
) {
  const spacing = buildSpacing(spacingThemeProperties)
  return {
    spacingNoSpacing: spacing.nospacing,
    spacingXXSmall: spacing.xxsmall,
    spacingXSmall: spacing.xsmall,
    spacingSmall: spacing.small,
    spacingBase: spacing.base,
    spacingLarge: spacing.large,
    spacingXLarge: spacing.xlarge,
    spacingXXLarge: spacing.xxlarge,
  }
}
