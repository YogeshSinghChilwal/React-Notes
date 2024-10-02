import { useEffect, useState } from 'react'
import Input from './components/Input'
import useApi from './hooks/useApi'


function App() {
  const [countryCode, setCountryCode] = useState('usd')
  const [currencyInput, setCurrencyInput] = useState(0)
  const [currencyCode, setCurrencyCode] = useState('usd')

  const [amount, setAmount] = useState(0)

  const currencyInfo = useApi(countryCode)
  const currency = Object.keys(currencyInfo)

  console.log(currencyInput, currencyCode, countryCode);

  function swap(){
    const temp = currencyCode
    setCountryCode(currencyCode)
    setCurrencyCode(temp)

  }


  return (
    <>
      
      <div className='w-screen h-screen bg-slate-800 flex justify-center items-center '>
      
        <div className='bg-white p-5 w-fit h-fit rounded-md bg-opacity-45 flex items-center flex-col'>
        <h1 className='font-medium bg-red-600 py-2 px-4 rounded-lg mb-4'>Currency Converter</h1>
          <form className='flex items-center flex-col' onSubmit={(e) => {e.preventDefault(); setAmount(currencyInput * currencyInfo[currencyCode])}}>

          <Input
          label='Form'
          currency={currency}
          disable = {false}
          setCurrencyInput = {setCurrencyInput}
          setCurrencyC = {setCountryCode}
          />
          <div>
            <button type='button' className='font-medium bg-red-600 py-2 px-4 rounded-lg my-5 hover:bg-red-700' onClick={swap}>SWAP</button>
          </div>
          <Input
            label='To'
            currency={currency}
          disable={true}
          setCurrencyC = {setCurrencyCode}
          valueTo={amount}
          />
          <div>
            <button type='submit' className='font-medium bg-red-600 py-2 px-4 rounded-lg mt-5  hover:bg-red-700' >Convert {countryCode} to {currencyCode}</button>
          </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
