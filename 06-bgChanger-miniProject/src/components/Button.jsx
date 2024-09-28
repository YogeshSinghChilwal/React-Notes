import React from 'react'

const Button = ({bgColor, setColor}) => {
  return (
   <button className='px-4 py-2 rounded-xl mr-2 text-white' onClick={() => setColor(bgColor)} style={{backgroundColor: bgColor}}>{bgColor}</button>
  )
}

export default Button
