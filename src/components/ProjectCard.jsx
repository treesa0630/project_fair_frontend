import React from 'react'
import Card from 'react-bootstrap/Card';
import mediaplayer from '../assets/mediaplayer_image.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function ProjectCard() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            <Card className='shadow mb-4 mb-md-0 border-0' style={{ width: '100%' }}>
                <Card.Img variant="top" src={mediaplayer} className='w-100' onClick={handleShow} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                </Card.Body>
            </Card>





            <Modal  show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Media Player</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-6"><img src={mediaplayer} className='w-100' alt="" /></div>
                        <div className="col-6">
                            <h5>Description:</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore vel aliquid delectus similique voluptatum veritatis modi quibusdam. Quae fugit voluptatem, minus repudiandae deserunt, reiciendis eaque molestias velit sed obcaecati dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                            <h5>Technologies:</h5>
                            <p>React</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer >
              <div className='me-auto'>
                   <Link to={''}> <FontAwesomeIcon className='me-4' size='2xl' icon={faGithub} /></Link>
                    <Link to={''}><FontAwesomeIcon size='2xl' icon={faLink} /></Link>
              </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProjectCard