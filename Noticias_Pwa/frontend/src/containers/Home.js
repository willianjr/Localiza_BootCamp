import React, { memo, useEffect, useState } from 'react'
import { Row, Col, Container, Card, Navbar } from 'react-bootstrap'

import Economy from './components/Economy'
import Technology from './components/Technology'
import World from './components/World'

import Loading from './components/loading'

import Api from '../api'
import Logo from '../images/logo.svg'

function Home() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)

  const handleNews = (articles) => {
    setLoading(false)
    setNews({
      world: articles[0]?.value.value,
      economy: articles[1]?.value.value,
      technology: articles[2]?.value.value,
    })
  }

  useEffect(() => {
    setLoading(true)
    Promise.allSettled([
      Api.getNews('world'),
      Api.getNews('economy'),
      Api.getNews('technology')
    ])
      .then(handleNews)
  }, [])

  if (loading) return <Loading>Carregando...</Loading>
  
  return (
    <Container fluid>
     <Navbar bg="dark" variant="light">
    <Container fluid>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Logo}
          width="300"
          height="80"
          className="d-inline-block align-top"
        />
    
      </Navbar.Brand>
    </Container>
  </Navbar>
     <Row className='gy-3'>
        <Col md={8}>
          <Card>
            <Card.Header>World</Card.Header>
            <Card.Body>
              <World values={news?.world} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
              <Card.Header>Economy</Card.Header>
              <Card.Body>
                <Economy values={news?.economy} />
              </Card.Body>
          </Card>
        </Col>
    
        <Col>
        <Card>
              <Card.Header>Technology</Card.Header>
              <Card.Body>
              <Technology values={news?.technology} />
              </Card.Body>
          </Card>
         
        </Col>
      </Row>
    </Container>
  )
}

export default memo(Home)