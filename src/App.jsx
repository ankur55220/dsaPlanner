import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './routes/Dashboard'
import Patterns from './routes/Patterns'
import PatternDetail from './routes/PatternDetail'
import ProblemDetail from './routes/ProblemDetail'
import DailyLog from './routes/DailyLog'
import WeeklyPlan from './routes/WeeklyPlan'
import Login from './routes/Login'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-white flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patterns" element={<Patterns />} />
            <Route path="/patterns/:patternId" element={<PatternDetail />} />
            <Route path="/problems/:problemId" element={<ProblemDetail />} />
            <Route path="/daily-log" element={<DailyLog />} />
            <Route path="/weekly-plan" element={<WeeklyPlan />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
