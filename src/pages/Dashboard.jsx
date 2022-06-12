import TaskBoard from '../components/TaskBoard';

export default function Dashboard() {

	const tasks = [
		{
			id: 0,
			category: 'Q1 22',
			color: 'red',
			title: 'Project idea dashboard',
			status: 'in progress',
			priority: 5,
			progress: 40,
			description: 'Build a project dashboard to store ideas and development process.',
			timestamp: '2022-06-12'
		},
		{
			id: 1,
			category: 'Q1 22',
			color: 'green',
			title: 'NFT creator',
			status: 'done',
			priority: 2,
			progress: 100,
			description: 'lorem ipsum lorem isipm lorem ispon doner et lsesn ipsiun.',
			timestamp: '2022-06-12'
		},
		{
			id: 2,
			category: 'Q4 23',
			color: 'yellow',
			title: 'API build',
			status: 'open',
			priority: 1,
			progress: 0,
			description: 'lorem ipsum lorem isipm lorem ispon doner et lsesn ipsiun.',
			timestamp: '2022-06-12'
		}
	]

	const uniqueTasks = [
		...new Set(tasks?.map(({category}) => category ))
	]

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <section>
				{
					tasks && uniqueTasks?.map(uniqueTask => {
						return (
							<div key={uniqueTask.id}>
								<h3>{uniqueTask}</h3>
								{
									tasks
										.filter(task => task.category === uniqueTask)
										.map(filteredTask => (
											<TaskBoard color={filteredTask.color} task={filteredTask} />
										))
								}
							</div>
						)
					})
				}
      </section>
    </div>
  )
}