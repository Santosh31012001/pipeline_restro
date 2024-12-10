const lightThemeColors = {
  gradient: {
    base: 'linear-gradient(238deg, #95e4b7, #10c1df 39%, #1c88d6)',
  },
  shadow: {
    light: 'rgba(0, 0, 0, 0.13)',
    base: 'rgba(0, 0, 0, 0.25)',
    dark: 'rgba(0, 0, 0, 0.5)',
  },
  black: {
    base: '#3c3c43cc',
    dark: '#000',
    light: '#5a5a5a', // Light black for subtle UI elements
  },
  text: {
    primary: '#000', // Primary text color
    base: '#3c3c43cc', // Base text color
    secondary: '#666666', // Secondary text color
    muted: '#999999', // Muted text color
  },
  primary: {
    base: '#0a7ea4', // Updated Primary base color
    light: '#fff', // Primary light color
    dark: '#007bbf', // Darker shade of primary for hover states
    lighter: '#66d6ff', // Lighter shade of primary for lighter backgrounds
  },
  secondary: {
    base: '#1c1c1e', // Secondary base color
    light: '#3c3c43', // Lighter shade of secondary for hover states
    dark: '#0e0e0f', // Darker shade of secondary for active states
  },
  success: '#28a745', // Success color
  error: '#dc3545', // Error color
  warning: '#ffc107', // Warning color
  info: '#17a2b8', // Informational color
  background: '#ffffff', // Background color
  overlay: 'rgba(0, 0, 0, 0.5)', // Overlay color for modals and popups
  disabled: '#dcdcdc', // Disabled state color
}

const darkThemeColors = {
  gradient: {
    base: 'linear-gradient(238deg, #95e4b7, #10c1df 39%, #1c88d6)',
  },
  shadow: {
    light: 'rgba(0, 0, 0, 0.13)',
    base: 'rgba(0, 0, 0, 0.25)',
    dark: 'rgba(0, 0, 0, 0.5)',
  },
  black: {
    base: '#3c3c43cc',
    dark: '#000',
    light: '#5a5a5a', // Light black for subtle UI elements
  },
  text: {
    primary: '#f5f6f7', // Primary text color
    base: '#999999', // Base text color
    secondary: '#999999', // Secondary text color
    muted: '#666666', // Muted text color
  },
  primary: {
    base: 'rgb(8, 126, 164)', // Primary base color (custom for dark mode)
    light: '#fff', // Primary light color
    dark: '#007bbf', // Darker shade of primary for hover states
    lighter: '#66d6ff', // Lighter shade of primary for lighter backgrounds
  },
  secondary: {
    base: '#ff6f61', // Secondary base color (custom for dark mode)
    light: '#3c3c43', // Lighter shade of secondary for hover states
    dark: '#0e0e0f', // Darker shade of secondary for active states
  },
  success: '#4caf50', // Success color (custom for dark mode)
  error: '#f44336', // Error color (custom for dark mode)
  warning: '#ffb300', // Warning color (custom for dark mode)
  info: '#17a2b8', // Informational color
  background: '#15172a', // Background color (custom for dark mode)
  overlay: 'rgba(0, 0, 0, 0.5)', // Overlay color for modals and popups
  disabled: '#dcdcdc', // Disabled state color
}

// Example usage:
export const buildColors = (theme = 'light') => {
  return theme === 'dark' ? darkThemeColors : lightThemeColors
}

// Example of how to call this function:
// const colors = buildColors('dark'); // or buildColors('light');
