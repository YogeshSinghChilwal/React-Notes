import React, {useId} from 'react'

const Input = (
    {
        label ,
        currency = [],
        disable = true,
        setCurrencyC,
        setCurrencyInput,
        valueTo,
        
    }
) => {
    const userId = useId()
  return (
    <div className='flex gap-5 bg-slate-100 p-3 rounded-md'>
     <div className='flex flex-col gap-2'>
        <label htmlFor={userId}>{label}</label>
        <input type="number" id={userId} placeholder='Amount' className='outline-none border-none bg-transparent' value={ valueTo}  disabled={disable} onChange={(e) => setCurrencyInput(e.target.value)}/>
     </div>

      <div className='flex flex-col gap-2'>
        <h3>Currency type</h3>
        <select className='outline-none border-none bg-transparent cursor-pointer' onChange={(e) => setCurrencyC && setCurrencyC(e.target.value)} >
            {currency.map((cu) => (
                <option key={cu} value={cu}>{cu}</option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default Input
