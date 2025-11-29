import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import Dashboard from "./routes/Dashboard";
import Patterns from "./routes/Patterns";
import ProblemDetail from "./routes/ProblemDetail";
import DailyLog from "./routes/DailyLog";
import WeeklyPlan from "./routes/WeeklyPlan";
import Login from "./routes/Login";
import PatternDetail from "./routes/PatternDetail";
import AddProblem from "./routes/Admin/AddProblem";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-white flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-6">
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path="/admin/add-problem"
              element={
                <RequireAuth>
                  <AddProblem />
                </RequireAuth>
              }
            />

            <Route
              path="/patterns"
              element={
                <RequireAuth>
                  <Patterns />
                </RequireAuth>
              }
            />

            <Route
              path="/patterns/:slug"
              element={
                <RequireAuth>
                  <PatternDetail />
                </RequireAuth>
              }
            />

            <Route
              path="/problems/:problemId"
              element={
                <RequireAuth>
                  <ProblemDetail />
                </RequireAuth>
              }
            />
            <Route
              path="/daily-log"
              element={
                <RequireAuth>
                  <DailyLog />
                </RequireAuth>
              }
            />
            <Route
              path="/weekly-plan"
              element={
                <RequireAuth>
                  <WeeklyPlan />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
