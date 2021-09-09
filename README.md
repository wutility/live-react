# ⚡️ Live Reacto  
A Simple and flexible playground for live editing React code

![React live component](https://badgen.net/bundlephobia/dependency-count/live-reacto) ![React live component](https://badgen.net/npm/v/live-reacto) ![React live component](https://badgen.net/npm/dt/live-reacto) 

### [Demo](https://live-react-component.netlify.app)

# Installation
```bash
$ npm install live-reacto
# or via yarn 
$ yarn add live-reacto
```

# Required Babel
```html
<script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.15.6/babel.min.js"></script>
```

# Usage
```jsx
import { LiveProvider, LiveEditor, LivePreview } from 'live-reacto'

<LiveProvider code={'your code'}>
  <LiveEditor onChange={(newCode) => {}} />
  <LivePreview />
</LiveProvider>
```

## Full Example
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
  language="jsx" 
  code={code}
  bindings={{ Hello }}> //-> bind component

    <LiveEditor onChange={(newCode) => {}} />

    <LivePreview
      onError={error => { }}                // returns a code error
    />

</LiveProvider>
```

## Props

- **LiveProvider**

| Prop         | Type                     | Description                                  |
|--------------|--------------------------|----------------------------------------------|
|language      | `string`                 | Language to be hightlighted (default: `jsx`) |
|code          | `string`                 | Some React code                              |
|bindings      | `Object`                 | Add an external component or library.        |

- **LiveEditor**

| Prop     | Type          | Description                                  |
|----------|---------------|----------------------------------------------|
|onChange  | `method`      | returns live coding            |

- **LivePreview**

| Prop       | Type         | Description                      |
|------------|--------------|----------------------------------|
|onError     | `method`     | returns a code error             |

## Notes
- [Full example check src/examples](src/examples).
- All pull requests are welcome.

# License
MIT