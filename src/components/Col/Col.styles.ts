import { css } from '@emotion/react';

import { config } from '../../config';
import { responsive } from '../../utils';

import type { ColProps } from '.';
import type { DefaultTheme, StyleProps } from '../../types/emotion';

export const base = ({ theme }: StyleProps) => css`
  position: relative;
  flex: 1 0 0%;

  width: 100%;
  max-width: 100%;

  box-sizing: border-box;

  padding-left: ${config(theme).grid.space / 2}rem;
  padding-right: ${config(theme).grid.space / 2}rem;
`;

export const size = (props: ColProps & StyleProps) =>
  responsive(
    config(props.theme).grid.breakpoints,
    (breakpoint: keyof DefaultTheme['grid']['breakpoints']) =>
      props[breakpoint] &&
      `
        flex: 0 0 ${
          (props[breakpoint] / config(props.theme).grid.columns[breakpoint]) *
          100
        }%;
        max-width: ${
          (props[breakpoint] / config(props.theme).grid.columns[breakpoint]) *
          100
        }%;
    `
  );

export const offset = ({ theme, offset }: ColProps & StyleProps) =>
  offset &&
  responsive(
    config(theme).grid.breakpoints,
    (breakpoint: keyof DefaultTheme['grid']['breakpoints']) =>
      offset[breakpoint] &&
      `
        margin-left: ${
          offset[breakpoint] >= 0
            ? (offset[breakpoint] / config(theme).grid.columns[breakpoint]) *
              100
            : 0
        }%;
    `
  );
