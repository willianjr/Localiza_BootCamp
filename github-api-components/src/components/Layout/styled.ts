import React, { ReactNode } from "react";
import styled from "styled-components";
import Container from 'react-bootstrap/Container';




export const WrapperLayout = styled.section`
  background-color:${({ theme: { colors } }) => colors.background};
	padding:20px;
	display:flex;
`;

export const Containers = styled(Container)`
  padding:20px;
`

export const Header = styled.header`
  background-color:${({ theme: { colors } }) => colors.success};
	padding:20px;
	display:flex;
`;


