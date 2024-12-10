import { colors, misc, textSizes } from '@package/build-theme'
import styled from 'styled-components'

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const LabelWrapper = styled.label`
  color: ${colors.text};
`

export const InputFieldWrapper = styled.div`
  width: 330px;
  margin-left: -5px;
  margin-bottom: 40px;
  borderradius: ${misc.border.base};
`
export const WarningWrapper = styled.p`
  color: ${colors.warning};
  width: 330px;
  gap: 10px;
  margin-bottom: 5px;
  font-size: ${textSizes.BaseW1};
`
export const Highlight = styled.span`
  color: ${colors.goRed.dark};
`
