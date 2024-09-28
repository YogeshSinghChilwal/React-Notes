import { useState } from 'react'
import Card from './components/Card'


function App() {
  

  return (
    <div className='flex justify-center flex-col items-center h-[100vh] gap-5 bg-slate-600 '>
      <h1 className='rounded-xl bg-green-400 text-black p-2.5 from-neutral-600 text-4xl'>Hello</h1>
      <Card username={"Sara"} btnText={"Click me"}/>
      <Card username={"Lara"} btnText={"Please Click me"}/>
    </div>
  )
}

export default App
