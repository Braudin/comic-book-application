import { Row } from 'react-bootstrap'
import { SubItem } from './SubItem'

export const ItemDetails = ({ title, data }) => {
  return (
    <Row className='characters px-3 py-3'>
      <h3>{title}</h3>
      {data.map((data) => (
        <SubItem key={data.id} data={data} />
      ))}
    </Row>
  )
}
