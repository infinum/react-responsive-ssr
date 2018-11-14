import * as React from 'react';

import { Responsive } from './Responsive';

const context = React.createContext<Responsive | null>(null);

export const ResponsiveProvider = context.Provider;

export const ResponsiveConsumer = context.Consumer;
