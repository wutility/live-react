import React, { useContext } from 'react';
import LiveContext from '../store/LiveContext';

import Editor from "react-simple-code-editor";

import Prism from 'prismjs';
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-coy.css";

export default function LiveEditor ({ onChange }) {

  const { liveState, setLiveState } = useContext(LiveContext)

  const onValChange = code => {
    if (onChange) onChange(code)
    setLiveState({ ...liveState, code })
  }

  return <div className="live-editor">
    <Editor
      value={liveState.code}
      onValueChange={(code) => onValChange(code)}
      highlight={(code) => Prism.highlight(code, Prism.languages[liveState.language], liveState.language)}
    />
  </div>
}