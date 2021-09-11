import { LiveProvider, LiveEditor, LivePreview } from '../lib/index.js'
import styled from 'styled-components'

let codeTest = `function App() {

  // this is an external library (styled component)
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

  return (<>
    <h3># external library</h3>
    <LiveProvider
      code={codeTest}
      bindings={{ styled }}>
      <div className="editor">
        <LiveEditor />
        <LivePreview onTranspile={() => { }} />
      </div>
    </LiveProvider>
  </>);
}
