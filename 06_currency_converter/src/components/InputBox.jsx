// import React from 'react';
import { useId } from "react";
import PropTypes from "prop-types";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChnage,
  currencyOptions,
  selectCurrency,
  amountDisable,
  currencyDisable,
  className,
}) {
  const amountInputId = useId();

  // Rest of your component code...

  return (
    <div
      className={`bg-white p-3 rounded-lg text-sm flex
      ${className}`}
    >
      <div className="w-1/2">
        <label
          className="text-black/40 mb-2 inline-block"
          htmlFor={amountInputId}
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(event) =>
            onAmountChange && onAmountChange(Number(event.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(event) =>
            onCurrencyChnage && onCurrencyChnage(event.target.value)
          }
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  onCurrencyChnage: PropTypes.func.isRequired,
  currencyOptions: PropTypes.array.isRequired,
  selectCurrency: PropTypes.string.isRequired,
  amountDisable: PropTypes.bool,
  currencyDisable: PropTypes.bool,
  className: PropTypes.string,
};

export default InputBox;
