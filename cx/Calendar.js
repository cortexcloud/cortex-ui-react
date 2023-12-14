import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { Calendar } from '@cortex-ui/core/cx/calendar';
export const CxCalendar = createComponent({
    tagName: 'cx-calendar',
    elementClass: Calendar,
    react: React,
    events: {
        onSelectDate: 'select-date',
    },
});
