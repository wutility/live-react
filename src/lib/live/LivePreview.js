import React, { useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import LiveContext from '../LiveContext';
import ErrorBoundary from './ErrorBoundary';
import styled from 'styled-components';

let babelOptions = { envName: 'production', presets: ['react', 'es2015'], babelrc: false };

export default function LivePreview () {

  const { state, setState } = useContext(LiveContext)
  const previewRef = useRef();

  useEffect(() => {
    if (previewRef && previewRef.current) {
      try {
        let result = window.Babel.transform(state.editorVal, babelOptions);

        let ErroB = ErrorBoundary((e) => {
          setState({ ...state, error: e || e.message });
        });

        let Func = new Function('React', 'ReactDOM', 'ErrorBoundary', 'styled', result.code);
        Func(React, ReactDOM, ErroB, styled);
        setState({ ...state, error: '' });
      } catch (err) {
        setState({ ...state, error: err.message });
      }
    }
  }, [state.editorVal]);

  return <div id={state.renderElementId} ref={previewRef}></div>
}