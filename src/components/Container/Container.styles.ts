import { css } from '@emotion/react';

import { config } from '../../config';
import { responsive } from '../../utils';

import { ContainerProps } from '.';
import type { DefaultTheme, StyleProps } from '../../types/emotion';

export const base = ({ theme }: StyleProps) => css`
  label: container;

  width: 100%;
  max-width: 100%;

  margin-right: auto;
  margin-left: auto;

  box-sizing: border-box;

  padding-left: ${config(theme).grid.space / 2}rem;
  padding-right: ${config(theme).grid.space / 2}rem;
`;

export const fluid = ({ theme, fluid }: ContainerProps & StyleProps) =>
  !fluid &&
  responsive(
    config(theme).grid.breakpoints,
    (breakpoint: keyof DefaultTheme['grid']['breakpoints']) =>
      typeof config(theme).grid.container[breakpoint] === 'number' &&
      `
      label: container--fluid;
      max-width: ${config(theme).grid.container[breakpoint]}rem;
    `
  );
