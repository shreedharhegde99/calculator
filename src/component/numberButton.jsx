import React, { RowBox } from "react";

import styled from "styled-components";

const RowBox = styled.div`
	box-sizing: border-box;
	width: 90%;
	margin: auto;
	display: flex;
	justify-content: space-around;
	align-content: center;

	& > div {
		box-sizing: border-box;
		margin: 5px;
		width: 120%;
		height: 120%;
		border-radius: 10px;

		display: flex;
		align-items: center;
		align-self: center;
		justify-content: center;
		cursor: pointer;
		transition: ease-in-out 0.4s;
	}
	& > div:hover {
		color: white;
		background: rgba(125, 125, 235, 0.534);
		box-shadow: 0 0 9px 0 black;
	}
`;

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
