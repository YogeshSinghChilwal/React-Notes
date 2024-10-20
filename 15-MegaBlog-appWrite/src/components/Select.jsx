import React, {useId} from 'react'

//~ 16- Select with options

const Select = ({
    option,
    label,
    className = '',
    ...props
}, ref) => {
    const id = useId()
  return (
    <div className='w-full'> 
      {label && <label htmlFor={id} className=''> </label>}
      <select  id={id} {...props} ref={ref} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
            {/* //^ always options will be available in array and loop them optionally */}
            {option?.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
      </select>
    </div> 
  )
}

export default React.forwardRef(Select)
