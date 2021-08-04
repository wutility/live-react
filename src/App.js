import {
  LiveProvider,
  LiveEditor,
  LivePreview,
  LiveError
} from './lib/index.js'

export default function App () {

  const onChange = value => {
    console.log(value);
  }

  return (<LiveProvider>
    <div className="d-flex editor">
      <LiveEditor onChange={onChange} />
      <LivePreview />
    </div>
    <LiveError />
  </LiveProvider>);
}
