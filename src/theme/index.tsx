import uiTheme from '@prisma-cms/ui/dist/theme'

/**
 * Размеры экранов
 */
const breakpoints = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1920,
}

/**
 * Цвета
 */
const colors = {
  primary: '#333',
  a: {
    default: '#2196f3',
    hover: '#0d47a1',
  },
}

const background = {
  default: '#dcdcdc',
}

/**
 * Итоговая тема
 */
const theme = {
  ui: {
    ...uiTheme.ui,
  },
  colors,
  background,
  breakpoints,
}

export type Theme = typeof theme

// props that later will be injected by styled-components
export type ThemeProps = { theme?: Theme }

export default theme
