import { Routes, Route} from 'react-router-dom';

import Dashboard from './pages/dashboard'
import Question from './pages/question';
import Score from './pages/score';
import Result from './pages/result';
import LeaderBoard from './pages/leader-board';
import Register from './pages/register';
import Login from './pages/login';

// layout
import MainLayout from './layout/main-layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/question" element={<MainLayout><Question /></MainLayout>} />
        <Route path="/score" element={<MainLayout><Score /></MainLayout>} />
        <Route path="/result" element={<MainLayout><Result /></MainLayout>} />
        <Route path="/leader-board" element={<MainLayout><LeaderBoard /></MainLayout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<>not found</>} />
      </Routes>
    </>
  )
}

export default App
