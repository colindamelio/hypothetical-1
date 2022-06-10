import TaskBoard from '../components/TaskBoard';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <section className="task-container">
        <TaskBoard />
      </section>
    </div>
  )
}