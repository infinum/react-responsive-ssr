import * as MobileDetect from 'mobile-detect';

export const parser = ({ headers = {} } = {}) => {
  const userAgent: string = headers['user-agent'] || headers['User-Agent'];
  const mobileDetect: MobileDetect = new MobileDetect(userAgent);

  return {
    desktop: !mobileDetect.mobile(),
    mobile: !!mobileDetect.mobile(),
    phone: !!mobileDetect.phone(),
    tablet: !!mobileDetect.tablet(),
  };
};
