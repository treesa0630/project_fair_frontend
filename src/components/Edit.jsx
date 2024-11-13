import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { serverUrl } from '../services/serverUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUserProjectApi } from '../services/allApi';
import { editResponseContext } from '../context/Contextshare';


function Edit({ projects }) {
    // console.log(projects);

    const {seteditResponse} = useContext(editResponseContext)

    const [projectDetails, setprojectDetails] = useState({
        title: projects.title,
        language: projects.language,
        github: projects.github,
        website: projects.website,
        overview: projects.overview,
        projectImage: ""
    })

    // console.log(projectDetails);

    const [preview, setPreview] = useState('')
    const [show, setShow] = useState(false);
    const [key, setKey] = useState(0)
    const handleClose = () => {
        setShow(false)
        handleCancel()
    };
    const handleShow = () => setShow(true);

    const handleFile = (e) => {
        setprojectDetails({ ...projectDetails, projectImage: e.target.files[0] })
    }


    const handleCancel = () => {
        setprojectDetails({
            title: projects.title,
            language: projects.language,
            github: projects.github,
            website: projects.website,
            overview: projects.overview,
            projectImage: ""
        })
        setPreview("")
        if (key == 0) {
            setKey(1)
        }
        else {
            setKey(0)
        }
    }


    const handleUpdate = async () => {
        const { title, language, github, website, overview , projectImage} = projectDetails
        if (!title || !language || !github || !website || !overview) {
            toast.info('Please complete the form')
        }
        else {
            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("language", language)
            reqBody.append("github", github)
            reqBody.append("website", website)
            reqBody.append("overview", overview)
            preview ? reqBody.append("projectImage", projectImage) : reqBody.append("projectImage", projects.projectImage)


            const token = sessionStorage.getItem("token")

            if (preview) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                const result = await updateUserProjectApi(projects._id, reqBody, reqHeader)
                console.log(result);
                if (result.status == 200) {
                    seteditResponse(result)
                    toast.success('Updation Successfull')
                    setTimeout(()=>{
                        handleClose()
                    },3000)
                }
                else {
                    handleCancel()
                    toast.error('Something went wrong')
                }
            }
            else {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                const result = await updateUserProjectApi(projects._id, reqBody, reqHeader)
                console.log(result);
                if (result.status == 200) {
                    seteditResponse(result)
                    toast.success('Updation Successfull')
                    setTimeout(()=>{
                        handleClose()
                    },3000)
                }
                else {
                    handleCancel()
                    toast.error('Something went wrong')
                }
            }
        }
    }

    useEffect(() => {
        if (projectDetails.projectImage) {
            setPreview(URL.createObjectURL(projectDetails.projectImage))
        }

    }, [projectDetails.projectImage])

    // console.log(preview);


    return (
        <>
            <FontAwesomeIcon className='fs-4 mx-3' onClick={handleShow} style={{ color: 'rgb(160,98,192)' }} icon={faPenToSquare} />


            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-success'>Add Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="projectImage">
                                <input id='projectImage' type="file" style={{ display: 'none' }} key={key} onChange={(e) => handleFile(e)} />
                                <img className='w-100' src={preview ? preview : `${serverUrl}/upload/${projects.projectImage}`} alt="" />
                            </label>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <input placeholder='Title' type="text" value={projectDetails.title} className='form-control' name="" id="" onChange={(e) => setprojectDetails({ ...projectDetails, title: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <input placeholder='Language' type="text" value={projectDetails.language} className='form-control' name="" id="" onChange={(e) => setprojectDetails({ ...projectDetails, language: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <input placeholder='GitHub' type="text" value={projectDetails.github} className='form-control' name="" id="" onChange={(e) => setprojectDetails({ ...projectDetails, github: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <input placeholder='Website' type="text" value={projectDetails.website} className='form-control' name="" id="" onChange={(e) => setprojectDetails({ ...projectDetails, website: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <textarea placeholder='Overview' name="" value={projectDetails.overview} className='form-control' id="" onChange={(e) => setprojectDetails({ ...projectDetails, overview: e.target.value })}></textarea>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer theme='colored' position='top-center' autoClose={2000} />
        </>
    )
}

export default Edit