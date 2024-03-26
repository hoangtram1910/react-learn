import { useContext, useState } from 'react';
import {MyContext} from '../../App';
const Gender = () =>{
  const [state, setState] = useState('men');
  const context = useContext(MyContext);
  console.log(context);

  return (<div>Gender: {context}</div>)

}

export default Gender;