import { Modal } from '@cortex-ui/core/cx/modal';
export declare const CxModal: import("@lit-labs/react").ReactWebComponent<Modal, {}>;
declare global {
    namespace CXModal {
        type JSX = typeof CxModal.defaultProps;
    }
}
