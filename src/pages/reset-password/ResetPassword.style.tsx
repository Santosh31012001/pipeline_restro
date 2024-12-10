import { colors, misc, textSizes } from '@package/build-theme'
import styled from 'styled-components'

export const PasswordinternalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h2`
  font-size: 35px;
  margin: 20px;
`
export const Button = styled.button`
  width: 330px;
  height: 30px;
  margin: 25px;
  margin-bottom: 40px;
  border: ${misc.border.base} solid ${colors.goBrandBlue.base};
  border-radius: ${misc.borderRadius.base};
  background-color: ${colors.primary};
`

export const spanWrapper = styled.span`
  margin-top: 5px;
  margin-left: 30px;
`
export const ParaWrapper = styled.p`
  color: ${colors.goBrandBlue.base};
  width: 330px;
  margin-left: 5px;
  font-size: ${textSizes.BaseW2};
`
