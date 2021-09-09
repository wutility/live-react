import { LiveProvider, LiveEditor, LivePreview } from '../lib/index.js'

let codeTestPureJsx = `<button onClick={()=> alert('hello') }>click</button>`

export default function PureJsx () {

  return (<>
    <h3># Pure Jsx</h3>
    <LiveProvider code={codeTestPureJsx}>
      <div className="editor">
        <LiveEditor />
        <LivePreview />
      </div>
    </LiveProvider>
  </>);
}
