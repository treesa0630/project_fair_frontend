import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import lock from '../assets/lock.png'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi, registerApi } from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginResponseContext } from '../context/Contextshare'

function Auth({ register }) {
  const navigate = useNavigate()

  const {setLoginResponse} = useContext(loginResponseContext)

  const [userdetails,setuserdetails] = useState({
      username :"",
      email:"",
      password:""
    }
  )
  console.log(userdetails);



  // Registration

const handleRegister = async()=>{
  const {username, email , password} = userdetails
  if(!username || !email || !password){
   toast.info('Fill the form completely')
  }
  else{
    const result= await registerApi(userdetails)
    console.log(result);
    if(result.status==200){
      toast.success('Registration Successfull')
      setuserdetails({
        username :"",
        email:"",
        password:""
      })
      navigate('/login')
    }
    else if(result.status==406){
      toast.warning(result.response.data)
    }
    else{
      toast.error('Something went wrong')
    }
  }
}


// Login 

const handleLogin = async()=>{
  const {email, password} = userdetails
  if(!email || !password){
    toast.info('Fill the form completely')
  }
  else{
    const result = await loginApi({email, password})
    console.log(result);
    if(result.status==200){
      setLoginResponse(true)
      toast.success('Login Successfully')

      sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
      sessionStorage.setItem("token", result.data.token)

      setuserdetails({
        username :"",
        email:"",
        password:""
      })

      setTimeout(()=>{
        navigate('/')
      },2000)
      
    }
    else if(result.staus==406){
      toast.warning(request.response.data)
      setuserdetails({
        username :"",
        email:"",
        password:""
      })
    }
    else{
      toast.error('Something Went Wrong')
      setuserdetails({
        username :"",
        email:"",
        password:""
      })
    }
    
  }
}
  
  return (
    <>
      <div className='container my-5 py-3 px-3'>
        <div className='row'>
          <Link to={'/'} style={{ textDecoration: 'none' }}><h6 className='text-danger'><FontAwesomeIcon icon={faArrowLeft} /> Back to home</h6></Link>
        </div>
        <div className='row bg-success rounded-4 p-5'>
          <div className="col-md-6 text-center">
            {register ?
              <img src={lock} alt="" className='w-75 ' />
              :
              <img src='https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif' alt="" className='w-75 ' />}
          </div>

          <div className="col-md-6  mt-5">
            <div>
              <h3 className='text-light text-center'><FontAwesomeIcon icon={faStackOverflow} style={{ color: "#ffffff", }} /> Project Fair</h3>

              {!register ? <h5 className='text-light text-center'>Sign In to Your Account</h5>
                :
                <h5 className='text-light text-center'>Sign Up to Your Account</h5>
              }

              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">

                  {register && <input type="text"  placeholder='Username' value={userdetails.username} className='form-control rounded-0 w-100 mt-5' onChange={(e)=>setuserdetails({...userdetails, username:e.target.value})}/>}
                  <input type="mail"  placeholder='email@gmail.com' value={userdetails.email} className='form-control rounded-0 w-100 mt-3' onChange={(e)=>setuserdetails({...userdetails, email:e.target.value})} />
                  <input type="password"  placeholder='password' value={userdetails.password} className='form-control rounded-0 mt-3' onChange={(e)=>setuserdetails({...userdetails, password:e.target.value})} />

                  {!register ?
                    <div>
                      <button className='bg-warning border-0 py-2 w-100 mt-3' onClick={handleLogin}>Login</button>
                      <h6 className='mt-3'>New user ? Click Here to <Link className='text-danger' to={"/register"}>Register</Link> </h6>
                    </div>
                    :
                    <div>
                      <button className='bg-warning border-0 py-2 w-100 mt-3' onClick={handleRegister}>Register</button>
                      <h6 className='mt-3'>Already a user ? Click Here to <Link className='text-danger' to={"/login"}>Login</Link> </h6>
                    </div>}

                </div>
                <div className="col-md-1"></div>
              </div>



            </div>

          </div>
        </div>
      </div>

      <ToastContainer theme='colored' position='top-center' autoClose={2000}/>
    </>
  )
}

export default Auth