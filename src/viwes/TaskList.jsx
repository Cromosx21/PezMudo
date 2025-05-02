import React from "react";
import { useState, useEffect } from "react";
import { getTasks } from "../store/task";

import { useParams } from "react-router-dom";

console.log(getTasks());

export default function TaskList() {
	const { projectid } = useParams();

	const [tasks, setTasks] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getTasks().then((tasks) => {
			setTasks(tasks);
			setLoading(false);
		});
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<section className="mx-auto max-w-7xl py-16 px-6">
                <div className="flex flex-col gap-4">
                    <a href="/" className="bg-sky-500 py-2 px-4 w-fit hover:bg-sky-600 rounded-md cursor-pointer">Volver</a>
					<h2 className="text-3xl font-medium">
						Lista de tareas del proyecto {projectid}
					</h2>
					{/* mostrar las tareas de acuerdo al id del proyecto, desde la api con el id del parametro */}
					<div className="flex flex-col gap-2">
						<table className="">
							<tr className="bg-sky-400 font-bold">
								<th className="px-2 py-1">Titulo</th>
								<th className="px-2 py-1">Descripcion</th>
								<th className="px-2 py-1">Prioridad</th>
								<th className="px-2 py-1">Estado</th>
								<th className="px-2 py-1">Fecha de entrega</th>
							</tr>
							{tasks
								.filter((task) => task.projectId == projectid)
								.map((task) => (
									<tr key={task.id} className="even:bg-slate-200">
										<td className="px-2 py-1">{task.title}</td>
										<td className="px-2 py-1">{task.description}</td>
										<td className="px-2 py-1">{task.priority}</td>
										<td className="px-2 py-1">{task.status}</td>
										<td className="px-2 py-1">{task.due_date}</td>
									</tr>
								))}
						</table>
					</div>
				</div>
			</section>
		</>
	);
}
