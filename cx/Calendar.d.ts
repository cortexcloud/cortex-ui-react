import { Calendar } from '@cortex-ui/core/cx/calendar';
export declare const CxCalendar: import("@lit-labs/react").ReactWebComponent<Calendar, {
    onSelectDate: string;
}>;
declare global {
    namespace CxCalendar {
        type JSX = typeof CxCalendar.defaultProps;
    }
}
