'use client' // Error boundaries must be Client Components
import { useEffect } from 'react'
import styled from 'styled-components'

//styles
const Pre = styled.pre`
  white-space: pre-wrap;
  word-wrap: break-word;
  padding: 10px;
  background: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: auto;
`

//packages
import Button from '@package/antd-wrapper/button'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  // Log the error to the console
  useEffect(() => {
    console.log('Global error caught:', error)
  }, [error])

  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <Button onClick={reset}>Reload this page</Button>
        <Pre>{error.message}</Pre>
        {error.stack && <Pre>{error.stack}</Pre>}
      </body>
    </html>
  )
}
