import React from "react";
import { RowBox } from "./styled";




function Button({ values, hidden, left = false }) {
	return (
		<RowBox>
			{left && hidden}
			{values.map((value, i) => {
				return <div key={i}>{value}</div>;
			})}
			{!left && hidden}
		</RowBox>
	);
}

export default Button;
