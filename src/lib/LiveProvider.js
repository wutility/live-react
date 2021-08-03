import React, { useState } from 'react';
import LiveContext from './LiveContext';

let editorVal = `const { useState, useEffect, useRef } = React;
const Title = styled.h1\`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
\`;
function Button({ onClick }) {
  return <button onClick={onClick}>click</button>;
}
function App() {
  const [count, setCount] = useState(0);
  const onCount = () => setCount(count + 1);
  return (
    <div>
      <Title>Hello World!</Title>
      {count} <Button onClick={onCount} />
    </div>
  );
}
ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('preview') // dont change the selector name
);`;

const initState = {
  editorVal,
  outputVal: '',
  error: null,
  fontSize: 16,
  mode: 'ace/mode/jsx',
  theme: 'ace/theme/monokai'
};

export default function LiveProvider ({ children }) {
  const [state, setState] = useState(initState);
  return (<LiveContext.Provider value={{ state, setState }}>
    <div className="live-react">{children}</div>
  </LiveContext.Provider>);
}
