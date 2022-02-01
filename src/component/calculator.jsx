import React, { useState } from "react";
import Button from "./numberButton";
import { Body, ColumnBox, Display, HiddenBox } from "./styled";


function Calculator() {
	const [input, setInput] = useState('0');
	return (
		<>
			<Body>
				<Display>{input}</Display>

				<ColumnBox>
					<Button values={["AC", "+/-", "%"]} hidden={<HiddenBox />} />

					<Button values={[7, 8, 9, "/"]} />
					<Button values={[4, 5, 6, "*"]} />
					<Button values={[1, 2, 3, "-"]} />
					<HiddenBox></HiddenBox>
					<Button values={[0, "=", "+"]} left hidden={<HiddenBox />} />
				</ColumnBox>
			</Body>
		</>
	);
}

export default Calculator;
