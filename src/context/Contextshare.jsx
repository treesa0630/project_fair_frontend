import React, { createContext, useState } from 'react'

export const addResponseContext = createContext({})
export const editResponseContext = createContext({})
export const loginResponseContext = createContext({})

function Contextshare({children}) {
    const [addResponse, setaddResponse] = useState([])
    const [editResponse, seteditResponse] = useState([])
    const [loginResponse, setLoginResponse] = useState(true)

  return (
    <>
   <addResponseContext.Provider value={{addResponse, setaddResponse}}> 
    <editResponseContext.Provider value={{editResponse, seteditResponse}}>
      <loginResponseContext.Provider value={{loginResponse, setLoginResponse}}>
        {children}
        </loginResponseContext.Provider>
      </editResponseContext.Provider>
    </addResponseContext.Provider>
    </>
  )
}

export default Contextshare