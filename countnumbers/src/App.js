
import { useState } from 'react';

function App() {

  let [counter,setCounter] = useState(0);
  const addcount = () => {
    if (counter<20)
    {
      setCounter(counter+1);

    }
    else{
      alert("Number can't be more than 20");
    }

  }

  const reduceCount = () => {
    if(counter>0)
    {
    setCounter (counter-1);
    }
    else{
      alert("number is already zero (0)");
    }
  }

  return (
    <>
    <div style={{textAlign:'center'}}>
      <h1> Count the numbers</h1>
      <h3> Count : {counter}</h3>
      <button onClick={addcount}>Increase Count</button>
      <button onClick={reduceCount}>Decrease Count</button>
    </div>
    </>
  );
}

export default App;
