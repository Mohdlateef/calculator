import React, { useState } from "react";

const Calcualtor = () => {
  let [number1, setNumber1] = useState("");
  let [number2, setNumber2] = useState("");
  let [Output, setOutput] = useState("");
  function num1(e) {
    let number1 = +e.target.value;
    setNumber1(number1);
    // console.log(number1);
  }
  function num2(e) {
    let number2 = +e.target.value;
    setNumber2(number2);
  }
  function cal(event) {
    event.preventDefault();
    let opration = event.target.innerText;
    if (number1 !== "" && number2 !== "") {
      console.log("test1");
      if (opration == "+") {
        let sum = number1 + number2;
        setOutput(sum);
      } else if (opration == "-") {
        let sum = number1 - number2;
        setOutput(sum);
      } else if (opration == "*") {
        let sum = number1 * number2;
        setOutput(sum);
      } else if (opration == "/") {
        let sum = number1 / number2;
        setOutput(sum);
      }
    } else {
      setOutput("Error");
    }
  }

  return (
    <div className="calculator">
      <div>Calcualtor</div>
      <form>
        <input type="number" onKeyUp={num1}></input>
        <input type="number" onKeyUp={num2}></input>
       <div className="btns"><button onClick={cal}>+</button>
        <button onClick={cal}>-</button>
        <button onClick={cal}>*</button>
        <button onClick={cal}>/</button>
      </div>
      </form>
      <div>{Output}</div>
    </div>
  );
};

export default Calcualtor;
