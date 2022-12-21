import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./data/task";
import { useState, useEffect } from "react";

const App = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		setTasks(data);
	}, []);

	const createTask = (taskTitle, taskDescription) => {
		const newTask = {
			id: tasks.length + 1,
			title: taskTitle,
			description: taskDescription,
		};
		setTasks([...tasks, newTask]);
	};

	const deleteTask = (taskID) => {
		{
			/* Se eliminará solo la tarea que posea el taskID recibido */
		}
		const filteredTask = tasks.filter((task) => task.id !== taskID);
		setTasks(filteredTask);
	};
	return (
		<>
			<TaskForm createTask={createTask} />
			<TaskList tasks={tasks} deleteTask={deleteTask} />
		</>
	);
};

export default App;
