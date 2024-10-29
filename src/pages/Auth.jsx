import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import lock from '../assets/lock.png'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Auth() {
  return (
    <>
      <div className='container my-5'>
        <div className='row'>
          <h6><FontAwesomeIcon icon={faArrowLeft} /> Back to home</h6>
        </div>
        <div className='row bg-success rounded p-5'>
          <div className="col-md-6 text-center">
            <img src={lock} alt="" className='w-75 ' />
          </div>
          <div className="col-md-6  mt-5">
           <div className='text-center'>
              <h3 className='text-light'><FontAwesomeIcon icon={faStackOverflow} style={{ color: "#ffffff", }} /> Project Fair</h3>
              <h5 className='text-light'>Sign In to Your Account</h5>
  
              
                <input type="text" name="" id=""  placeholder='treesa@gmail.com' className='form-control rounded-0 w-100 mt-5' />
                <input type="text" name="" id="" placeholder='•••••••••' className='form-control rounded-0 mt-3' />
    
                <button className='bg-warning border-0 py-2 w-100 mt-3'>Login</button>

               
              
           </div>
           <h6 className='mt-3'>New user ? Click Here to <Link className='text-danger' to={"/register"}>Register</Link> </h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth