import { Link } from 'react-router-dom';
import StatusDisplay from './StatusDisplay';
import PriorityDisplay from './PriorityDisplay';
import DeleteBlock from './DeleteBlock';
import ProgressBar from "./ProgressBar"

export default function TaskBoard() {
  return (
    <ul className="task-container">
      <li className="task-card">
        <div className="task-color"></div>
        <Link to="/">
          <div>Name</div>
          <div>description</div>
          <StatusDisplay />
          <PriorityDisplay />
          <ProgressBar />
          <DeleteBlock />
        </Link>
      </li>
      <li className="task-card">
        <div className="task-color"></div>
        <Link to="/">
          <div>Name</div>
          <div>description</div>
          <StatusDisplay />
          <PriorityDisplay />
          <ProgressBar />
          <DeleteBlock />
        </Link>
      </li>
    </ul>
  )
}