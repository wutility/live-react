import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LiveProvider, LiveEditor, LivePreview } from '../index';
import styled from 'styled-components'
import './LiveReact.css';
import "prismjs/themes/prism-coy.css";

let codeTestPureJsx = `<button onClick={() => alert('hello') }>click</button>`;

export default { title: 'LiveReact', component: LiveEditor } as ComponentMeta<typeof LiveEditor>;

export const Single: ComponentStory<typeof LiveEditor> = () => {
  return (<>
    <h3># Pure Jsx</h3>
    <LiveProvider code={codeTestPureJsx}>
      <div className="editor">
        <LiveEditor />
        <LivePreview onTransform={(transformed) => console.log(transformed)} />
      </div>
    </LiveProvider>
  </>);
}

let codeTest = `function App() {

  // this is an external library (styled component)
  const Button = styled.button\`
    background-color: #000;
    color: #fff;
  \`;

  const [count, setCount] = React.useState(0);
  const onCount = () => setCount(count + 1);

  return <div>{count} <Button onClick={onCount}>Click me</Button></div>
}

render(<App />)`;

export const ExternalLibrary: ComponentStory<typeof LiveProvider> = () => {
  return (<>
    <h3># external library</h3>
    <LiveProvider code={codeTest} bindings={{ styled }}>
      <div className="editor">
        <LiveEditor />
        <LivePreview />
      </div>
    </LiveProvider>
  </>);
}

let codeTestFn = `() => {
  const Button = () => <button 
    onClick={()=> alert('hello') }>click
  </button>

  return <div><Button /></div>
}`

export const Functional: ComponentStory<typeof LiveProvider> = () => {
  return (<>
    <h3># functional</h3>
    <LiveProvider code={codeTestFn}>
      <div className="editor">
        <LiveEditor />
        <LivePreview />
      </div>
    </LiveProvider>
  </>);
}

let codeTestWithError = `() => {
  const [count, setCount] = React.useState(0);
  const onCount = () => setCount(count + 1);
  return (
    <div>
      {count} <button onClick={onCount}>Click me</button>
    </div
  );
}`;

export const OnlyHighlight: ComponentStory<typeof LiveProvider> = () => {
  return (<>
    <h3># syntax Highlighter with readOnly</h3>
    <LiveProvider code={codeTestWithError} onlyHighlight={true} readOnly={true}>
      <div className="editor">
        <LiveEditor />
      </div>
    </LiveProvider>
  </>)
}