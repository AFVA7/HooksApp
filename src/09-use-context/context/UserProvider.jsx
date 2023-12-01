import { useState } from "react";
import { UserContext } from "./UserContext"

const usuario = {
    id: 1234,
    name: 'andres',
    email: 'andres@gmail.com'
}

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(usuario);
  return (
    <UserContext.Provider value = {{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

