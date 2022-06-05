import { Button, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export const GenericErrors = () => {
  const { status, msj } = useParams()
  return (
    <Row className='g-4 list-comic'>
      <Col>
        <p className='h1 text-center pt-5'>ERROR [{status}]</p>
        <p className='h5 text-center'>{msj}</p>

        {status === '403' && (
          <p className='text-center'>
            <Button
              as={'a'}
              variant='primary'
              href='https://cors-anywhere.herokuapp.com/corsdemo'
              target='_blank'>
              Active Proxy
            </Button>
          </p>
        )}
      </Col>
    </Row>
  )
}
