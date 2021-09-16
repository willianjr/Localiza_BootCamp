import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card } from 'react-bootstrap'
import { createMarkup } from '../../utils'
import { useHistory } from 'react-router-dom'

function World({ values }) {
  const history = useHistory()

  const renderImg = ({ image, description }) => (
    <div>
      <Card.Img src={image.url} alt={description} width="100%" />
    </div>
  )

  const openPost = (id) => {
    history.push(`/world/${id}`)
  }

  const renderPost = (post, index) => {
    const { title, image, description, id } = post
    const isFirst = index === 0 
    const spanValue = isFirst ? 12 : 6
    
    return (
      <Col md={spanValue} key={`World-${index}`}>
          <Card>
          {isFirst && renderImg({ image, description })}
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
    <Row className='gy-2'>
      {values?.map(renderPost)}
    </Row>
  )
}

World.defaultProps = {
  values: []
}

World.propTypes = {
  values: PropTypes.array.isRequired
}


export default memo(World)