import React from 'react';
import { Counter } from './Counter';
import { TextField } from './TextField';

const App :React.FC = () =>{
  return <div>Sample
    <TextField text="Hello" person={{firstName:"Sara",lastName:"Smith"}} 
    handleChange={(e)=>alert(e.target.value)}
    />
    <Counter>
      {({count,setCount}) =>(<div>
        {count}
        <button onClick={()=>setCount(count+1)} > + </button>
        </div>)}
    </Counter>
  </div>;
}

export default App;
