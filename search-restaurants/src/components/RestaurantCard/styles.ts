import React from 'react';
import styled from 'styled-components'
import Text from '../Text'

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background-color: #ffffff;
  border-left: 5px solid transparent;
  :hover {
    background-color: #00000021;
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme: { fonts } }) => fonts.regular};
  color: ${({ theme: { colors } }) => colors.text};
  margin-left:5px;

`
interface PhotoProps {
  imageLoaded:boolean

}

export const RestaurantPhoto = styled.img<PhotoProps>`
  border-radius: 6px;
  width: 100px;
  height: 100px;
  object-fit: cover;
  display: ${({imageLoaded}) => (imageLoaded ? 'block' : 'none')};
`

export const Content = styled(Text)`
  margin-top: 5px;
  font-size:13px;
  line-height:12px;
`
