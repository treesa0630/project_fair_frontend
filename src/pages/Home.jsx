import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import photo from '../assets/homeimage.jpg'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { getHomeProjectApi } from '../services/allApi'

function Home() {

    const [isLogin, setisLogin] = useState(false)
    const [homeProject, setHomeProject] = useState([])
    // const [username, setusername] = useState("")


    const getHomeProject = async () => {
        const result = await getHomeProjectApi()
        setHomeProject(result.data)

    }
    console.log(homeProject);
    

    useEffect(() => {
        getHomeProject()
        if (sessionStorage.getItem('token')) {
            setisLogin(true)
        }
        else {
            setisLogin(false)
        }
    }, [])

    return (
        <>
            <div style={{ height: '100vh' }} className='bg-primary p-5 d-flex justify-content-center align-items-center'>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <div>
                                <h1 style={{ fontSize: '70px', color: 'white' }}>Project Fair</h1>
                                <p>one stop destination for all software projects</p>
                                {isLogin == false ? <Link to={'/login'}> <button className='btn border text-light p-2 mt-3 '>Get Started <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff", }} /></button></Link>
                                    :
                                    <Link to={'/dashboard'}> <button className='btn border text-light p-2 mt-3 '>Manage Project <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff", }} /></button></Link>}
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <img src={photo} className='w-100' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div >
                <h3 className='text-center mt-5'>Explore Our Projects</h3>
                <div className='container-fluid my-5'>
                    <div className="row">
                        {homeProject?.map((item) => (
                            <div className="col-md-4 p-md-5  text-center ">

                                <ProjectCard  projects={item}/>

                            </div>
                        ))}
                    </div>
                    <div className='row'>
                        <Link to={'/projects'}> <p className='text-center text-danger'>See more projects</p></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home