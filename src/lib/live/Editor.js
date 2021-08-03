import React, { useRef, useEffect, useContext } from 'react';
import LiveContext from '../LiveContext';

const eoptions = {
  enableBasicAutocompletion: true,
  enableSnippets: false,
  enableLiveAutocompletion: true,
  highlightActiveLine: true,
  wrapBehavioursEnabled: true,
  showPrintMargin: true,
  showGutter: true,
  highlightGutterLine: true,
  fontSize: 16,
  theme: 'ace/theme/monokai',
  useWorker: false,
  tabSize: 4,
  mode: `ace/mode/jsx`
}

export default function Editor () {

  const { state, setState } = useContext(LiveContext)
  const editorRef = useRef(null);

  useEffect(() => {
    let element = editorRef.current;

    if (element && window.ace) {

      const editor = window.ace.edit(element);

      editor.setValue(state.editorVal, 1);
      editor.setOptions(eoptions);

      editor.getSession().on('change', function () {
        let editorVal = editor.session.getValue();
        setState({ ...state, editorVal })
      });
    }
  }, []);

  return <div ref={editorRef}></div>
}