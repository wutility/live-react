import { LiveProvider, LiveEditor, LivePreview } from '../lib/index.js'

let codeTestFn = `() => {
  const Button = () => <button 
    onClick={()=> alert('hello') }>click
  </button>

  return <div><Button /></div>
}`

export default function Functional () {

  return (<>
    <h3># functional</h3>
    <LiveProvider code={codeTestFn}>
      <div className="editor">
        <LiveEditor />
        <LivePreview />
      </div>
    </LiveProvider>
  </>);
}
