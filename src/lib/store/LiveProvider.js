import React, { useState } from 'react';
import LiveContext from './LiveContext';

export default function LiveProvider ({ children, code, config }) {

  const initState = {
    editorVal: code,
    outputVal: '',
    error: null,
    config: {
      fontSize: 16,
      mode: 'ace/mode/jsx',
      theme: 'ace/theme/monokai',
      ...config
    }
  };

  const [liveState, setLiveState] = useState(initState);

  return (<LiveContext.Provider value={{ liveState, setLiveState }}>
    <div className="live-react">{children}</div>
  </LiveContext.Provider>);
}
