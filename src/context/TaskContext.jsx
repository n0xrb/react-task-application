import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
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

	{
		/* 
        Para hacer uso de los elementos que serán pasados mediante el atributo value:

        import { TaskContext } from "../context/TaskContext";
        import { useContext } from "react";
        const { tasks, deleteTask } = useContext(TaskContext);
    */
	}
	return <TaskContext.Provider value={{ tasks, deleteTask, createTask }}>{props.children}</TaskContext.Provider>;
}
