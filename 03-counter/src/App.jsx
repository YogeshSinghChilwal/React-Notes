import { useState } from 'react'

// react controls UI updations
function App() {
  //let value = 5
  const [value, setValue] = useState(5)

  //~ 1- we created a function to increase `value` now and using it in h2, h3, p; so in JS if we have to update value in these tags so we have to use DOM for each tag which is too much  

  function addValue(){
    if(value < 20) setValue(value + 1)
    

  }
  function removeValue(){
    if(value > 0) setValue(value - 1)
    

  }

  return (
    
    <>
      <h1>React JS</h1>
      <h2>Counter value: {value}</h2>
      <h3>Value: {value}</h3>

      <br />
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
      <p>Footer: {value}</p>
    </>
  )
}

export default App
