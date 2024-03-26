import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/counter';
import React, {Fragment} from "react";
import {useState} from "react";
import Gender from "./components/gender/gender";

export const MyContext = React.createContext('Text Context');
export const NewContext = React.createContext('Context for person');
function App() {
  const [state, setState] = useState('1');
  const changeState = () =>{
    setState('4,text');
  }

  return (
    <NewContext.Provider value={'Change content gender 1111'}>
      <MyContext.Provider value={'MyContext 44545'}>
        <Fragment>
          <h1>{state}</h1>
          <button onClick={changeState}>Click here</button>
          <Counter propsChild={state} />
          <Gender />

        </Fragment>
      </MyContext.Provider>
    </NewContext.Provider>
  );
}

export default App;
