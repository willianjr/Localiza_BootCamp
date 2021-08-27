export const Types = {
  SET_RESTAURANTS: 'restaurants/SET_RESTAURANTS',
  SET_RESTAURANT: 'restaurants/SET_RESTAURANT',
};


const initialState = {
  restaurants: [],
  restaurantSelected: null,
}

interface photo{

    height: number
    html_attributions: string[]
    width: number
    getUrl:()=>void
}
export interface restaurantI{
  business_status: string
  geometry: {
      location: {
          lat: number
          lng: number
      },
      viewport: {
          south: number
          west: number
          north: number
          east: number
      }
  },
  icon: string
  icon_background_color: string
  icon_mask_base_uri: string
  name: string
  permanently_closed:boolean
  photos: photo[]
  place_id: string
  plus_code: {
      compound_code: string
      global_code: string
    }
  price_level: number
  rating: number
  reference: string
  scope: string
  types: string[]
  user_ratings_total: number
  vicinity: string
  formatted_address:string
  html_attributions: string[]
}

export interface RestaurantState {
  restaurants: restaurantI[]
  restaurantSelected:restaurantI
}

export default function reducer<RestaurantState>(state = initialState, action) {
  switch (action.type) {
    case Types.SET_RESTAURANTS:
      return { ...state, restaurants: action.payload };
    case Types.SET_RESTAURANT:
      return { ...state, restaurantSelected: action.payload };
    default:
      return state;
  }
}

export function setRestaurants(restaurants) {
  return {
    type: Types.SET_RESTAURANTS,
    payload: restaurants,
  };
}

export function setRestaurant(restaurant) {
  return {
    type: Types.SET_RESTAURANT,
    payload: restaurant,
  };
}
