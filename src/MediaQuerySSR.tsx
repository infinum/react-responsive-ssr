// see also components/ScreenSize for another way to consume this data
import * as React from 'react';
import MediaQuery, { MediaQueryMatchers, MediaQueryProps } from 'react-responsive';
import { Responsive } from './Responsive';
import { withResponsive } from './withResponsive';

export interface IMediaQuerySSRProps extends MediaQueryProps {
  responsive?: Responsive;
}

const MediaQueryComponent: React.SFC<IMediaQuerySSRProps> = ({
  children,
  responsive,
  ...rest
}) => {
  const values: Partial<MediaQueryMatchers> = responsive
    ? {
        deviceWidth: responsive.fakeWidth,
        width: responsive.fakeWidth,
      }
    : {};

  return (
    <MediaQuery
      {...rest}
      values={values}
    >
      {children}
    </MediaQuery>
  );
};

export const MediaQuerySSR = withResponsive(MediaQueryComponent);
