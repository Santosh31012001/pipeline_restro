import styled from 'styled-components'
import { textSizes } from '@package/build-theme'

export const H1 = styled.h1`
  ${textSizes.SmallW1};
  color: ${({ theme }) => theme?.colors?.error};
`
