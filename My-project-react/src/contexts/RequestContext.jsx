/**
 * src/contexts/RequestContext.jsx
 *
 * description
 */


import React, { createContext, useState } from 'react'


export const RequestContext = createContext()


export const RequestProvider = ({ children }) => {
  const [ request, setRequest ] = useState({
    name: "",
    telephone: "",
    email: "",
    favor: "design project",
    comment: "",
    privacyPolicy: false,
  })
  const [ discount, setDiscount ] = useState({
    task: "",
    city: ""
  })
  

  console.log("request:", request);
  console.log("discount:", discount);
  
  

  return (
    <RequestContext.Provider
      value ={{
        request,
        setRequest,
        discount,
        setDiscount
      }}
    >
      {children}
    </RequestContext.Provider>
  )
}