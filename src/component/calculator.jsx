import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import Button from "./numberButton";
import { Body, ColumnBox, Display, HiddenBox } from "./styled";

function Calculator() {
	const [input, setInput] = useState("0");

	const addToInput = (value) => {
		// console.log(typeof (value));

		if (isNaN(value)) {
			// console.log(value)
			// setInput((prev) => prev + value);
			switch (value) {
				case "+":
					console.log("addition");
					break;

				case "-":
					setInput((prev) => prev + value);
					console.log("subscription");
					break;

				case "*":
					setInput((prev) => prev + value);
					console.log("multiplication");
					break;

				case "/":
					setInput((prev) => prev + value);
					console.log("division");
					break;

				case "=":
					console.log(value);
					setInput((prev) => prev + value);
          break;
        
				case "AC":
					setInput("0");

				default:
					return null;
			}
		} else {
			if (input == "0") {
				setInput(value);
			} else {
				value = value.toString();
				console.log(value);

				setInput((prev) => prev + value);
			}
		}
	};

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

					<Button buttonClick={addToInput} values={[7, 8, 9, "/"]} />
					<Button buttonClick={addToInput} values={[4, 5, 6, "*"]} />
					<Button buttonClick={addToInput} values={[1, 2, 3, "-"]} />
					<HiddenBox></HiddenBox>
					<Button
						buttonClick={addToInput}
						values={[0, "=", "+"]}
						left
						hidden={<HiddenBox />}
					/>
				</ColumnBox>
			</Body>
		</>
	);
}

export default Calculator;
