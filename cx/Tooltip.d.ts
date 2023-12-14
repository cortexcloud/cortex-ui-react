import { Tooltip } from '@cortex-ui/core/cx/tooltip';
export declare const CxTooltip: import("@lit-labs/react").ReactWebComponent<Tooltip, {}>;
declare global {
    namespace CxTooltip {
        type JSX = typeof CxTooltip.defaultProps;
    }
}
