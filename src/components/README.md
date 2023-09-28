## AceUI

This is a library of fully customizable React UI components that can be used to build beautiful and functional user interfaces.

**Features:**

- A wide variety of components, including buttons, cards, inputs, modals, and more.
- All components are well-documented and easy to use.
<!-- - Components are built with accessibility in mind. -->
- Components are regularly updated and maintained.

**Getting started:**

To get started, install the library using npm:

```
$ npm install my-react-component-library
```

Once installed, wrap your root component with the `ThemeProvider` and pass in a `theme` object:

```javascript
import { ThemeProvider } from '@aceui/components';
import { theme } from '@aceui/components/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">... // rest of your code</div>
    </ThemeProvider>
  );
};
```

Now, you can import components from the library into your React application:

```javascript
import { Button } from '@aceui/components';

const Form = () => {
  return (
    <form className="form">
      ... // rest of your code
      <Button text="Click me!" />
    </form>
  );
};
```

**Documentation:**

For more information on how to use the components in this library, please see the [documentation]().

**GitHub repo:**

The source code for this library is available on [GitHub]()

<!-- **Main website:**

The main website for this library is:

[Link to main website] -->

**Contributing:**

We welcome contributions to this library. If you have a suggestion or bug fix, please create a pull request on GitHub.
