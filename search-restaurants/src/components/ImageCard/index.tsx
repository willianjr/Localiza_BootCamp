import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {Skeleton} from '../../components'

interface CardProps {
  photo:string
  title?:string
  onClick?:()=>void

}

const Card = styled.div<CardProps>`
  display: flex;
  justify-content: center;
  flex-direction:column;
  padding: 5px;
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  margin:1px;
  cursor:pointer;
`;

const Title = styled.span`
  font-family: ${({ theme: { fonts } }) => fonts.regular};
  color: #ffffff;
  font-size: 15px;
  background-color:rgba(0,0,0,0.5);
  border-radius:0.5rem;
  padding:0.25rem;
  text-transform:capitalize;

`;


const ImageCard = ({photo, title, onClick}:CardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImageLoaded(true);
  }, [photo]);

  return (
    <>
      {imageLoaded ? (
        <Card photo={photo} onClick={onClick} >
          <Title >{title}</Title>
        </Card>
      ) : (
        <Skeleton width="90px" height="90px" />
      )}
    </>
  );
};

export default ImageCard;
