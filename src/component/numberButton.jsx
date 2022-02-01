import React from "react";
import { RowBox } from "./styled";

function Button({ values, hidden, left = false,buttonClick }) {

 

  //  for example only values = [7,8,9]
	return (
		<RowBox>
			{left && hidden}
			{values.map((value, i) => {
				return (
					<div
						key={i}
						onClick={()=>buttonClick(value)}
					>
						{value}
					</div>
				);
			})}
			{!left && hidden}
		</RowBox>
	);
}

export default Button;
