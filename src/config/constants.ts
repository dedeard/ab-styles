import { DefaultTheme, Breakpoints } from '../types/emotion';
import colors from './colors';
import grid from './grid';

export const COLORS = colors;

export const GRID = grid;

export const BREAKPOINTS: Array<Breakpoints> = ['xs', 'sm', 'md', 'lg', 'xl'];

export const DEFAULT_CONFIG: DefaultTheme = {
  grid,
  colors,
};
