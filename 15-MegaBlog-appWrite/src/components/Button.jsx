import React from 'react'

//~ 14- Button

const Button = ({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props    //* we are spreading it because like if somebody have sent placeholder which we didn't define so we directly use it in input(just as an example)
}) => {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}  {...props}>
        {children}
    </button>
  )
}

export default Button
