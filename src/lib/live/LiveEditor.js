import React, { useRef, useEffect, useContext } from 'react';
import LiveContext from '../store/LiveContext';

export default function LiveEditor ({ onChange }) {

  const { liveState, setLiveState } = useContext(LiveContext)
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
    fontSize: liveState.config.fontSize,
    theme: liveState.config.theme,
    mode: liveState.config.mode,
    useWorker: false,
    tabSize: 4
  }

  useEffect(() => {
    if (editorRef.current && window.ace) {

      const editor = window.ace.edit(editorRef.current);
      const { config } = liveState

      editor.setValue(liveState.editorVal, 1);
      editor.setOptions({ ...eops, ...config });

      editor.getSession().on('change', function () {
        let editorVal = editor.session.getValue();

        setLiveState({ ...liveState, editorVal })

        if (onChange) {
          onChange(editorVal)
        }
      });
    }
  }, []);

  return <div ref={editorRef}></div>
}