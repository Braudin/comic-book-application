import { Row, Spinner } from 'react-bootstrap'

export const Loading = () => {
  return (
    <Row className='d-flex justify-content-center'>
      <Spinner animation='border' />
    </Row>
  )
}
