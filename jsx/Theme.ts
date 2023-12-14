import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { Theme } from '@cortex-ui/core/cx/theme';

export const CxTheme = createComponent({
  tagName: 'cx-theme',
  elementClass: Theme,
  react: React,
});

declare global {
  namespace CXTheme {
    type JSX = typeof CxTheme.defaultProps;
  }
}
