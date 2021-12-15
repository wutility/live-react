import React, { useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import LiveContext from '../store/LiveContext';
import LiveErrorBoundary from './LiveErrorBoundary';
import { ErrorBoundary } from 'react-error-boundary'

import * as Babel from '@babel/standalone';

let babelOptions = {
  envName: 'production',
  presets: ['react', 'es2017'],
  babelrc: false,
  comments: false
};

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export default function LivePreview({ onTransform }: any) {

  const prevRef = useRef<any>()
  const { liveState, setLiveState } = useContext(LiveContext)

  const onError = ({ error }: any) => {
    setLiveState({ ...liveState, error: error.message })
  }

  useEffect(() => {
    try {
      const { onlyHighlight, bindings, code } = liveState;

      if (onlyHighlight || !prevRef || !prevRef.current) return;

      const transformed = Babel.transform(code, babelOptions).code;

      const render = (El: any) => {
        const ErrorB = LiveErrorBoundary(El, (e: any) => {
          setLiveState({ ...liveState, error: e })
        });

        ReactDOM.render(<ErrorB />, prevRef.current);
      }

      bindings['render'] = render;

      let hasMethodRender = /render\(<\w+\s+\/>\)/g.test(code)

      /* eslint-disable */
      let Element = Function(
        'React,' + Object.keys(bindings),
        hasMethodRender ? transformed : 'return ' + transformed
      )
        .call(null, React, ...Object.values(bindings))
      /* eslint-enable */

      if (!hasMethodRender) { render(Element) }

      setLiveState({ ...liveState, error: null })

      if (onTransform) onTransform(transformed)
    } catch (error) {
      setLiveState({ ...liveState, error: error })
    }
  }, [liveState.code]);

  if (liveState.onlyHighlight) {
    return <></>
  }
  else {
    return <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={onError}
      resetKeys={[liveState.code]}
    >
      <div className="live-preview" ref={prevRef}></div>
      {liveState.error && <pre className="live-error">{liveState.error.message}</pre>}
    </ErrorBoundary>
  }
}
