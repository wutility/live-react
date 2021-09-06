import React, { useContext } from 'react';
import LiveContext from '../store/LiveContext';

import Prism from 'prismjs';
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-tomorrow.css";

export default function LiveEditor () {

  const { liveState } = useContext(LiveContext)

  return <pre className="language-jsx"
    dangerouslySetInnerHTML={{
      __html: Prism && Prism.highlight
        && Prism.highlight(liveState.editorVal, Prism.languages.jsx, 'jsx')
    }}></pre>
}