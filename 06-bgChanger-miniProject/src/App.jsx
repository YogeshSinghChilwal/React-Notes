import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [color, setColor] = useState('brown')
  
  const colorArray = ['red', 'green', 'blue', 'black', 'pink', 'olive', 'purple', 'Orange', 'Cyan', 'Magenta', 'Lime', 'Indigo', 'Coral', 'Turquoise','Crimson', 'Chocolate', 'Salmon']

  function ColorFun({colorArr}){
    return (<>
    {colorArr.map((col) => (
      <Button bgColor={col} setColor={setColor} />
    ))}
  </>)
  }
  
  return (
    <>
      <div className='w-full h-screen duration-200 relative ' style={{backgroundColor: color}}>
        <div className='bg-white w-fit h-fit p-5 rounded-lg absolute bottom-32 left-4'>
          <ColorFun colorArr= {colorArray}/>
        </div>
      </div>
    </>
  )
}

export default App
