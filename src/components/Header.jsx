import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons/faPowerOff';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { loginResponseContext } from '../context/Contextshare';

function Header() {
    const [token, setToken]= useState("")
    const navigate = useNavigate()
    const {setLoginResponse} = useContext(loginResponseContext)

    const handleLogout=()=>{
        sessionStorage.removeItem("existingUser")
        sessionStorage.removeItem("token")
        navigate('/')
        setLoginResponse(false)
    }

    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setToken(sessionStorage.getItem("token"))
        }
    },[])
    return (
        <>
            <Navbar className="bg-primary ">
                <Navbar.Brand href="/" className='ms-4' >
                    <h1 className='text-light'><FontAwesomeIcon icon={faStackOverflow} style={{ color: "#ffffff", }} /> Project Fair</h1>
                </Navbar.Brand>
                {token && <button className='btn btn-danger ms-auto me-5 rounded-0' onClick={handleLogout}><FontAwesomeIcon icon={faPowerOff}/> LogOut</button>}
            </Navbar>

            
        </>
    )
}

export default Header