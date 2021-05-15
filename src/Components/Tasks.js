import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Badge } from 'react-bootstrap';

class Tasks extends React.Component {
	render() {
		return (
			<>
				{this.props.tasks.map((task) => {
					return (
						<div className='d-flex justify-content-center'>
							{/* 	{task.name}
							{task.status} */}
							<Button variant='primary' className=' my-1'>
								{task.name} <Badge variant='light'>{task.status}</Badge>
							</Button>
							<div className='my-1'>
								<Badge variant='danger' className='mx-1 p-1'>
									✗
								</Badge>
								<Badge variant='success' className='mx-1 p-1'>
									✓
								</Badge>
							</div>
						</div>
					);
				})}
			</>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		tasks: store.tasks,
	};
};

export default connect(mapStateToProps)(Tasks);
