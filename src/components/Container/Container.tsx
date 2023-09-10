import React from 'react';
import type { Ref, ReactNode } from 'react';

import styled from '@emotion/styled';

import * as styles from './Container.styles';

export interface ContainerProps {
  /**
   * The CSS `max-width` property
   */
  fluid?: boolean;

  /**
   * The ref to the HTML DOM element
   */
  ref?: Ref<HTMLDivElement>;

  /**
   * The children nodes
   */
  children: ReactNode;
}

const ContainerEl = styled('div')<ContainerProps>(styles.base, styles.fluid);

const Container = React.forwardRef(
  (props: ContainerProps, ref?: ContainerProps['ref']) => {
    return <ContainerEl ref={ref} className="grid-container" {...props} />;
  }
);

export default Container;
