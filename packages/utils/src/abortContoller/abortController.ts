import { useEffect, useRef } from 'react'

const useAbortController = () => {
  const controllerRef = useRef<AbortController | null>(null)

  useEffect(() => {
    // Create the AbortController when the hook is first run
    controllerRef.current = new AbortController()

    // Cleanup function to abort any pending requests when the component unmounts
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort()
      }
    }
  }, [])

  // Return the current AbortController's signal
  return controllerRef.current?.signal
}

export default useAbortController
