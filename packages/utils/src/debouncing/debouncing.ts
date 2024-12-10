const handleDebouncing = <T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number
) => {
  let debounceTimer: ReturnType<typeof setTimeout> | null = null // Specify ReturnType

  return (...args: T) => {
    if (debounceTimer) clearTimeout(debounceTimer) // Clear any previous timer

    debounceTimer = setTimeout(() => {
      callback(...args) // Execute callback with the latest arguments
      debounceTimer = null // Reset the timer reference
    }, delay)
  }
}

export default handleDebouncing
