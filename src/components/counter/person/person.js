import {Fragment, useContext} from "react";
import {NewContext} from "../../../App";
const Person = ({propsChild}) =>{
  const context = useContext(NewContext);

  return (
    <Fragment>
      <h1>This is person {context}</h1>
      <p>No one</p>
    </Fragment>
  )
}

export default Person;