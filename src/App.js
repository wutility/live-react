import { useState } from 'react';
import {
  LiveProvider,
  LiveEditor,
  LivePreview,
  LiveError
} from './lib/index.js'

let codeTest = `const { useState, useEffect, useRef } = React;

function App() {
  const [count, setCount] = useState(0);
  const onCount = () => setCount(count + 1);
  return (
    <div>
      {count} <button onClick={onCount}>Click me</button>
    </div>
  );
}

render(<App />)`;

let codeTestWithError = `const { useState, useEffect, useRef } = React;

function App() {
  const [count, setCount] = useState(0);
  const onCount = () => setCount(count + 1);
  return (
    <div>
      {count} <button onClick={onCount}>Click me</button>
    </div>
  );
}

render(<App /)`;

export default function App () {

  const [showLiveError, setShowLiveError] = useState(false);
  const [showLiveErrorWithError, setShowLiveErrorWithError] = useState(false);

  const onTranspile = value => { }

  return (<main>

    <h1>Live React Component</h1>

    <h3>Example</h3>
    <LiveProvider code={codeTest}>
      <div className="d-flex editor">
        <LiveEditor />
        <LivePreview onTranspile={onTranspile} onError={setShowLiveError} />
        {showLiveError && <LiveError />}
      </div>
    </LiveProvider>

    <h3>Example with error</h3>
    <LiveProvider code={codeTestWithError}>
      <div className="d-flex editor">
        <LiveEditor />
        <LivePreview onTranspile={onTranspile} onError={setShowLiveErrorWithError} />
        {showLiveErrorWithError && <LiveError />}
      </div>
    </LiveProvider>
  </main>);
}
