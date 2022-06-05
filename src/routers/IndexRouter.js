import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ListComics } from '../components/comics/list/ListComics'
import { ViewComic } from '../components/comics/view/ViewComic'
import { Home } from '../components/Home'
import { GenericErrors } from '../components/msjs/GenericErrors'

export const IndexRouter = () => {
  return (
    <Router>
      <Home />
      <Container fluid className='px-4 pb-5'>
        <Routes>
          <Route index element={<ListComics />} />
          <Route path='view/:id' element={<ViewComic />} />
          <Route path='error/:status/:msj' element={<GenericErrors />} />
        </Routes>
      </Container>
    </Router>
  )
}
