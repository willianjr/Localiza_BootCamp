import styled from "styled-components";
import { Card  } from "react-bootstrap";


export const Wrapper = styled(Card)`
  padding: 8px;
  border-radius: 8px;
  margin: 16px 16px;
  width: 350px;
  height: 150px;
  align-content: center;
	h3{
		font-size: 18px;
  	font-weight: bold;
		background-color:#ededed;
  }
	h2{
		font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #2d3748;
	}
	a{
		font-size: 16px;
		font-weight: bold;
		margin: 8px 0;
		color: #3182ce;
		text-align:center;
	}

`;

