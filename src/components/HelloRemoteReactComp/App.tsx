import React from 'react';
import logo from './logo.svg';
import './App.css';

interface IProps {
  onHeaderClick?: (label: string) => void;
}


const App = React.forwardRef(function App(props: IProps, ref: any) {
  React.useImperativeHandle(ref, () => ({
    sayHello() {
      alert('Hello');
    }
  }));
  return (
    <div className="App">
     I`m  remote HelloRemoteReactComp
    </div>
  );
})

export default App;
