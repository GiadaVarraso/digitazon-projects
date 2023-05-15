import logo from './logo.svg';
import './App.css';
import { Fetch } from './components/Fetch';
import {Imput} from './components/Hooks'
import {ImputUseEffect} from './components/UseEffectEs'
import Chat from './components/Chat'
import RedImput from './components/RedInput'
import Todo from './components/TodoList2'
import AbstractFetch from './components/AbstractFetch'
import ColumnStore from './components/ColumnStore'
import RuotaDellaFortuna from './components/RuotaDellaFortuna' 

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Fetch/>  */}
      {/* <Imput/> */}
      {/* <ImputUseEffect/> */}
      {/* <Chat/> */}
      {/* <RedImput /> */}
      {/* <Todo/> */}
      {/* <AbstractFetch/> */}
      {/* <ColumnStore/> */}
      <RuotaDellaFortuna/>
    </div>
  );
}

export default App;
