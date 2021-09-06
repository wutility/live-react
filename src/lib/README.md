# ⚡️ React live component

![React live component](https://badgen.net/bundlephobia/dependency-count/live-reacto) ![React live component](https://badgen.net/npm/v/live-reacto) ![React live component](https://badgen.net/npm/dt/live-reacto) 

### [Demo](https://live-react-component.netlify.app)

# Installation
```bash
$ npm install live-reacto
# or via yarn 
$ yarn add live-reacto
```

# Usage
```jsx
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'live-reacto'

<LiveProvider code={'your code'}>
  <LiveEditor />
  <LivePreview />
  <LiveError />
</LiveProvider>
```

## Example
```jsx
// to change Prism theme, just import css file
import "prismjs/themes/prism-tomorrow.css";

const code = `function App() {
  const [count, setCount] = React.useState(0);
  const onCount = () => setCount(count + 1);
  return <div>{count} <button onClick={onCount}>Click me</button></div>
}

render(<App />)`;

// External component
const Hello = () => <h1>Hello world</h1>

<LiveProvider
  code={code}
  externals={[ // add an external component or library (styledComponent, etc..)
    { name: 'Hello', lib: Hello }
  ]}>

    <LiveEditor language="jsx" />

    <LivePreview
      onTranspile={transpiledCode => { }}   // returns transpiled code by Babel
      onError={error => { }}                // returns a code error
    />

    <LiveError />

</LiveProvider>
```

## Props

- **LiveProvider**

| Prop         | Type                     | Description                           |
|--------------|--------------------------|---------------------------------------|
|code          | `string`                 | Reactjs code                          |
|externals     | `Array<String, Object>`  | Add an external component or library. |

- **LiveEditor**

| Prop     | Type          | Description                                  |
|----------|---------------|----------------------------------------------|
|language     | `string`   | Language to be hightlighted (default: `jsx`) |

- **LivePreview**

| Prop       | Type         | Description                      |
|------------|--------------|----------------------------------|
|onTranspile | `method`     | returns transpiled code by Babel |
|onError     | `method`     | returns a code error             |

## Notes
- [Full example check src/App.js](src/App.js).
- All pull requests are welcome.

# License
MIT