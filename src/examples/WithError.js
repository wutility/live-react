import { LiveProvider, LiveEditor, LivePreview } from '../lib/index.js'

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
  return (<>
    <h3># code with error</h3>
    <LiveProvider code={codeTestWithError}>
      <div className="editor">
        <LiveEditor />
        <LivePreview onTranspile={() => { }} />
      </div>
    </LiveProvider>
  </>)
}
