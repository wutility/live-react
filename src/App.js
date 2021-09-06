import Functional from './examples/Functional.js';
import PureJsx from './examples/PureJsx.js';
import WithError from './examples/WithError.js';
import ExternalLibrary from './examples/ExternalLibrary.js';

export default function App () {
  return (<>
    <main>
      <h1>Live Reacto</h1>
      <p className="mt-0 txt-center">A Simple and flexible playground for live editing React code</p>

      <PureJsx />
      <Functional />
      <ExternalLibrary />
      <WithError />
    </main>

    <footer>
      <a href="https://github.com/wutility/live-react">Repository</a>
    </footer>
  </>);
}
