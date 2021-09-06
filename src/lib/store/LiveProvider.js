import React, { useState } from 'react';
import LiveContext from './LiveContext';

export default function LiveProvider ({ children, code, onError }) {
  const initState = {
    editorVal: code,
    outputVal: '',
    error: null
  };

  const [liveState, setLiveState] = useState(initState);

  return (<LiveContext.Provider value={{ liveState, setLiveState }}>
    <div className="live-react">{children}</div>
  </LiveContext.Provider>);
}
