import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TaskView from "./pages/TaskView";
import Error from "./pages/Error";
import Navigation from "./components/Navaigation";

export default function App() {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<TaskView />} />
        <Route path="/tasks/:id" element={<TaskView editing={true} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
