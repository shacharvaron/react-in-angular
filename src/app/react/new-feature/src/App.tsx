import './App.scss';

import * as React from 'react';
import { FunctionComponent } from 'react';

import logo from './logo512.png';

export interface IComponentProps {}

export const App: FunctionComponent<IComponentProps> = (props: IComponentProps) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;