import React, { createContext, useContext, useState } from 'react'

const ApiContext = createContext();
function ApiProvider( { children } ) {

    const [ api,setApi ] = useState();//Api set as global state

  return (
      <ApiContext.Provider value = {{ api, setApi }} >
          {children}
      </ApiContext.Provider>

  )
};

export const ApiState = () => {
    return useContext(ApiContext)
}

export default ApiProvider