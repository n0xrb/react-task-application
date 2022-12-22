import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskList() {
	const { tasks } = useContext(TaskContext);

	if (tasks.length === 0) {
		return <h1 className="text-center text-white text-2xl">No hay tareas aun</h1>;
	}
	return (
		<div className="grid grid-cols-4 gap-2 content-center">
			{tasks.map((task) => (
				<TaskCard key={task.id} task={task} />
			))}
		</div>
	);
}

export default TaskList;
