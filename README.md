## [DEPRECATED]
*This project has reached the end of its development. Please use builtin solution [eact-responsive#server-side-rendering](https://www.npmjs.com/package/react-responsive#server-side-rendering).*

# React Responsive SSR

// TODO

## Install

Note: `react-responsive-ssr` has a peer dependency to `react`, `react-dom`, `prop-types`, `react-responsive` and `mobile-detect`,
so don't forget to install those packages.

```bash
npm install --save react react-dom prop-types react-responsive mobile-detect react-responsive-ssr
```

```bash
yarn add react react-dom prop-types react-responsive mobile-detect react-responsive-ssr
```

## Usage

With Next.js:

```typescript
import { ResponsiveProvider, Responsive } from 'react-responsive-ssr';

class App extends React.Component<any, any> {
  public static async getInitialProps(context: INextContext): Promise<any> {
    let responsive: Responsive;

    if (context.req) {
      responsive = new Responsive(context.req);
    }

    return {
      responsive,
    }
  }

  public render() {
    return (
      <ResponsiveProvider value={this.props.responsive}>
        // ...
      </ResponsiveProvider>
    );
  }
}
```

In component:

```typescript
import { MediaQuerySSR } from 'react-responsive-ssr';

// ...
  public render() {
    // ...
    return (
      <MediaQuerySSR maxWidth={991}>
        // ...
      </MediaQuerySSR>
    );
  }
// ...
```

## Concepts

// TODO

## License

The [MIT License](LICENSE)

## Credits

react-responsive-ssr is maintained and sponsored by
[Infinum](http://www.infinum.co).

<img src="https://infinum.co/infinum.png" width="264">
