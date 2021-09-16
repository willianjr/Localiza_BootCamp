import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card } from 'react-bootstrap'
import { createMarkup } from '../../utils'
import { useHistory } from 'react-router-dom'

function Technology({ values }) {
  const history = useHistory()

  const renderImg = ({ image, description }) => (
      <Card.Img src={image.url} alt={description} width="100%" />
  )

  const openPost = (id) => {
    history.push(`/technology/${id}`)
  }

  const renderPost = (post, index) => {
    const { title, image, description, id } = post
    
    return (
      <Col md={2} key={`technology-${index}`}>
        <Card>
        {image.url && renderImg({ image, description })}
        <Card.Body>
        <article onClick={() => openPost(id)}>
           <Card.Title>
            <strong dangerouslySetInnerHTML={createMarkup(title)} />
          </Card.Title>
          <Card.Text dangerouslySetInnerHTML={createMarkup(description)} />
        </article>
        </Card.Body>
        </Card>
      </Col>
    )
  }



  return (
    <Row className='gy-3'>
      {values?.map(renderPost)}
    </Row>
  )
}

Technology.defaultProps = {
  values: []
}

Technology.propTypes = {
  values: PropTypes.array.isRequired
}


export default memo(Technology)