import React,{useId} from "react";

//input box will take  parameters first is for label like usd or inr
//second is for custom css from user
//for better performance and optimization in loops we need to pass key

//we can make or optimized it in label using hook useId
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

  //we got unique value for binding
  const amountInputId = useId();


  return (
    <div className={`bg-slate-50 p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">{label}</label>
        <input
        id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-300 
        cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency)=>(
            <option key={amountInputId} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
