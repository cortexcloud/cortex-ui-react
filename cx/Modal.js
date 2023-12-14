import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { Modal } from '@cortex-ui/core/cx/modal';
export const CxModal = createComponent({
    tagName: 'cx-modal',
    elementClass: Modal,
    react: React,
});
