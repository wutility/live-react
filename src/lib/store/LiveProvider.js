import React, { useState } from 'react';
import LiveContext from './LiveContext';

export default function LiveProvider ({ children, code, externals }) {

  const initExternals = [{
    name: 'React',
    lib: React
  }];

  const initState = {
    language:'jsx',
    editorVal: code,
    outputVal: '',
    error: null,
    externals: externals
      ? [...initExternals, ...externals]
      : initExternals
  };

  const [liveState, setLiveState] = useState(initState);

  return (<LiveContext.Provider value={{ liveState, setLiveState }}>
    <div className="live-react">{children}</div>
  </LiveContext.Provider>);
}
