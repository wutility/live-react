import { LiveProvider, LiveEditor } from '../lib/index.js'

let codeTestWithError = `() => {
  const [count, setCount] = React.useState(0);
  const onCount = () => setCount(count + 1);
  return (
    <div>
      {count} <button onClick={onCount}>Click me</button>
    </div
  );
}`;

export default function OnlyHighlight () {
  return (<>
    <h3># syntax Highlighter with readOnly</h3>
    <LiveProvider code={codeTestWithError} onlyHighlight={true} readOnly={true}>
      <div className="editor">
        <LiveEditor />
      </div>
    </LiveProvider>
  </>)
}
