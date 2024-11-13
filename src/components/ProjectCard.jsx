import React from 'react'
import Card from 'react-bootstrap/Card';
import mediaplayer from '../assets/mediaplayer_image.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { serverUrl } from '../services/serverUrl';


function ProjectCard({projects}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            <Card className='shadow mb-4 mt-3 mb-md-0 border-0' style={{ width: '100%' }}>
                <Card.Img variant="top" src={`${serverUrl}/upload/${projects?.projectImage}`} className='w-100' onClick={handleShow} />
                <Card.Body>
                    <Card.Title>{projects?.title}</Card.Title>
                </Card.Body>
            </Card>





            <Modal  show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>{projects?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-6"><img src={`${serverUrl}/upload/${projects?.projectImage}`} className='w-100' alt="" /></div>
                        <div className="col-6">
                            <h5>Description:</h5>
                            <p>{projects?.overview}</p>

                            <h5>Technologies:</h5>
                            <p>{projects?.language}</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer >
              <div className='me-auto'>
                   <Link to={projects?.github} target='_blank'> <FontAwesomeIcon className='me-4' size='2xl' icon={faGithub} /></Link>
                    <Link to={projects?.website} target='_blank'><FontAwesomeIcon size='2xl' icon={faLink} /></Link>
              </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProjectCard