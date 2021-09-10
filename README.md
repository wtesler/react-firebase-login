## react-firebase-login

A basic login portal that can be used for a react firebase website.

### Usage
Ensure Firebase has been initialized before anything else is done.

```
const {LoginPortal} = import('react-firebase-login');

const withLogin = (component) => {
    return () => (
      <LoginPortal>
        {component}
      </LoginPortal>
    );
}
// ...
// Route to it
// ...
<Route path={SOME_ROUTE} render={withLogin(<SomeScreen/>)}/>
```

You may also use only the `LoginContent` component and place it within
your own login screen like:

```
const {LoginContent} = import('react-firebase-login');
```

### Firebase config for test environment:

See `FIREBASE_CONFIG_README.md` in `src/Config`.

You add the config file `FIREBASE_CONFIG.json` at that level.

That config file gets ignored by version control.

### For Developer

Remember to `npm run build` before `npm publish`.