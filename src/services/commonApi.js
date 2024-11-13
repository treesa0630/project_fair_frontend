import axios from "axios"


export const commonApi = async(httpmethod, url, reqBody, reqHeader)=>{
    const reqConfig = {
        method: httpmethod,
        url,
        data:reqBody,
        headers: reqHeader?reqHeader : {"Content-Type":"application/json"}

    }
    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}