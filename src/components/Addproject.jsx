import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addprojectApi } from '../services/allApi';
import { addResponseContext } from '../context/Contextshare';

function Addproject() {
    const [show, setShow] = useState(false);
    const {setaddResponse} = useContext(addResponseContext)

    const handleClose = () => {
        setShow(false)
        handleCancel()
    };
    const handleShow = () => setShow(true);

    const [projectDetails, setprojectDetails] = useState({
        title: "",
        language: "",
        github: "",
        website: "",
        overview: "",
        projectImage: ""
    })

    const [image, setImage] = useState("")
    const [token, setToken] = useState("")
    const [key, setkey] = useState(true)

    // console.log(image);
    // console.log(projectDetails);
    // console.log(token);



    const handleFile = (e) => {
        //    console.log( e.target.files[0]);
        setprojectDetails({ ...projectDetails, projectImage: e.target.files[0] })
    }

    const handleCancel = () => {
        setprojectDetails({
            title: "",
            language: "",
            github: "",
            website: "",
            overview: "",
            projectImage: ""
        })
        setImage("")
        if (key == true) {
            setkey(false)
        }
        else {
            setkey(true)
        }
    }



    const handleAdd = async () => {
        const { title, language, github, website, overview, projectImage } = projectDetails
        if (!title || !language || !github || !website || !overview || !projectImage) {
            toast.info('Please fill the form')
        }
        else {
            const reqBody = new FormData()

            reqBody.append("title", title)
            reqBody.append("language", language)
            reqBody.append("github", github)
            reqBody.append("website", website)
            reqBody.append("overview", overview)
            reqBody.append("projectImage", projectImage)


            if (token) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                const result = await addprojectApi(reqBody, reqHeader)
                console.log(result);
                if (result.status == 200) {
                    toast.success('Project added successfully')
                    setTimeout(()=>{
                        handleClose()
                    },2005)
                    setaddResponse(result)
                }
                else if (result.status == 406) {
                    toast.warning(result.response.data)
                    handleCancel()
                }
                else {
                    toast.error('Something went wrong')
                    handleClose()
                }

            }
            else {
                toast.warning('Please Login')
            }

        }
    }

    useEffect(() => {
        if (projectDetails.projectImage) {
            setImage(URL.createObjectURL(projectDetails.projectImage))
        }
    }, [projectDetails.projectImage])

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
    }, [])

    return (
        <>
            <button className='btn btn-primary shadow' onClick={handleShow}>Add Project</button>


            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-success'>Add Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="projectImage">
                                <input id='projectImage' type="file" style={{ display: 'none' }} key={key} onChange={(e) => { handleFile(e) }} />
                                <img className='w-100' src={image ? image : "https://m.media-amazon.com/images/I/71sKzRQtXtL.png"} alt="" />
                            </label>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <input placeholder='Title' type="text" value={projectDetails.title} onChange={(e) => { setprojectDetails({ ...projectDetails, title: e.target.value }) }} className='form-control' name="" id="" />
                            </div>
                            <div className="mb-3">
                                <input placeholder='Language' type="text" value={projectDetails.language} onChange={(e) => { setprojectDetails({ ...projectDetails, language: e.target.value }) }} className='form-control' name="" id="" />
                            </div>
                            <div className="mb-3">
                                <input placeholder='GitHub' type="text" value={projectDetails.github} onChange={(e) => { setprojectDetails({ ...projectDetails, github: e.target.value }) }} className='form-control' name="" id="" />
                            </div>
                            <div className="mb-3">
                                <input placeholder='Website' type="text" value={projectDetails.website} onChange={(e) => { setprojectDetails({ ...projectDetails, website: e.target.value }) }} className='form-control' name="" id="" />
                            </div>
                            <div className="mb-3">
                                <textarea placeholder='Overview' name="" value={projectDetails.overview} onChange={(e) => { setprojectDetails({ ...projectDetails, overview: e.target.value }) }} className='form-control' id=""></textarea>
                            </div>
                        </div>
                    </div>

                    <ToastContainer theme='colored' position='top-center' autoClose={2000} />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Addproject