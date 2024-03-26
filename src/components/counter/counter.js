import {MyContext} from "../../App";
import {Fragment, useContext} from "react";
import Person from './person/person'

const Counter = ({propsChild}) =>{
  const context = useContext(MyContext);

  return (<Fragment>
      <h1>Hihi ({propsChild}) </h1>
      <p>Counter: {context}</p>
      <Person propsChild={propsChild}/>
    </Fragment>
  )
}

export default Counter;