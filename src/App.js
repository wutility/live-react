import { useState } from 'react';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from './lib/index.js'
import styled from 'styled-components'

let codeTest = `function App() {

  const Button = styled.button\`
    background-color: #000;
    color: #fff;
  \`;

  const [count, setCount] = React.useState(0);
  const onCount = () => setCount(count + 1);
  return (
    <div>
      <Hello />
      {count} <Button onClick={onCount}>Click me</Button>
    </div>
  );
}

render(<App />)`;

let codeTestWithError = `function App() {
  const [count, setCount] = React.useState(0);
  const onCount = () => setCount(count + 1);
  return (
    <div>
      {count} <button onClick={onCount}>Click me</button>
    </div>
  );
}

render(<App /)`;

function Hello () {
  return <h1>Hello World</h1>
}

export default function App () {

  const [showLiveError, setShowLiveError] = useState(false);
  const [showLiveErrorWithError, setShowLiveErrorWithError] = useState(false);

  return (<>
    <main>
      <h1>Live React Component</h1>

      <h3>Example</h3>
      <LiveProvider
        code={codeTest}
        externals={[
          { name: 'Hello', lib: Hello },  // this an external component
          { name: 'styled', lib: styled } // this an external library (styled)
        ]}>
        <div className="d-flex editor">
          <LiveEditor />
          <LivePreview
            onTranspile={() => { }}
            onError={setShowLiveError}
          />
          {showLiveError && <LiveError />}
        </div>
      </LiveProvider>

      <h3>Example with error</h3>
      <LiveProvider code={codeTestWithError}>
        <div className="d-flex editor">
          <LiveEditor />
          <LivePreview
            onTranspile={() => { }}
            onError={setShowLiveErrorWithError} />
          {showLiveErrorWithError && <LiveError />}
        </div>
      </LiveProvider>
    </main>


    <footer>
      <a href="https://github.com/wutility/live-react">Repository</a>
    </footer>
  </>);
}
