'use client'

import React from 'react'
import * as S from './card.style'

interface CardPagesProps {
  children: React.ReactNode
}

const Card: React.FC<CardPagesProps> = (props) => {
  const { children, ...rest } = props
  return <S.CardWrapper {...rest}>{children}</S.CardWrapper>
}

export default Card
