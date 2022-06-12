export default function StatusColorBar( {status}) {

	const getStatusColor = (status) => {
		let color;
		switch(status) {
			case 'open':
				color = '#fbf1f0';
				break;
			case 'in progress':
				color = '#f1f4fb';
				break;
				default:
				color = 'rgb(235, 253, 235)';
		}

		return color;
	}

  return (
    <div style={{backgroundColor: getStatusColor(status)}} className="statusDisplay"></div>
  )
}