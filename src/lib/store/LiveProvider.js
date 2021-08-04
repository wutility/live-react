import React, { useState } from 'react';
import LiveContext from './LiveContext';

let editorVal = `const { useState, useEffect, useRef } = React;

const Title = styled.h1\`
  color: red;
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

export default function LiveProvider ({ children, dstate }) {

  const initState = {
    editorVal,
    outputVal: '',
    error: null,
    fontSize: 16,
    mode: 'ace/mode/jsx',
    theme: 'ace/theme/monokai',
    ...dstate
  };

  const [state, setState] = useState(initState);

  return (<LiveContext.Provider value={{ state, setState }}>
    <div className="live-react">{children}</div>
  </LiveContext.Provider>);
}
