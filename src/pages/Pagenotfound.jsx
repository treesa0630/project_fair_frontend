import React from 'react'
import { Link } from 'react-router-dom'

function Pagenotfound() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row mb-5 pt-4 mt-2'>
                    <div className="col-md-2"></div>
                    <div className="col-md-8 d-flex justify-content-center align-items-center flex-column">
                        <img src="https://i.pinimg.com/originals/cc/4d/aa/cc4daa9d54c97a1badec1f0fd9a327dc.gif" alt="no images" className='w-50' />
                        <h1>Look you're lost</h1>
                        <h5>The page you are looking unavaoilable !</h5>
                        <Link to={'/'}><button className='btn btn-success mt-3 rounded-0 shadow'>GO HOME</button></Link>
                    </div>
                    <div className="col-md-2"></div>
                </div>

            </div>
        </>
    )
}

export default Pagenotfound