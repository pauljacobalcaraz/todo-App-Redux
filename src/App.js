import './App.css';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTaskForm from './Components/AddTaskForm';
import TaskRow from './Components/TaskRow';

function App(props) {
	return (
		<div className='App App-header'>
			<AddTaskForm />
			<header className='container d-flex '>
				<div className='col-6 App-header '>
					Pending
					{/* <Tasks /> */}
					{props.tasks
						.filter((task) => task.status === 'Pending')
						.map((task) => (
							<TaskRow key={task.id} task={task} />
						))}
				</div>
				<div className='col-6 App-header'>
					Done
					{props.tasks
						.filter((task) => task.status === 'Done')
						.map((task) => (
							<TaskRow key={task.id} task={task} />
						))}
				</div>
			</header>
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		tasks: state.tasks,
	};
};

export default connect(mapStateToProps)(App);
