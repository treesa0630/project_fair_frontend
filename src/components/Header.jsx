import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar className="bg-success ">
                <Navbar.Brand href="/" className='ms-5' >
                    <h1 className='text-light'><FontAwesomeIcon icon={faStackOverflow} style={{ color: "#ffffff", }} /> Project Fair</h1>
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default Header