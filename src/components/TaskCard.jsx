function TaskCard({ task, deleteTask }) {
	const handleRemoveTask = () => {
		deleteTask(task.id);
	};
	return (
		<div>
			<h1>{task.title}</h1>
			<p>{task.description}</p>
			<button onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
		</div>
	);
}

export default TaskCard;
