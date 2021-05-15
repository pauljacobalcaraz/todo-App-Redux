import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Badge } from 'react-bootstrap';
import { connect } from 'react-redux';

class TaskRow extends React.Component {
	btnDone = () => {
		let doneTask = {
			id: this.props.task.id,
			name: this.props.task.name,
			status: 'Done',
		};
		this.props.markDoneTask(doneTask);
	};
	render() {
		return (
			<div className='d-flex justify-content-center'>
				{/* 	{task.name}
                {task.status} */}
				<Button variant='primary' className=' my-1'>
					{this.props.task.name}{' '}
					<Badge variant='light'>{this.props.task.status}</Badge>
				</Button>
				<div className='my-1'>
					<Button
						variant='danger'
						className='mx-1 p-1'
						onClick={() => this.props.deleteTask(this.props.task.id)}
					>
						✗
					</Button>
					{this.props.task.status === 'Pending' ? (
						<Button
							variant='success'
							className='mx-1 p-1'
							onClick={this.btnDone}
						>
							✓
						</Button>
					) : (
						''
					)}
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteTask: (id) => dispatch({ type: 'DELETE_TASK', payload: id }),
		markDoneTask: (doneTask) =>
			dispatch({ type: 'DONE_TASK', payload: doneTask }),
	};
};

export default connect(null, mapDispatchToProps)(TaskRow);
