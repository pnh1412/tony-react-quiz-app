import { Routes, Route} from 'react-router-dom';

import Dashboard from './pages/dashboard'
import Question from './pages/question';
import Score from './pages/score';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/question" element={<Question />} />
        <Route path="/score" element={<Score />} />
        <Route path="*" element={<>not found</>} />
      </Routes>
    </>
  )
}

export default App
