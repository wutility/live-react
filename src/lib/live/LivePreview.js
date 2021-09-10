import React, { useContext } from 'react';
import LiveContext from '../store/LiveContext';
import { ErrorBoundary } from 'react-error-boundary'

let babelOptions = {
  envName: 'production',
  presets: ['react', 'es2017'],
  babelrc: false,
  comments: false
};

const LiveError = ({ msg }) => <pre className="live-error">{msg}</pre>

function Preview ({ code, bindings }) {
  try {
    let transformed = window.Babel.transform(code, babelOptions).code
    let Element = Function(
      'React,' + Object.keys(bindings),
      'return ' + transformed
    ).call(null, React, ...Object.values(bindings))

    return typeof Element == 'function' ? <Element /> : Element
  } catch (error) {
    return <LiveError msg={error.message} />
  }
}

export default function LivePreview () {
  const { liveState } = useContext(LiveContext)
  let { bindings, code } = liveState;

  const FallbackComponent = ({ error }) => {
    return <LiveError msg={error.message} />
  }

  return <div className="live-preview">
    <ErrorBoundary FallbackComponent={FallbackComponent} resetKeys={[code]}>
      <Preview code={code} bindings={bindings} />
    </ErrorBoundary>
  </div>
}