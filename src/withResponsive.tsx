import * as React from 'react';

import { ResponsiveConsumer } from './context';
import { Responsive } from './Responsive';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function withResponsive<
    P extends { responsive?: Responsive },
    R = Omit<P, 'responsive'>
  >(
    Component: React.ComponentClass<P> | React.StatelessComponent<P>,
  ): React.SFC<R> {
  return function BoundComponent(props: R) {
    return (
      <ResponsiveConsumer>
        {(value) => <Component {...props} responsive={value} />}
      </ResponsiveConsumer>
    );
  };
}
