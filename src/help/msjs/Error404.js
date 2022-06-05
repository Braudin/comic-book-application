import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Error404 = () => (
  <Row className='g-4 list-comic'>
    <Col>
      <p className='h1 text-center pt-5'>ERROR [404]</p>
      <p className='h5 text-center'>Page not found</p>
      <p className='text-center'>
        <Button as={Link} to='/' variant='primary'>
          Go to home
        </Button>
      </p>
    </Col>
  </Row>
)
