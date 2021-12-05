import React, { useState } from 'react';
import LiveContext from './LiveContext';

export default function LiveProvider ({ children, code, bindings, onlyHighlight, readOnly }:any) {
  const initState = {
    language: 'jsx',
    code: code || '',
    error: null,
    bindings: bindings || {},
    onlyHighlight: onlyHighlight || false,
    readOnly: readOnly || false
  };

  const [liveState, setLiveState] = useState<any>(initState);

  return (<LiveContext.Provider value={{ liveState, setLiveState }}>
    <div className="live-react">{children}</div>
  </LiveContext.Provider>);
}
