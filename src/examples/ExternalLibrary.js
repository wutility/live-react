import { useState } from 'react';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from '../lib/index.js'
import styled from 'styled-components'

let codeTest = `function App() {

  // this an external library (styled)
  const Button = styled.button\`
    background-color: #000;
    color: #fff;
  \`;

  const [count, setCount] = React.useState(0);
  const onCount = () => setCount(count + 1);

  return <div>{count} <Button onClick={onCount}>Click me</Button></div>
}

render(<App />)`;

export default function ExternalLibrary () {

  const [showLiveError, setShowLiveError] = useState(false);

  return (<>
    <h3># external library</h3>
    <LiveProvider
      code={codeTest}
      externals={[
        { name: 'styled', lib: styled } // this an external library (styled)
      ]}>
      <div className="editor">
        <LiveEditor />
        <LivePreview
          onTranspile={() => { }}
          onError={setShowLiveError}
        />
        {showLiveError && <LiveError />}
      </div>
    </LiveProvider>
  </>);
}
