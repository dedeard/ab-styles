import { css } from '@emotion/react';

import { config } from '../../config';
import { responsive } from '../../utils';

import type { RowProps } from '.';
import { DefaultTheme, StyleProps } from '../../types/emotion';

export const base = ({ theme }: StyleProps) => css`
  display: flex;
  flex-wrap: wrap;

  box-sizing: border-box;

  margin-left: -${config(theme).grid.space / 2}rem;
  margin-right: -${config(theme).grid.space / 2}rem;
`;

export const align = ({ theme, align }: RowProps & StyleProps) =>
  typeof align === 'object'
    ? responsive(
        config(theme).grid.breakpoints,
        (breakpoint: keyof DefaultTheme['grid']['breakpoints']) =>
          align[breakpoint] &&
          `
            align-items: ${align[breakpoint]};
          `
      )
    : css`
        align-items: ${align};
      `;

export const justify = ({ theme, justify }: RowProps & StyleProps) =>
  typeof justify === 'object'
    ? responsive(
        config(theme).grid.breakpoints,
        (breakpoint: keyof DefaultTheme['grid']['breakpoints']) =>
          justify[breakpoint] &&
          `
            justify-content: ${justify[breakpoint]};
          `
      )
    : css`
        justify-content: ${justify};
      `;

export const reverse = ({ theme, reverse }: RowProps & StyleProps) =>
  reverse &&
  (Array.isArray(reverse)
    ? responsive(
        config(theme).grid.breakpoints,
        (breakpoint: keyof DefaultTheme['grid']['breakpoints']) => `
          flex-direction: ${
            reverse.includes(breakpoint) ? 'row-reverse' : 'row'
          };
        `
      )
    : css`
        flex-direction: row-reverse;
      `);

export const noGutter = ({ noGutters }: RowProps) =>
  noGutters &&
  css`
    .grid-col {
      padding-left: 0;
      padding-right: 0;
    }
  `;
