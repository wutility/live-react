import React, { useContext } from 'react';
import LiveContext from '../LiveContext';

export default function ErrorPreview () {
  const { state } = useContext(LiveContext)

  return (<pre><code>{state.error}</code></pre>);
}