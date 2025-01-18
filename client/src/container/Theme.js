// src/theme/customTheme.js
import { createTheme } from '@mui/material/styles';

const customColors = {
  base: '#121212', // Base color for background
  surface: '#1e1e1e', // Surface color (for card backgrounds, etc.)
  overlay: '#2c2c2c', // Overlay color for emphasis
  muted: '#5a5a5a', // Muted colors for less important text or elements
  subtle: '#a1a1a1', // Subtle colors for secondary text
  text: '#e4e4e4', // Primary text color
  accent: '#f07d60', // Accent color (e.g., for buttons or highlights)
  secondary: '#62c4b6', // Secondary color (e.g., for secondary buttons)
  danger: '#ff4c4c', // Danger color (for error/warning)
  info: '#4b89c9', // Info color (for informational messages)
  success: '#56b266', // Success color
  highlightLow: '#2a2a2a',
  highlightMed: '#3a3a3a',
  highlightHigh: '#4a4a4a',
};

const customTheme = createTheme({
  palette: {
    mode: 'dark', // Use dark mode
    background: {
      default: customColors.base,
      paper: customColors.surface,
    },
    primary: {
      main: customColors.accent, // Primary color for main accents
    },
    secondary: {
      main: customColors.secondary, // Secondary color
    },
    error: {
      main: customColors.danger, // Error color
    },
    warning: {
      main: customColors.accent, // Can customize as needed
    },
    info: {
      main: customColors.info, // Info color
    },
    success: {
      main: customColors.success, // Success color
    },
    text: {
      primary: customColors.text,
      secondary: customColors.subtle,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Define the font family
    h1: {
      fontFamily: '"Space Mono", monospace', // Use Space Mono for headings
    },
    h2: {
      fontFamily: '"Space Mono", monospace',
    },
    h3: {
      fontFamily: '"Space Mono", monospace',
    },
    h4: {
      fontFamily: '"Space Mono", monospace',
    },
    h5: {
      fontFamily: '"Space Mono", monospace',
    },
    h6: {
      fontFamily: '"Space Mono", monospace',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: customColors.surface, // Override AppBar color
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevent text from being uppercased
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Space+Mono:wght@400;700&display=swap');
      `,
    },
  },
});

export default customTheme;
