import React, { useRef, useEffect, useContext } from 'react';
import LiveContext from '../LiveContext';

export default function LiveEditor () {

  const { state, setState } = useContext(LiveContext)
  const editorRef = useRef(null);

  const eops = {
    enableBasicAutocompletion: true,
    enableSnippets: false,
    enableLiveAutocompletion: true,
    highlightActiveLine: true,
    wrapBehavioursEnabled: true,
    showPrintMargin: true,
    showGutter: true,
    highlightGutterLine: true,
    fontSize: state.fontSize,
    theme: state.theme,
    mode: state.mode,
    useWorker: false,
    tabSize: 4
  }

  useEffect(() => {
    if (editorRef.current && window.ace) {

      const editor = window.ace.edit(editorRef.current);

      editor.setValue(state.editorVal, 1);
      editor.setOptions(eops);

      editor.getSession().on('change', function () {
        let editorVal = editor.session.getValue();
        setState({ ...state, editorVal })
      });
    }
  }, []);

  return <div ref={editorRef}></div>
}