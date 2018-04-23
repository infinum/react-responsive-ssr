import { IncomingMessage } from 'http';
import { defaultSizes } from './defaults';
import { parser } from './parser';

export class Responsive {
  public fakeWidth: React.ReactText;

  constructor(req?: IncomingMessage) {
    this.fakeWidth = defaultSizes.desktop;
    if (req) {
      this.update(req);
    }
  }

  public update(req) {
    const {
      phone = false,
      tablet = false,
      mobile = false,
      desktop = false,
    } = parser(req);

    if (mobile) {
      if (phone) {
        this.fakeWidth = defaultSizes.phone;
      } else if (tablet) {
        this.fakeWidth = defaultSizes.tablet;
      } else {
        // TODO - should we ever get here? default to the lowest value i guess
        this.fakeWidth = defaultSizes.phone;
      }
    } else if (desktop) {
      this.fakeWidth = defaultSizes.desktop;
    } else {
      // nothing set, default to our defaultSize
      this.fakeWidth = defaultSizes.desktop;
    }
  }
}
