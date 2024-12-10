'use client'
import React from 'react'

import Link from 'next/link'

// packages
import Button from '@package/antd-wrapper/button'

// styles
import * as S from './home.styles'

const Home = () => {
  return (
    <div>
      <Link href="/example" passHref>
        <Button color="default" variant="link">
          Goto Example
        </Button>
      </Link>
      <h1>Welcome to the Monorepo</h1>
      <Link href="/counter" passHref>
        <Button>go to counter</Button>
      </Link>

      <S.H1>Test Style components</S.H1>
    </div>
  )
}

export default Home
