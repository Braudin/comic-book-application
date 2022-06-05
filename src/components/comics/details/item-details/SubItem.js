import { Col } from 'react-bootstrap'

export const SubItem = ({ data }) => {
  return (
    <Col md={6} lg={4} className='py-1'>
      <span>{data.name}</span>
    </Col>
  )
}
