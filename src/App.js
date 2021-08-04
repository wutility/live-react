import { useState } from 'react';
import {
  LiveProvider,
  LiveEditor,
  LivePreview,
  LiveError
} from './lib/index.js'

let codeTest = `const { useState, useEffect, useRef } = React;

const Title = styled.h1\`
  color: black;
\`;

function App() {
  const [count, setCount] = useState(0);
  const onCount = () => setCount(count + 1);
  return (
    <div>
      <Title>Hello World!</Title>
      {count} <button onClick={onCount}>Click me</button>
    </div>
  );
}

render(<App />)`;

export default function App () {

  const [state, setState] = useState(codeTest);

  const onChange = value => {
    setState(value);
  }

  const transformed = value => {}

  return (<LiveProvider code={state} config={{ fontSize: 16 }}>
    <div className="d-flex editor">
      <LiveEditor onChange={onChange} />
      <LivePreview transformed={transformed} />
    </div>
    <LiveError />
  </LiveProvider>);
}
