// see also components/ScreenSize for another way to consume this data
import * as React from 'react';
import MediaQuery, { MediaQueryProps } from 'react-responsive';
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
  const serverProps: any = responsive ?
    {
      values: {
        deviceWidth: responsive.fakeWidth,
        width: responsive.fakeWidth,
      },
    } :
    null;

  return (
    <MediaQuery
      {...rest}
      {...serverProps}
    >
      {children}
    </MediaQuery>
  );
};

export const MediaQuerySSR = withResponsive(MediaQueryComponent);
