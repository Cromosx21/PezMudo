import { getProjects } from "../store/project";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";

export default function ProjectList() {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProjects().then((projects) => {
            setProjects(projects);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
		<>
			<section className="mx-auto max-w-7xl">
				<div className="flex flex-col gap-4">
					<h2 className="text-3xl font-medium">Lista de proyectos</h2>
                    <table className="max-w-2xl w-fit overflow-hidden border border-slate-400 rounded-lg block ">
						<tr className="bg-sky-400 font-bold">
                            <th className="py-1 px-4">Nombre del proyecto</th>
                            <th className="py-1 px-4">Descripción del proyecto</th>
							<th className="py-1 px-4">Estado</th>
                        </tr>
                        {/* Consumir la api */}
                        
                        { 
                            projects.map((project) => (
                                <tr key={project.id} className="even:bg-slate-200">
                                    <td className="py-1 px-4 hover:underline hover:text-sky-700">
                                        <Link to={`/task/${project.id}`}>{project.name} </Link>
                                    </td>
                                    <td className="py-1 px-4">{project.description}</td>
                                    <td className="py-1 px-4">{project.status}</td>
                                </tr>
                            ))
                        }
					</table>
				</div>
			</section>
		</>
	);
}