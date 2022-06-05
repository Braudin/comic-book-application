import { Route, Routes } from 'react-router-dom'
import { IndexRouter } from './routers/IndexRouter'

function App() {
  return (
    <Routes>
      <Route path='/*' element={<IndexRouter />} />
    </Routes>
  )
}

export default App
