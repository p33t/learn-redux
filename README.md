learn-redux Repo
Learning and experiments. Have a look at the commit history for a guide.

Notes:
- Alternative naming convention to avoid writing, 'Petstore' on lots of vars / types / classes
  - Just use `index.tsx` inside a folder to gather `UI` and `redux` elements
  - "Vertical" integration where a feature is self-contained
  - See [counter2](./src/features/counter2/index.tsx), [petstore](./src/features/petstore/index.tsx)
- API generation & usage. See [guide](https://redux-toolkit.js.org/rtk-query/usage/code-generation) & [openapi-config.json](./openapi-config.json)
  - Note the guide is a little off. Use a JSON file (not a typescript file) or else you'll get:
  ```
  Encountered a TypeScript configfile, but neither esbuild-runner nor ts-node are installed.
  ```





Original README below

---

# vite-template-redux

Uses [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/), and [React Testing Library](https://github.com/testing-library/react-testing-library) to create a modern [React](https://react.dev/) app compatible with [Create React App](https://create-react-app.dev/)

```sh
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
```

## Goals

- Easy migration from Create React App or Vite
- As beginner friendly as Create React App
- Optimized performance compared to Create React App
- Customizable without ejecting

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner

## Inspiration

- [Create React App](https://github.com/facebook/create-react-app/tree/main/packages/cra-template)
- [Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
- [Vitest](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)
