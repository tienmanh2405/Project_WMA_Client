import React, { useState } from 'react'
import './tabProject.css';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import apiProject from '../../api/project';
import '../../App.css';
const TabProject = ({ projects }) => {
    const navigate = useNavigate();
    const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [NewProject, setNewProject] = useState('');

    const onClickTabProject = (project) => {
        navigate(`/project/${project._id}`);
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    const handleSubmitCreateProject = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            try {
                handleCloseCreateProjectModal();
                setLoading(true);
                // Bắt lỗi khi gọi API
                try {
                    const response = await apiProject.fetchCreateProjects({ nameProject: NewProject });
                    const { success, message } = response;
                    if (success === true) {
                        alert('Create Project successful');
                    } else {
                        alert(message);
                    }
                } catch (error) {
                    console.error(error);
                    alert('An error occurred while creating the project. Please try again later.');
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        setValidated(true);
    };

    const handleCloseCreateProjectModal = () => setShowCreateProjectModal(false);
    const handleShowCreateProjectModal = () => setShowCreateProjectModal(true);
    return (
        <>
            {loading && <div className="loading">Loading&#8230;</div>}
            <Modal
                show={showCreateProjectModal}
                onHide={handleCloseCreateProjectModal}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Form noValidate validated={validated} onSubmit={handleSubmit} >
                    <Modal.Header closeButton>
                        <Modal.Title>Create Project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form.Group controlId="project-name">
                            <Form.Label>Project Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="nameProject"
                                value={NewProject}
                                onChange={(e) => setNewProject(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseCreateProjectModal}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" onClick={(event) => handleSubmitCreateProject(event)}>Create Now</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
            <div className="container">
                <div className="box" id='createProject' onClick={handleShowCreateProjectModal}> + Create Project</div>
                {projects.map((project, index) => (
                    <div className="box" onClick={() => onClickTabProject(project)} key={index}>
                        {project.nameProject}
                    </div>
                ))}
            </div>
        </>
    )
}

export default TabProject