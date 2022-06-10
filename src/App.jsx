import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TaskView from './pages/TaskView';
import Error from './pages/Error';

export default function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={ <Dashboard />} />
        <Route path="/task" element={ <TaskView />} />
        <Route path="/task/:id" element={ <TaskView editing={true} />} />
        <Route path="*" element={ <Error />} />
      </Routes>
    </div>
  )
}