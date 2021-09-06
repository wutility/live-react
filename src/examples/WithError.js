import { useState } from 'react';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from '../lib/index.js'

let codeTestWithError = `() => {
  const [count, setCount] = React.useState(0);
  const onCount = () => setCount(count + 1);
  return (
    <div>
      {count} <button onClick={onCount}>Click me</button>
    </div
  );
}`;

export default function WithError () {

  const [showLiveErrorWithError, setShowLiveErrorWithError] = useState(false);

  return (<>
    <h3>code with error</h3>
    <LiveProvider code={codeTestWithError}>
      <div className="d-flex editor">
        <LiveEditor />
        <LivePreview
          onTranspile={() => { }}
          onError={setShowLiveErrorWithError} />
        {showLiveErrorWithError && <LiveError />}
      </div>
    </LiveProvider>
  </>)
}
