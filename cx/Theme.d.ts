import { Theme } from '@cortex-ui/core/cx/theme';
export declare const CxTheme: import("@lit-labs/react").ReactWebComponent<Theme, {}>;
declare global {
    namespace CXTheme {
        type JSX = typeof CxTheme.defaultProps;
    }
}
