import styled from "styled-components";
import Card from 'react-bootstrap/Card'
import Figure from 'react-bootstrap/Figure'
import Row from 'react-bootstrap/Row'

export const Wrapper = styled(Card)`
	margin-top:1.5rem;
	display:flex!important;
	flex-direction:row;
	align-content:center;
	justify-content:center;
	background-color:#cbcbcb;
	padding:1rem;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
	flex-grow:2;
  margin-left: 8px;
  height: 200px;
	box-shadow:3px 0px 20px -3px #000000;
  h1 {
    font-size: 32px;
    font-weight: bold;
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
    color: blue;
    font-weight: bold;
  }
`;

export const WrapperImg = styled.img`
  border-radius: 50%;
  width: 250px;
	height:250px;
  margin: 8px;
	flex-grow:0;
	display:flex;
`;
