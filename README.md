# React live component

### [Demo](https://live-react-component.netlify.app)

# Installation
```bash
$ npm install live-react
# or via yarn 
$ yarn add live-react
```

# Usage
```jsx
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'live-react'

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
const Hello = () => return <h1>Hello world</h1>

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

## Notes
- [Full example check src/App.js](src/App.js)

# License
MIT