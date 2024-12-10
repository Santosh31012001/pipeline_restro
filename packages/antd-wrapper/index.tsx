'use client'
import { ReactNode } from 'react'
import { AntdRegistry } from '@ant-design/nextjs-registry'

import { CustomThemeProvider } from './theme/customtheme/CustomThemeContext'
import { defaultTheme } from './theme'

interface AntdWrapperProps {
  children: ReactNode
}

const AntdWrapper: React.FC<AntdWrapperProps> = ({ children }) => {
  return (
    <AntdRegistry>
      <CustomThemeProvider
        theme={defaultTheme} // Pass the entire defaultTheme object
      >
        {children}
      </CustomThemeProvider>
    </AntdRegistry>
  )
}

export default AntdWrapper
