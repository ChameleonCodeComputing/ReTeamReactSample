import React from "react";
import { projects } from "../../../sample_data/projects";
import { Link } from "react-router-dom";
export function ProjectList() {
    return (
        <>
            <div className="mb-4 mt-8 flex justify-between items-center -mx-3">
                <div className="px-3">
                    <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
                        My Projects
                    </h2>
                </div>
                <div className="px-3">
                    <Link
                        to="/AddProject"
                        className="font-medium text-sm text-blue-600 hover:text-blue-800"
                    >
                        Add New Project
                    </Link>
                </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {projects.slice(0, 8).map((item, index) => (
                    <Link
                        key={index}
                        to={`/insulation`}
                        className="bg-white dark:bg-slate-950 p-5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-600 hover:ring-1 hover:ring-blue-600 transition-all"
                    >
                        <div className="flex items-center gap-x-3 mb-3">
                            <div className="h-6">{item.icon}</div>
                            <h6 className="text-lg font-bold text-slate-700 dark:text-white">
                                {item.name}
                            </h6>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-200 line-clamp-1">
                            {item.address}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-200 line-clamp-1">
                            {item.id}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-200 line-clamp-1">
                            {item.description}
                        </p>
                        <div className="dropzone">
                            File
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

