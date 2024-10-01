import React, {useId} from 'react'

//! using useId for optimization purpose

const InputBox = (
    {
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectCurrency = "usd",
        amountDisable = false,      //* not much usefull here but used in production-grade
        currencyDisable = false,
        className = "",
    }
) => {

    const amountInputId = useId() //* returns a unique id using numbers and string
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>

      <div className='w-1/2'>
        <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>
            {label}
        </label>

        <input 
        id={amountInputId}      //* binded with label
        className='outline-none w-full bg-transparent py-1.2'
        type="number"
        placeholder='Amount'
        disabled={amountDisable}
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none' value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>
            

            {currencyOptions.map((currency) => (        //* remember to use `key` in loops
                <option key={currency} value={currency}>
                    {currency}
                </option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox
