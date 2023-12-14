import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { Popover } from '@cortex-ui/core/cx/popover';

export const CxPopover = createComponent({
  tagName: 'cx-popover',
  elementClass: Popover,
  react: React,
});

declare global {
  namespace CXPopover {
    type JSX = typeof CxPopover.defaultProps;
  }
}
