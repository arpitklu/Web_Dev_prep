import React, { createContext } from 'react'

export const DataContext = createContext() 

const UserContext = ({children}) => {

    // console.log(props.children)
    const userData = {
        username:"Arppit Kumar Mishra",
        age:21,
        city:"Damanjodi"
    }

  return (
    <div>
        <DataContext.Provider value={userData}>
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default UserContext
