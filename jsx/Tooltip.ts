import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { Tooltip } from '@cortex-ui/core/cx/tooltip';

export const CxTooltip = createComponent({
  tagName: 'cx-tooltip',
  elementClass: Tooltip,
  react: React,
});

declare global {
  namespace CxTooltip {
    type JSX = typeof CxTooltip.defaultProps;
  }
}
