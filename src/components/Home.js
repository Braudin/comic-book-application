import { Col, Form, Row } from 'react-bootstrap'

export const Home = () => {
  return (
    <Row className='justify-content-center mb-3 pb-3 border-bottom'>
      <Col xs='12' md='8' lg='4' className='text-center'>
        <h1>ComicBook</h1>
        <Form.Control type='text' placeholder='Search comic' />
      </Col>
    </Row>
  )
}
