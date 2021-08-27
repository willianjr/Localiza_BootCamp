import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../redux/store';
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import {Wrapper, Container, Search, Logo, Carousel,CarouselTitle, ModalTitle, ModalContent } from './styles'
import {Card, RestaurantCard, Modal, Map, Loader, Skeleton} from '../../components'
import logo from '../../assets/logo.svg'

/*IMAGENS*/
import restaurante from '../../assets/restaurante.jpg'


const Home = () => {

  const [inputValue, setInputValue] = useState('')
  const [modalOpened, setModalOpened] = useState(true)
  const [query, setQuery] = useState('')
  const [placeId, setPlaceId] = useState('')
  const { restaurants,restaurantSelected }:any = useSelector<ApplicationState>(state => state.restaurants)

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  }

  const  handleKeyPress = (e:React.KeyboardEvent)=>{
    if(e.key==='Enter'){
      setQuery(inputValue)
    }
  }


  const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputValue(e.target.value)
  }
  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(false);
  }

  return(
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do sistema" />
          <TextField
              label='Pesquisar Restaurantes'
              outlined
              trailingIcon={<MaterialIcon role="button" icon="search"/>}
            ><Input type="text" value={inputValue} onKeyPress={handleKeyPress} onChange={handleChange} />
            </TextField>
            {restaurants.length > 0 ? (
            <>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
          {restaurants.map((restaurant) => (
                  <Card
                    key={restaurant.place_id}
                    photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                    title={restaurant.name}
                    onClick={() => handleOpenModal(restaurant.place_id)}
                  />
                ))}

          </Carousel>
          </>
          ) : (
            <Loader />
          )}
          </Search>
          {restaurants.map((restaurant)=>(
          <RestaurantCard
            key={restaurant.place_id}
            restaurant={restaurant}
            onClick={() => handleOpenModal(restaurant.place_id)}
          />

          ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
      {restaurantSelected ? (
          <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
            <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
            <ModalContent>
              {restaurantSelected?.opening_hours?.open_now
                ? 'Aberto agora :-)'
                : 'Fechado neste momento :-('}
            </ModalContent>
          </>
        ) : (
          <>
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
          </>
        )}
      </Modal>
    </Wrapper>)}

export default Home
