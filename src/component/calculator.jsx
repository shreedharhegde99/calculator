import React, { useEffect, useState } from "react";
import Button from "./numberButton";
import { Body, ColumnBox, Display, HiddenBox } from "./styled";

function Calculator() {
	const [input, setInput] = useState("0");

  const addToInput = (value) => {
    // console.log(!isNaN(value),value)
    if (!isNaN(value)) {
      // console.log(input,'  ',value)
      if (input === '0') {
        console.log('input is 0',input,value)
            // console.log('input 0',value)
            setInput(value)
          }
      else {
            console.log(input,'  ', value);
        
            setInput(input+value )
          }
          
      }
      
      
      else {
        return  
      }
    }

  



  const keyInput = (e) => {
    // console.log(e)
    
    addToInput(e.key)
  }

  useEffect(() => {
     window.addEventListener('keyup', keyInput)
  },[])
    

		
// console.log(input)
	return (
		<>
			<Body>
				<Display>{input}</Display>

				<ColumnBox>
					<Button
						buttonClick={addToInput}
						values={["AC", "+/-", "%"]}
						hidden={<HiddenBox />}
					/>

					<Button buttonClick={addToInput} values={['7','8', '9', "/"]} />
					<Button buttonClick={addToInput} values={['4', '5', '6', "*"]} />
					<Button buttonClick={addToInput} values={['1', '2', '3', "-"]} />
					<HiddenBox></HiddenBox>
					<Button
						buttonClick={addToInput}
						values={['0', "=", "+"]}
						left
						hidden={<HiddenBox />}
					/>
				</ColumnBox>
			</Body>
		</>
	);
}

export default Calculator;
