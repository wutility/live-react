import React, { useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import LiveContext from '../store/LiveContext';
import ErrorBoundary from './ErrorBoundary';
import styled from 'styled-components';

let babelOptions = { envName: 'production', presets: ['react', 'es2015'], babelrc: false };

export default function LivePreview ({ transformed }) {

  const { liveState, setLiveState } = useContext(LiveContext)
  const previewRef = useRef();

  useEffect(() => {
    if (previewRef && previewRef.current) {
      try {
        let result = window.Babel.transform(liveState.editorVal, babelOptions);

        const render = (Element) => {
          let ErroB = ErrorBoundary(Element, (e) => {
            setLiveState({ ...liveState, error: e || e.message });
          });

          return ReactDOM.render(
            <ErroB />,
            previewRef.current
          );
        }

        let Func = new Function('React', 'render', 'styled', result.code);
        Func(React, render, styled);
        setLiveState({ ...liveState, error: '' });

        if (transformed) {
          transformed(result.code)
        }

      } catch (err) {
        setLiveState({ ...liveState, error: err.message });
      }
    }
  }, [liveState.editorVal]);

  return <div ref={previewRef}></div>
}