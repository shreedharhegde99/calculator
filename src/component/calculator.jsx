import React, { useState } from "react";
import styled from "styled-components";
import Button from "./numberButton";
import { Body, ColumnBox, Display, HiddenBox } from "./styled";


function Calculator() {
	const [input, setInput] = useState("");
	return (
		<>
			<Body>
				<Display>0</Display>

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
