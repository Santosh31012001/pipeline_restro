import { colors, misc } from '@package/build-theme'
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
  margin-top: 10px;
  margin-bottom: 40px;
  border: ${misc.border.base} solid ${colors.goBrandBlue.base};
  border-radius: ${misc.borderRadius.base};
  background-color: ${colors.primary};
`

export const spanWrapper = styled.span`
  margin-top: 5px;
`
