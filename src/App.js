import { useContext } from 'react';
import {
  LiveContext,
  LiveProvider,
  LiveEditor,
  LivePreview,
  LiveError
} from './lib/index.js'

function App () {

  const { state, setState } = useContext(LiveContext)

  return (
    <div className="App">
      <LiveProvider>
        <div className="d-flex editor">
          <LiveEditor />
          <LivePreview />
        </div>
        <LiveError />
      </LiveProvider>
    </div>
  );
}

export default App;
