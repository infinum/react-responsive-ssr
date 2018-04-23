import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Responsive } from '.';

export interface IResponsiveComponent {
  new(props?: any, context?: any): React.Component<any, any>;
}

export interface IResponsiveContext {
  responsive?: Responsive;
}

export const withResponsive = (Child: string |
    React.SFC<any> |
    React.ClassType<any, any, any> |
    React.ComponentClass<any>) => {
  return class ResponsiveComponent extends React.Component<{}, IResponsiveContext> {
    public static contextTypes = {
      responsive: PropTypes.object,
    };

    public render() {
      return <Child {...this.props} responsive={this.context.responsive} />;
    }
  };
};
