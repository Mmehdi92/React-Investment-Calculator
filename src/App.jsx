import { useState } from "react"
import Header from "./component/Header"
import UserInPut from "./component/UserInput"
import ResultTable from "./component/ResultTable"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 1
  })

  const inputIsValid =  userInput.duration >= 1

  function handleChangeInvestment(inputIdentifier, newValue) {


    setUserInput(prevUserInput => {
      let updatedUserInput = {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
      return updatedUserInput
    })
  }

  
  return (
    <>
      <Header />
      <UserInPut {...userInput} onChangeInvestment={handleChangeInvestment} />
      {!inputIsValid && <p className="center">Please enter a duration greater then  0</p>}
     {inputIsValid && <ResultTable input={userInput} />}
    </>

  )
}

export default App
