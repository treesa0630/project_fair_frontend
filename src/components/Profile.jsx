import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { serverUrl } from '../services/serverUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUserProfileApi } from '../services/allApi';

function Profile() {
  const [userDetails, setuserDetails] = useState({
    username: "",
    email: "",
    password: "",
    profile: "",
    github: "",
    linkedin: ""
  })

  const [existingImage, setexistingImage] = useState("")
  const [updateStatus, setupdateStatus] = useState({})
  // console.log(existingImage);

  const [preview, setPreview] = useState("")

  console.log(userDetails);

  const handleFile = (e) => {
    setuserDetails({ ...userDetails, profile: e.target.files[0] })
  }

  const handleUpdate = async () => {
    const { username, email, password, profile, github, linkedin } = userDetails
    console.log(username, email, password, profile, github, linkedin);
    
    if (!github || !linkedin) {
      toast.info('Please add github and linkedin')
    }
    else {
      const reqBody = new FormData()
      reqBody.append("username", username)
      reqBody.append("email", email)
      reqBody.append("password", password)
      reqBody.append("github", github)
      reqBody.append("linkedin", linkedin)
      preview ? reqBody.append("profile", profile) : reqBody.append("profile", existingImage)

      const token = sessionStorage.getItem("token")

      if (preview) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        const result = await updateUserProfileApi(reqBody, reqHeader)
        console.log(result);
        if (result.status == 200) {
          toast.success('Profile Updated Successfully')
          sessionStorage.setItem("existingUser", JSON.stringify(result.data))
          setupdateStatus(result)
        }

      }
      else {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        const result = await updateUserProfileApi(reqBody, reqHeader)
        console.log(result);
        if (result.status == 200) {
          toast.success('Profile Updated Successfully')
          sessionStorage.setItem("existingUser", JSON.stringify(result.data))
          setupdateStatus(result)
        }
        else{
          toast.error('Something went wrong')
        }
      }
    }
  }

  useEffect(() => {
    if (userDetails.profile) {
      setPreview(URL.createObjectURL(userDetails.profile))
    }
  }, [userDetails.profile])


  console.log(preview);


  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      const user = JSON.parse(sessionStorage.getItem("existingUser"))
      console.log(user);
      setuserDetails({ ...userDetails, username: user.username, email: user.email, password: user.password, github: user.github, linkedin: user.linkedin })
      setexistingImage(user.profile)
    }
  }, [updateStatus])


  return (
    <>
      <div className='p-4  shadow'>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header><h4>Profile</h4></Accordion.Header>
            <Accordion.Body>
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 d-flex justify-content-center">
                  <div className='' style={{ height: "100px", width: '100px', borderRadius: '50%', backgroundColor: 'white' }}>
                    <label htmlFor='profileImage' className=''>
                      <input type="file" name="" id="profileImage" style={{ display: 'none' }} onChange={(e) => handleFile(e)} />
                      {existingImage == "" ?
                        <img className='w-100' src={preview ? preview : "https://www.freeiconspng.com/uploads/profile-icon-28.png"} alt="" style={{ borderRadius: '50%', height: '90px',objectFit: 'cover' }} />
                        :
                        <img className='w-100' src={preview ? preview : `${serverUrl}/upload/${existingImage}`} alt="" style={{ borderRadius: '50%', height: '90px', objectFit: 'cover' }} />
                      }
                    </label>

                  </div>
                </div>
                <div className="col-md-4"></div>
              </div>
              <div className='w-100'>
                <input type="text" placeholder='GitHub' value={userDetails.github} className='form-control mt-4' onChange={(e) => setuserDetails({ ...userDetails, github: e.target.value })} name="" id="" />
                <input type="text" placeholder='LinkedIn' value={userDetails.linkedin} className='form-control mt-3' onChange={(e) => setuserDetails({ ...userDetails, linkedin: e.target.value })} name="" id="" />
                <button className='w-100 btn btn-primary  mt-3' onClick={handleUpdate}>Update</button>
              </div>
              <ToastContainer theme='colored' position='top-center' autoClose={2000} />

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        
      </div>


    </>
  )
}

export default Profile