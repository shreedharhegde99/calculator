import React, {  useState } from "react";
import Button from "./numberButton";
import { Body, ColumnBox, Display, HiddenBox,Container } from "./styled";

function Calculator() {
  const[calc,setCalc] = useState('')
  // const [result, setResult] = useState('')
  
  const ops = ['+', '-', '*', '/']
  
  const calculate = () => {
  setCalc(eval(calc).toFixed(4).toString())
}


  const updateCalc = (value) => {
    if (value === "=" && !(ops.includes(calc.slice(-1)))) {
					console.log(value);
					calculate();
				}
   
    if (value === 'AC') {
      setCalc('')
      // setResult('')
      
    }

    if (
      (ops.includes(value)) && calc === '' ||
      (ops.includes(value)) && ops.includes(calc.slice(-1))
    ) {
       
      return;
    }
    if (!(value === '=') && !(value === 'AC')) {
      setCalc(calc+value)
    }
    
  }


console.log(calc)
  

	return (
		<>
			<Body>
				<Container>
					<Display>{calc || '0' }</Display>

					<ColumnBox>
						{/* <Button
						buttonClick={updateCalc}
						values={["AC"]}
						hidden={<HiddenBox />}
					/> */}

						<Button buttonClick={updateCalc} values={["7", "8", "9", "/"]} />
						<Button buttonClick={updateCalc} values={["4", "5", "6", "*"]} />
						<Button buttonClick={updateCalc} values={["1", "2", "3", "-"]} />
						<HiddenBox></HiddenBox>
						<Button
							buttonClick={updateCalc}
							values={["AC", "0", "=", "+"]}
							left
							hidden
						/>
					</ColumnBox>
				</Container>
			</Body>
		</>
	);
}

export default Calculator;
