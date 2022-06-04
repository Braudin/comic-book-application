import { Col, Row } from 'react-bootstrap'
import { ItemListComic } from './ItemListComics'

export const ListComics = () => {
  return (
    <Row xs={1} md={3} lg={5} className='g-4'>
      {Array.from({ length: 10 }).map((_, idx) => (
        <Col key={idx} className='overflow-hidden'>
          <ItemListComic />
        </Col>
      ))}
    </Row>
  )
}
