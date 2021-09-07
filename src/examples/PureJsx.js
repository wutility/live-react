import { useState } from 'react';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from '../lib/index.js'

let codeTestPureJsx = `<button onClick={()=> alert('hello') }>click</button>`

export default function PureJsx () {

  const [showLiveErrorPureJsx, setShowLiveErrorPureJsx] = useState(false);

  return (<>
    <h3># Pure Jsx</h3>
    <LiveProvider code={codeTestPureJsx}>
      <div className="editor">
        <LiveEditor />
        <LivePreview onError={setShowLiveErrorPureJsx} />
        {showLiveErrorPureJsx && <LiveError />}
      </div>
    </LiveProvider>
  </>);
}
