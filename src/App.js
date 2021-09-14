import Functional from './examples/Functional.js';
import PureJsx from './examples/PureJsx.js';
import OnlyHighlight from './examples/OnlyHighlight.js';
import ExternalLibrary from './examples/ExternalLibrary.js';

import "prismjs/themes/prism-coy.css";

export default function App () {
  return (<>
    <header>
      <h1>Live Reacto</h1>
      <p className="mt-0 txt-center">A Simple and flexible playground for live editing React code</p>

      <pre>Yarn add live-reacto</pre>

      <div className="d-flex justify-center mb-2">
        <img src="https://badgen.net/bundlephobia/minzip/live-reacto" alt="live react" />
        <img className="ml-1 mr-1" src="https://badgen.net/npm/license/live-reacto" alt="live react" />
        <img src="https://badgen.net/bundlephobia/dependency-count/live-reacto" alt="live react" />
        <img className="ml-1 mr-1" src="https://badgen.net/npm/v/live-reacto" alt="live react" />
        <img src="https://badgen.net/npm/dt/live-reacto" alt="live react" />
      </div>

      <div className="d-flex justify-center">
        <a className="btn" href="https://github.com/wutility/live-react#readme" rel="noreferrer" target="_blank">readme</a>
        <a className="btn ml-1 mr-1" href="https://codesandbox.io/s/live-react-qhthu" rel="noreferrer" target="_blank">codesandbox</a>
        <a className="btn" href="https://www.npmjs.com/package/live-reacto" rel="noreferrer" target="_blank">npm</a>
      </div>
    </header>

    <main className="grid-2">
      <div><PureJsx /></div>
      <div><Functional /></div>
      <div><ExternalLibrary /></div>
      <div><OnlyHighlight /></div>
    </main>

    <footer>
      <a href="https://github.com/wutility/live-react">Created with love ❤️ by Haikel Fazzani</a>
    </footer>
  </>);
}
