import React from 'react'
import './tabProject.css';
const TabProject = ({ projects }) => {
    return (
        <div className="container">
            <div className="box" id='createProject'> + Create Project</div>
            {projects.map((project, index) => (
                <div className="box" key={index}>
                    {project.nameProject}
                </div>
            ))}
        </div>
    )
}

export default TabProject