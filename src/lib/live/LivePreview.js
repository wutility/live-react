import React, { useContext } from 'react';
import LiveContext from '../store/LiveContext';
import { ErrorBoundary } from 'react-error-boundary'

let babelOptions = {
  envName: 'production',
  presets: ['react', 'es2017'],
  babelrc: false,
  comments: false
};

function Preview ({ code, bindings }) {
  try {
    let transformed = window.Babel.transform(code, babelOptions).code
    let Element = Function(
      'React,' + Object.keys(bindings),
      'return ' + transformed
    ).call(null, React, ...Object.values(bindings))

    return typeof Element == 'function' ? <Element /> : Element
  } catch (error) {
    return <pre className="live-error">{error.message}</pre>
  }
}

export default function LivePreview () {
  const { liveState, setLiveState } = useContext(LiveContext)
  let { bindings, code } = liveState;

  const onError = (error) => {
    setLiveState({ ...liveState, error: error.message })
  }

  return <div className="live-preview">
    <ErrorBoundary FallbackComponent={<div>...</div>} onError={onError} resetKeys={[code]}>
      {liveState.error
        ? <pre className="live-error">{liveState.error}</pre>
        : <Preview code={code} bindings={bindings} />}
    </ErrorBoundary>
  </div>
}