import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ListComics } from '../components/comics/list/ListComics'
import { Home } from '../components/Home'

export const IndexRouter = () => {
  return (
    <Container className='pb-5'>
      <Home />
      <Router>
        <Routes>
          <Route path='/' element={<ListComics />} />
        </Routes>
      </Router>
    </Container>
  )
}
