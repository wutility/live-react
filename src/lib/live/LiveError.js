import React, { useContext } from 'react';
import LiveContext from '../store/LiveContext';

export default function LiveError () {
  
  const { liveState } = useContext(LiveContext)

  return <pre className="live-error"><code>{liveState.error}</code></pre>
}