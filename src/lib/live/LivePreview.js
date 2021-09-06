import React, { useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import LiveContext from '../store/LiveContext';
import ErrorBoundary from './ErrorBoundary';

let babelOptions = {
  envName: 'production',
  presets: ['react', 'es2017'],
  babelrc: false,
  comments: false
};

export default function LivePreview ({ onTranspile, onError }) {

  const { liveState, setLiveState } = useContext(LiveContext)
  const previewRef = useRef();

  useEffect(() => {
    if (previewRef && previewRef.current) {
      try {

        let { externals, editorVal } = liveState;
        let result = window.Babel.transform(editorVal, babelOptions);

        const render = (Element) => {
          let ErroB = ErrorBoundary(Element, (e) => {
            setLiveState({ ...liveState, error: e || e.message });
          });

          return ReactDOM.render(
            <ErroB />,
            previewRef.current
          );
        }

        let externalsNames = ['render']
        let externalComponents = [render]

        if (externals) {
          externalsNames = [...externalsNames, ...Object.keys(externals).map(v => externals[v].name)]
          externalComponents = [...externalComponents, ...Object.keys(externals).map(v => externals[v].lib)]
        }

        if (!/render\s*\(/.test(editorVal)) {
          let Func = new Function('React', 'return ' + result.code.trim());
          render(Func(React))
        }
        else {
          let Func = new Function(...externalsNames, result.code.trim());
          Func(...externalComponents);
        }

        setLiveState({ ...liveState, error: null });

        if (onTranspile) { onTranspile(result.code) }
        if (onError) { onError(null) }
      } catch (err) {
        if (onError) {
          onError(err.message)
        }
        setLiveState({ ...liveState, error: err.message });
      }
    }
  }, [liveState.editorVal]);

  return <div className="live-preview" ref={previewRef}></div>
}