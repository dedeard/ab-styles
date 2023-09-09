import { DefaultTheme, Breakpoints } from '../types/emotion';

export const BREAKPOINTS: Array<Breakpoints> = ['xs', 'sm', 'md', 'lg', 'xl'];

export const DEFAULT_CONFIG: DefaultTheme = {
  grid: {
    space: 1,
    container: {
      xs: 'full',
      sm: 'full',
      md: 45,
      lg: 60,
      xl: 71.25,
    },
    columns: {
      xs: 4,
      sm: 8,
      md: 12,
      lg: 12,
      xl: 12,
    },
    breakpoints: {
      xs: 1,
      sm: 33.75,
      md: 48,
      lg: 64,
      xl: 71.25,
    },
  },
};
