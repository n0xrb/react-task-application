import { useState, useCallback } from "react";

function TaskForm({ createTask }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		createTask(title, description);
		setTitle("");
		setDescription("");
	};

	const inputTask = useCallback((inputElement) => {
		if (inputElement) {
			inputElement.focus();
		}
	}, []);

	return (
		<form onSubmit={handleSubmit}>
			<input ref={inputTask} type="text" placeholder="Escribe tu tarea" onChange={(e) => setTitle(e.target.value)} value={title} />
			<textarea
				placeholder="Escribe la descripción de la tarea"
				onChange={(e) => setDescription(e.target.value)}
				value={description}
			></textarea>
			<button type="submit">Guardar</button>
		</form>
	);
}

export default TaskForm;
