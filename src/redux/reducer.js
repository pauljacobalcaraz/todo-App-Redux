import { v4 } from 'uuid';

const initialState = {
	tasks: [
		{
			id: v4(),
			name: 'eat',
			status: 'Done',
		},
		{
			id: v4(),
			name: 'sleep',
			status: 'Pending',
		},
		{
			id: v4(),
			name: 'code',
			status: 'Pending',
		},
	],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TASK':
			let newTask = action.payload;
			newTask.id = v4();
			let TaskCopy = [...state.tasks];
			TaskCopy.push(newTask);
			return {
				...state,
				tasks: TaskCopy,
			};
		case 'DELETE_TASK':
			const id = action.payload;
			let filteredTasks = state.tasks.filter((task) => task.id !== id);
			return { ...state, tasks: filteredTasks };

		case 'DONE_TASK':
			// alert(action.payload);
			const idDone = action.payload;
			let filteredTaskDone = state.tasks.filter(
				(task) => task.id !== idDone.id
			);
			filteredTaskDone.push(idDone);
			return {
				...state,
				tasks: filteredTaskDone,
			};
		// console.log(state);
		default:
			return state;
	}
};

export default reducer;
