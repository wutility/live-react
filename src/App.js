import Functional from './examples/Functional.js';
import PureJsx from './examples/PureJsx.js';
import OnlyHighlight from './examples/OnlyHighlight.js';
import ExternalLibrary from './examples/ExternalLibrary.js';

export default function App () {
  return (<>

    <header>
      <h1>Live Reacto</h1>
      <p className="mt-0 txt-center">A Simple and flexible playground for live editing React code</p>
      <a className="btn" href="https://github.com/wutility/live-react#readme">Getting started</a>
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
