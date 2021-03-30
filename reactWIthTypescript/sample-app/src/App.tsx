import React from 'react';
import { TextField } from './TextField';

const App :React.FC = () =>{
  return <div>Sample
    <TextField text="Hello" person={{firstName:"Sara",lastName:"Smith"}} 
    handleChange={(e)=>alert(e.target.value)}
    />
  </div>;
}

export default App;
