import styled from "styled-components";
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Figure from 'react-bootstrap/Figure'


export const Wrapper = styled.div`
	margin-top:0.5rem;
	padding:2rem;
	border-radius:0.5rem;
	background: #2D3B50;
	background: -webkit-linear-gradient(bottom, #2D3B50, #111C2E);
	background: -moz-linear-gradient(bottom, #2D3B50, #111C2E);
	background: linear-gradient(to top, #2D3B50, #111C2E);
	display:flex;
	justify-content: center;
`;
export const WrapperImg = styled.img`
  border-radius: 50%;
  width: 250px;
	height:250px;
  margin: 8px;
	background-color:#fafafa;
	flex-grow:0;
`;


export const WrapperInfoUser = styled.div`
	border-radius: 0.5rem;
	margin-left:2rem;
	flex-grow:2;
	color:#FFF;


  h1 {
    font-size: 56px;
    font-weight: normal;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  h3 {
    margin-right: 8px;
  }
  a {
    font-size: 18px;
		text-decoration:underline;
  }
`;

