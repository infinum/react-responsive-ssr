import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Responsive } from './Responsive';

export interface IProvider {
  responsive?: Responsive;
}

export class Provider extends React.Component<IProvider, any> {
  public static childContextTypes = {
    responsive: PropTypes.object,
  };

  public getChildContext() {
    const { responsive } = this.props;

    return { responsive };
  }

  public render() {
    return this.props.children;
  }
}
