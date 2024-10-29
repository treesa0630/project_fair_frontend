import { faFacebookF, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Footer() {
  return (
    <>
    <div className="bg-success">
       <div className='container-fluid row'>
            <div className="col-md-4 p-4">
                <h3 className='text-light'><FontAwesomeIcon icon={faStackOverflow} style={{color: "#ffffff",}} /> Project Fair</h3>
                <p style={{textAlign:'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam quibusdam sint sed voluptatem sapiente odio, iure ipsam eaque exercitationem totam omnis incidunt optio culpa suscipit debitis autem deleniti deserunt maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, animi cumque! Qui ipsam quasi dignissimos, accusantium est labore perferendis numquam fugiat nulla esse vitae nobis inventore ut dolor assumenda dolorum.</p>
            </div>
            <div className="col-md-2 p-4">
                <h3 className='text-light ms-4'>Links</h3>
                <ul style={{listStyle:'none'}}>
                <li>Home</li>
                <li>Project</li>
                <li>Dashboard</li>
                </ul>
            </div>
            <div className="col-md-2 p-4">
                <h3 className='text-light ms-4'>Guides</h3>
                <ul style={{listStyle:'none'}}>
                <li>React</li>
                <li>React Bootstrap</li>
                <li>Bootswatch</li>
                </ul>
            </div>
            <div className="col-md-4 p-4">
                <h3 className='text-light'>Contact Us</h3>
                <div className='d-flex'>
                    <input className='form-control' placeholder='Email ID' type="text" name="" id="" />
                    <button className='bg-warning border border-warning text-light rounded ms-4 p-2 shadow'>Subscribe</button>
                </div>
                <div className='d-flex mt-4 justify-content-around'>
                <FontAwesomeIcon size='2xl' icon={faFacebookF} style={{color: "#ffffff",}} />
                <FontAwesomeIcon size='2xl' icon={faTwitter} style={{color: "#ffffff",}} />
                <FontAwesomeIcon size='2xl' icon={faInstagram} style={{color: "#ffffff",}} />
                <FontAwesomeIcon size='2xl' icon={faGithub} style={{color: "#ffffff",}} />
                <FontAwesomeIcon size='2xl' icon={faLinkedin} style={{color: "#ffffff",}} />

                </div>
            </div>
       </div>
    </div>
    </>
  )
}

export default Footer