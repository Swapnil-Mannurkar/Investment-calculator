import React, { useRef } from "react";

const Form = (props) => {
  let currentSavingInput = useRef();
  let yearlySavingInput = useRef();
  let expectIntrestInput = useRef();
  let investmentDurationInput = useRef();

  const clickSubmitHandler = (event) => {
    event.preventDefault();

    const userInput = {
      "current-savings": currentSavingInput.current.value,
      "yearly-contribution": yearlySavingInput.current.value,
      "expected-return": expectIntrestInput.current.value,
      duration: investmentDurationInput.current.value,
    };

    const initalInvestment = currentSavingInput.current.value;

    props.onCalculate(userInput, initalInvestment);
  };

  const resetHandler = () => {
    currentSavingInput = " ";
    yearlySavingInput = " ";
    expectIntrestInput = " ";
    investmentDurationInput = " ";
  };

  return (
    <form className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" ref={currentSavingInput} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            ref={yearlySavingInput}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" ref={expectIntrestInput} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" ref={investmentDurationInput} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button" onClick={clickSubmitHandler}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
