import React, { createContext, useState } from "react";
export  let UserContext = createContext();
function UserContextProvider({ children }) {
    let [user, setUser] = useState(undefined);
    let data = {user, setUser}; 

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
