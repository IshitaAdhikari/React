import React, {useId} from 'react'

//whenever we apply any loop in jsx we have to pass key with it
//for the performance to repeat the element 

//useId- for generating unique Id's that can be passed to accessibility attributes

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId()
 

  return (
    //we used backticks here because we are taking css from user
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
      <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block"> 
      {label} 
      </label>
      
      <input
      id={amountInputId}
      className="outline-none w-full bg-transparent py-1.5"
      type="number"
      placeholder="Amount"
      disabled = {amountDisable}
      value={amount}
      // we used && to check if it exists or not
      onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
       />
       </div>
       <div className="w-1/2 flex flex-wrap justify-end text-right">
       <p className="text-black/40 mb-2 w-full">Currency Type</p>
       <select
       className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer 
       outline-none"
       value={selectCurrency}
       onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
       disabled = {currencyDisable}>

      {currencyOptions.map((currency) => (
        <option key = {currency}
         value= {currency}>
         {currency}
          </option>
       ))}



       </select>
       </div>
       </div>
  );
}

export default InputBox;
