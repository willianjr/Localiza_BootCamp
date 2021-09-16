import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card } from 'react-bootstrap'
import { createMarkup } from '../../utils'
import { useHistory } from 'react-router-dom'

function Economy({ values }) {
  const history = useHistory()

  const renderImg = ({ image, description }) =>
    <Card.Img variant="top" src={image.url} alt={description}/>

  const renderDescription = (description) => <Card.Text dangerouslySetInnerHTML={createMarkup(description)} />

  const openPost = (id) => {
    history.push(`/economy/${id}`)
  }

  const renderPost = (post, index) => {
    const { title, image, description, id } = post
    return (
      <Col>
        <Card md={6} key={`post-${index}`}>
        {image?.url ? renderImg({ image, description }) : ''}
        <Card.Body>
        <article onClick={() => openPost(id)}>
          <Card.Title>
            <strong dangerouslySetInnerHTML={createMarkup(title)} />
          </Card.Title>
          {image?.url ? '' : renderDescription(description)}
        </article>
        </Card.Body>
        </Card>
      </Col>
    )
  }

  return (
    <Row className='gy-3' >
      {values?.map(renderPost)}
    </Row>
  )
}

Economy.defaultProps = {
  values: []
}

Economy.propTypes = {
  values: PropTypes.array.isRequired
}


export default memo(Economy)