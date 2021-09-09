import React, { useState } from 'react';
import LiveContext from './LiveContext';

export default function LiveProvider ({ children, code, bindings }) {
  
  const initState = {
    language: 'jsx',
    code,
    outputVal: '',
    error: null,
    bindings: bindings || {}
  };

  const [liveState, setLiveState] = useState(initState);

  return (<LiveContext.Provider value={{ liveState, setLiveState }}>
    <div className="live-react">{children}</div>
  </LiveContext.Provider>);
}
