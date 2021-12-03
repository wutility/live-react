import React, { useContext } from 'react';
import LiveContext from '../store/LiveContext';
import Editor from "react-simple-code-editor";
import Prism from 'prismjs';
import "prismjs/components/prism-jsx";

export default function LiveEditor({ onChange, style = {} }: any) {

  const { liveState, setLiveState } = useContext(LiveContext)

  const onValChange = (code: any) => {
    if (onChange) onChange(code)
    setLiveState({ ...liveState, code })
  }

  return <div className="live-editor">
    <Editor
      readOnly={liveState.readOnly}
      value={liveState.code}
      onValueChange={(code) => onValChange(code)}
      padding={10}
      style={style}
      highlight={(code) => Prism.highlight(
        code,
        Prism.languages[liveState.language],
        liveState.language
      )}
    />
  </div>
}