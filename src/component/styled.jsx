import styled  from "styled-components";

const Body = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	// border: solid red 1vw;
	height: 100vh;
	box-sizing: border-box;
	// overflow: hidden;
  `;
  
  const Container = styled.div`
		// border:solid 1px gray;
		border-radius: 10px;
		box-shadow: 0 0 35px 0 #2d48c2;
	`;
  const Display = styled.div`
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		width: clamp(250px, 250px, 350px);
		height: 75px;
		justify-content: flex-end;
		font-weight: bold;
		// border: solid gray 1px;
		border-radius: 10px 10px 0px 0px;
		background: rgba(51, 54, 56, 0.849);
		color: white;
		font-size: 1.5rem;
		padding: 1.5rem 1rem;
		overflow: auto;
	`;
  

const ColumnBox = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	// border: solid gray 1px;
	border-radius: 0 0 10px 10px;
	width: clamp(250px, 250px, 350px);
	height: clamp(300px, 350px, 450px);
	padding: 0.5rem;
	font-size: 1.5rem;
	background: rgba(135, 186, 216, 0.699);
	// box-shadow: 0 2px 50px 0 black, 0 0 10px red;
`;


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
	& > div::selection {
		color: white;
		font-weight: bold;

		background: rgba(125, 125, 235, 0.534);
		box-shadow: 0 0 9px 0 black;
	}
`;

const HiddenBox = styled.div`
	visibility: hidden;
`;


export { Body, ColumnBox, RowBox, Display, HiddenBox, Container };