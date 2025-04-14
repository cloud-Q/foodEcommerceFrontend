import React from 'react'
import MyContext from './MyContext'

const MyContextProvider = ({children}) => {


return (
<MyContext.Provider>
{children}
</MyContext.Provider>
)
}

export default MyContextProvider