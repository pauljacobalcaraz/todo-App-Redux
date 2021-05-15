import React from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

class AddTaskForm extends React.Component {
	state = {
		taskName: '',
	};
	btnAddTask = () => {
		this.props.addTask({
			name: this.state.taskName,
			status: 'pending',
		});
	};
	render() {
		return (
			<div className='d-flex justify-content-center mb-5'>
				<p>New Task:{'  '}</p>
				<Form.Control
					size='sm'
					type='text'
					className='col-3 m-1'
					placeholder='New Task'
					value={this.state.taskName}
					onChange={(e) => this.setState({ taskName: e.target.value })}
				/>
				<br />
				<div>
					<button className=' btn btn-primary p-1' onClick={this.btnAddTask}>
						Save
					</button>{' '}
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTask: (task) => dispatch({ type: 'ADD_TASK', payload: task }),
	};
};

export default connect(null, mapDispatchToProps)(AddTaskForm);
