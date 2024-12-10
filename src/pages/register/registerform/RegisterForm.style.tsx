import { colors, misc, textSizes } from '@package/build-theme'
import styled from 'styled-components'

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
`
export const LabelWrapper = styled.label`
  color: ${colors.text};
`

export const FormItemWrapper = styled.div`
  width: 330px;
  margin-bottom: 15px;
  border-radius: ${misc.borderRadius.base};
`
export const WarningWrapper = styled.p`
  color: ${colors.warning};
  margin-top: 5px;
  font-size: ${textSizes.BaseW1};
`
export const ParaWrapper = styled.p`
  font-size: ${textSizes.BaseW2};
`

export const Highlight = styled.span`
  color: ${colors.goRed.dark};
`
