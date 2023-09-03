import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";
import Table from "./components/Table";

function App() {
  const [result, setResult] = useState();
  const [initalInvestment, setinitalInvestment] = useState();
  const yearlyData = [];


  const calculateHandler = (userInput, initalInvestment) => {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setResult(yearlyData);
    setinitalInvestment(initalInvestment);
  };

  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler} />
      {!result && (
        <p style={{ textAlign: "center" }}>No Investment calculated yet!</p>
      )}
      {result && <Table results={result} initalInvestment={initalInvestment} />}
    </div>
  );
}

export default App;
