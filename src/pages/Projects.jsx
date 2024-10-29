import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ProjectCard from '../components/ProjectCard'


function Projects() {
  return (
    <>
      <Header />
      <div >
        <h2 className='text-center my-5'>All Projects</h2>

        {/* not login */}

        {/* <div className='container-fluid'>
          <div className='row'>
            <div className="col-md-3"></div>
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
              <img src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" className='w-25' alt="" />
              <h5 className='text-danger my-5'>Please <Link to={'/login'}>Login</Link> to see more projects</h5>
            </div>
            <div className="col-md-3"></div>

          </div>

        </div> */}


        {/* logged-in */}


        <div className='container-fluid my-5'>
          <div className='row'>
            <div className="col-md-4"></div>
            <div className="col-md-4 d-flex ">
              <input type="text" placeholder='Technologies' className='shadow form-control ' name="" id="" />
              <FontAwesomeIcon size='xl' icon={faMagnifyingGlass}  style={{marginLeft:'-35px', marginTop:'7px', color:'lightgray'}}/>
              
            </div>
            <div className="col-md-4"></div>

          </div>

        </div>


        <div className="container-fluid p-md-5 p-4 mt-5">
          <div className="row">
            <div className="col-md-3">
              <ProjectCard/>
            </div>
            <div className="col-md-3">
            <ProjectCard/>
            </div>
            <div className="col-md-3">
            <ProjectCard/>
            </div>
            <div className="col-md-3">
            <ProjectCard/>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Projects