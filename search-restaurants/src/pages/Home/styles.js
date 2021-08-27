import styled from "styled-components"
import Slider from 'react-slick';

export const Container = styled.aside`
  background-color: ${({ theme: { colors } }) => colors.backgroundClean};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
  box-shadow:3px 0px 20px -3px #000000;
  flex-grow: 0;
  z-index:9999


`
export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  border-radius:1rem;

`
export const Logo = styled.img`
  margin: 5px auto 10px;
  width:100px;
`
export const Title = styled(Text)`
  margin: 16px 0;
`
export const Carousel = styled(Slider)`
    border-bottom:1px solid ${({ theme: { colors } }) => colors.background};
    padding-bottom:1.5rem;
  .slick-slide {
    margin-right: 30px;
  }
  .slick-prev, .slick-next { display:none!important }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: flex-start;
  background-color:red;

`
export const Map = styled.div`
  background-color:red;
  flex-grow: 1;


`

export const CarouselTitle = styled.h1`
  font-family: ${({ theme: { fonts } }) => fonts.regular};
  color: ${({ theme: { colors } }) => colors.text};
  font-size:15px;
  font-weight:bold;
  line-height:20px;
  margin:10px 0px;
  text-align:center
`
export const ModalTitle = styled.p`
  margin-bottom: 10px;
  letter-spacing: 0.11px;
  font-family: ${({ theme: { fonts } }) => fonts.regular};
  color: ${({ theme: { colors } }) => colors.text};
  line-height: 29px;
  font-size: 24px;
  font-weight: bold;
`;

export const ModalContent = styled.p`
  margin-bottom: 10px;
  font-family: ${({ theme: { fonts } }) => fonts.regular};
  color: ${({ theme: { colors } }) => colors.text};
  font-weight: normal;
  line-height: 19px;
  font-size: 16px;
`;
