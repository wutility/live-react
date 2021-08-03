import {
  LiveProvider,
  Editor,
  Preview,
  ErrorPreview
} from './lib/index.js'

function App () {
  return (
    <div className="App">
      <LiveProvider>
        <Editor />
        <Preview />
        <ErrorPreview />
      </LiveProvider>
    </div>
  );
}

export default App;
