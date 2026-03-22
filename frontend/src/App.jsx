import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Exams from './pages/Exams'
import Assignments from './pages/Assignments'
import BCS from './pages/BCS'
import Notes from './pages/Notes'
import Planner from './pages/Planner'
import AI from './pages/AI'
import Analytics from './pages/Analytics'
import Files from './pages/Files'
import Resources from './pages/Resources'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="exams" element={<Exams />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="bcs" element={<BCS />} />
          <Route path="notes" element={<Notes />} />
          <Route path="planner" element={<Planner />} />
          <Route path="ai" element={<AI />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="files" element={<Files />} />
          <Route path="resources" element={<Resources />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App