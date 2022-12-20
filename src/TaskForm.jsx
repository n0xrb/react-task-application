import { useState } from "react";

function TaskForm() {
	const [title, settitle] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(title);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="Escribe tu tarea" onChange={(e) => settitle(e.target.value)} />
			<button type="submit">Guardar</button>
		</form>
	);
}

export default TaskForm;
