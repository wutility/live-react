import React, { useContext } from 'react';
import LiveContext from '../LiveContext';

export default function LiveError () {
  
  const { state } = useContext(LiveContext)

  return (<pre className="live-error"><code>{state.error}</code></pre>);
}