import { useState, useCallback, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const { createTask } = useContext(TaskContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title.length < 1 || description.length < 1) {
			alert("No pueden estar los campos vacios");
		} else {
			createTask(title, description);
			setTitle("");
			setDescription("");
		}
	};

	const inputTask = useCallback((inputElement) => {
		if (inputElement) {
			inputElement.focus();
		}
	}, []);

	return (
		<div className="max-w-md mx-auto">
			<form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
				<h1 className="text-2xl text-white mb-3 font-bold">Crea tu tarea</h1>
				<input
					ref={inputTask}
					type="text"
					placeholder="Escribe tu tarea"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
					className="bg-slate-300 p-3 w-full mb-2"
				/>
				<textarea
					placeholder="Escribe la descripción de la tarea"
					onChange={(e) => setDescription(e.target.value)}
					value={description}
					className="bg-slate-300 p-3 w-full mb-2"
				></textarea>
				<button type="submit" className="bg-green-600 text-white hover:bg-green-900 w-full">
					Guardar
				</button>
			</form>
		</div>
	);
}

export default TaskForm;
