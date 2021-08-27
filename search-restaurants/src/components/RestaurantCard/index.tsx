import React, { useState } from 'react';
import ReactStars from 'react-star-rating-component';
import {restaurantI} from '../../redux/modules/restaurants';
import { Restaurant, RestaurantInfo, Content, RestaurantPhoto } from './styles';
import Text from '../Text';
import Skeleton from '../Skeleton';


interface RestaurantCardProps {
  restaurant:restaurantI
  onClick:()=>void

}

const ResturantCard = ({ restaurant, onClick }:RestaurantCardProps):JSX.Element => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (

    <Restaurant onClick={onClick}>
      <RestaurantPhoto
        imageLoaded={imageLoaded}
        onLoad={() => setImageLoaded(true)}
        src={restaurant.photos ? `${restaurant.photos[0].getUrl()}` : restaurant.icon}
        alt="foto do restaurante"
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}

      <RestaurantInfo>
        <Text size="large">{restaurant.name}</Text>
        <ReactStars name="star" starCount={5} value={restaurant.rating} editing={false}  starColor="#e7711c" />
        <Content size="medium">{restaurant.formatted_address || restaurant.vicinity}</Content>
      </RestaurantInfo>


    </Restaurant>
  );
};

export default ResturantCard;
