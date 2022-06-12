import { Link } from 'react-router-dom';
import StatusDisplay from './StatusDisplay';
import DeleteBlock from './DeleteBlock';
import ProgressBar from "./ProgressBar"
import StatusColorBar from './StatusColorBar';

export default function TaskBoard({task}) {
  return (
    <ul className="task-container">
      <li className="task-card">
				<StatusColorBar status={task.status} />
        <Link className="link" to="/">
          <h3>{task.title}</h3>
          <div>{task.description}</div>
					<StatusDisplay status={task.status} />
          <ProgressBar progress={task.progress} />
        </Link>
          <DeleteBlock />
      </li>
    </ul>
  )
}