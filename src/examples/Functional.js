import { useState } from 'react';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from '../lib/index.js'

let codeTestFn = `() => {
  const Button = () => <button 
    onClick={()=> alert('hello') }>click
  </button>

  return <h3>
    <Button />    
  </h3>
}`

export default function Functional () {

  const [showLiveErrorFN, setShowLiveErrorFN] = useState(false);

  return (<>
    <h3>functional</h3>
    <LiveProvider code={codeTestFn}>
      <div className="d-flex editor">
        <LiveEditor />
        <LivePreview onError={setShowLiveErrorFN} />
        {showLiveErrorFN && <LiveError />}
      </div>
    </LiveProvider>
  </>);
}
