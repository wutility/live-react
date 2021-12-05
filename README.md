# ⚡️ Live Reacto  
A Simple and flexible playground for live editing React code

![React live component](https://badgen.net/bundlephobia/dependency-count/live-reacto) ![React live component](https://badgen.net/npm/v/live-reacto) ![React live component](https://badgen.net/npm/dt/live-reacto) 

### [PLayground](https://live-react-component.netlify.app)
### [Demo Codesandbox](https://codesandbox.io/s/live-react-qhthu)

# Installation
```bash
$ npm install live-reacto
# or via yarn 
$ yarn add live-reacto
```

# Usage
```jsx
import { LiveProvider, LiveEditor, LivePreview } from 'live-reacto';

// import your favorite prismjs theme
import "prismjs/themes/prism-dark.css";

const codeTest = `function App() {
  const [count, setCount] = React.useState(0);
  const onCount = () => setCount(count + 1);
  return <div>{count} <button onClick={onCount}>Click me</button></div>
}

render(<App />)`;

// External component
const Hello = () => <h1>Hello world</h1>

<LiveProvider
  language="jsx" 
  code={codeTest}
  readOnly={false}
  onlyHighlight={false}
  bindings={{ Hello }} //-> bind component
>
  <LiveEditor onChange={setCode} />
  <LivePreview onTransform={setTransform} />
</LiveProvider>
```

## Props

- **LiveProvider**

| Prop         | Type                     | Description                                   |
|--------------|--------------------------|-----------------------------------------------|
|language      | `string`                 | Language to be hightlighted (default: `jsx`)  |
|code          | `string`                 | Some React code                               |
|bindings      | `Object`                 | Add an external component or library.         |
|onlyHighlight | `Boolean`                | Disable LivePreview: works as Syntax highlighter.|
|readOnly      | `Boolean`                | Disable editing on the LiveEditor (Default: false).|

- **LiveEditor**

| Prop     | Type          | Description                                  |
|----------|---------------|----------------------------------------------|
|onChange  | `method`      | returns live coding                          |
|style     | `Object`         | set css style for editor                  |

- **LivePreview**

| Prop       | Type         | Description                                |
|------------|--------------|--------------------------------------------|
|onTransform | `method`     | returns the code transpiled by Babel |

### "peerDependencies": {
- prismjs
- react
- react-dom
- react-error-boundary
- react-simple-code-editor
- @babel/standalone

## Notes
- [Full examples check src/examples](src/examples).
- All pull requests are welcome.

# License
MIT