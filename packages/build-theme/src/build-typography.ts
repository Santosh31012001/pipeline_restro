// https://html.mmt.com/htmls/projects/HTMLFrontendHub/baseProjects/TypeSystem/gi/index.html

/* NOTE: not using the @React_UI_Lib/GIFontStandard since it does not support the type script
 import Styles from '@React_UI_Lib/GIFontStandard';
*/

export const buildTypography = (font) => {
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
    LargeW1: {
      'font-weight': fwRegular,
      'font-size': fs18,
      'line-height': lhAuto,
    },
    LargeW2: {
      'line-height': lhAuto,
      'font-size': fs18,
      'font-weight': fwMedium,
    },
    LargeW3: {
      'line-height': lhAuto,
      'font-size': fs18,
      'font-weight': fwSemiBold,
    },
    MediumW1: {
      'line-height': lhAuto,
      'font-size': fs16,
      'font-weight': fwRegular,
    },
    MediumW2: {
      'line-height': lhAuto,
      'font-size': fs16,
      'font-weight': fwMedium,
    },
    MediumW3: {
      'line-height': lhAuto,
      'font-size': fs16,
      'font-weight': fwSemiBold,
    },
    BaseW1: {
      'line-height': lhAuto,
      'font-size': fs14,
      'font-weight': fwRegular,
    },
    BaseW2: {
      'line-height': lhAuto,
      'font-size': fs14,
      'font-weight': fwMedium,
    },
    BaseW3: {
      'line-height': lhAuto,
      'font-size': fs14,
      'font-weight': fwSemiBold,
    },
    SmallW1: {
      'line-height': lhAuto,
      'font-size': fs12,
      'font-weight': fwRegular,
    },
    SmallW2: {
      'line-height': lhAuto,
      'font-size': fs12,
      'font-weight': fwMedium,
    },
    SmallW3: {
      'line-height': lhAuto,
      'font-size': fs12,
      'font-weight': fwSemiBold,
    },
  } as const

  //  Lable
  const headingSizes = {
    xLarge: {
      'font-weight': fwBold,
      'font-size': fs32,
      'line-height': lhAuto,
    },
    Large: {
      'line-height': lhAuto,
      'font-size': fs24,
      'font-weight': fwBold,
    },
    MediumW1: {
      'line-height': lhAuto,
      'font-size': fs22,
      'font-weight': fwSemiBold,
    },
    Small: {
      'line-height': lhAuto,
      'font-size': fs18,
      'font-weight': fwSemiBold,
    },
    Base: {
      'line-height': lhAuto,
      'font-size': fs16,
      'font-weight': fwSemiBold,
    },
  }

  return { textSizes, headingSizes }
}
