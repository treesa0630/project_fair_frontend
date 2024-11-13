import React, { useContext, useEffect, useState } from 'react'
import Addproject from './Addproject'
import Edit from './Edit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { getUserProjectApi, removeUserProjectAPi } from '../services/allApi'
import { Link } from 'react-router-dom'
import { addResponseContext, editResponseContext } from '../context/Contextshare'


function Myproject() {
  const [userproject, setuserproject] = useState([])
  const { addResponse } = useContext(addResponseContext)
  const [deletestatus, setdeletestatus]= useState("")
  const {ediResponse} = useContext(editResponseContext)

  const getUserProjects = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")

      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await getUserProjectApi(reqHeader)
      // console.log(result.data)
      setuserproject(result.data)
    }
  }
  // console.log(userproject);



  const handleDelete = async (id) => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")

      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await removeUserProjectAPi(id, reqHeader)
      console.log(result)
      if(result.status==200){
        setdeletestatus(result)
      }
      else{
        alert('Something went wrong')
      }
    }
  }


  useEffect(() => {
    getUserProjects()
  }, [addResponse,deletestatus,ediResponse])

  return (
    <>
      <div className='p-4 shadow w-100 mb-5'>
        <div className='d-flex justify-content-between align-items-center'>
          <h3 className='text-succcess'>My Project</h3>
          <Addproject />
        </div>

        {userproject?.length > 0 ?

          userproject.map((item) => (<div className='p-3 bg-light mt-4 rounded-5 d-flex justify-content-between align-items-center'>
            <h5>{item?.title}</h5>
            <div className='d-flex align-items-center'>
              <Edit projects={item} />
              <Link to={item?.github} target='_blank'> <FontAwesomeIcon className='text-dark fs-4 me-3' icon={faGithub} /></Link>
              <Link to={item?.website} target='_blank'> <FontAwesomeIcon className='text-success fs-4 me-3' icon={faGlobe} /></Link>
              <FontAwesomeIcon className='text-danger fs-4 me-1' onClick={() => handleDelete(item?._id)} icon={faTrashCan} />

            </div>
          </div>))
          :
          <h4 className='text-center text-danger mt-4'>No Projects Added Yet</h4>
        }
      </div>
    </>
  )
}

export default Myproject