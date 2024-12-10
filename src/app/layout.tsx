'use client'
import { Inter } from 'next/font/google'

//styles
import StyledComponentsRegistry from '@package/build-theme/src/registry'

//packages
import { store, Provider } from '@package/redux-setup/src/store'
import AntdWrapper from '@package/antd-wrapper'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <AntdWrapper>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </AntdWrapper>
        </Provider>
      </body>
    </html>
  )
}
