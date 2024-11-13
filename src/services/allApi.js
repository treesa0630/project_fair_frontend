import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

// register
export const registerApi = async(reqBody)=>{
    return await commonApi('POST', `${serverUrl}/register`, reqBody,"")
}

// login
export const loginApi = async(reqBody)=>{
    return await commonApi('POST', `${serverUrl}/login`, reqBody,"")
}

// add project
export const addprojectApi = async(reqBody, reqHeader)=>{
    return await commonApi('POST', `${serverUrl}/add-project`, reqBody, reqHeader)
}

// get home project
export const getHomeProjectApi = async()=>{
    return await commonApi('GET', `${serverUrl}/home-project`)
}

// get all projects
export const getAllProjectsApi = async(searchKey,reqHeader)=>{
   // query-parameter = baseurl?key=value
//    path parameter = baseUrl/id , baseUrl/:id
    return await commonApi('GET', `${serverUrl}/all-project?search=${searchKey}`,"",reqHeader)
}

// get user project
export const getUserProjectApi = async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/user-project`,"",reqHeader)
}

// remove user project
export const removeUserProjectAPi = async(id, reqHeader)=>{
    return await commonApi('DELETE',`${serverUrl}/remove-userproject/${id}`,{},reqHeader)
}

// update project
export const updateUserProjectApi = async(id, reqBody, reqHeader)=>{
    return await commonApi('PUT',`${serverUrl}/update-userProject/${id}`,reqBody, reqHeader)
}

// update profile
export const updateUserProfileApi = async(reqBody, reqHeader)=>{
    return await commonApi('PUT',`${serverUrl}/update-userProfile`,reqBody, reqHeader)
}