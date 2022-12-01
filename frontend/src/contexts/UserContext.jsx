import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {

    const [user, SetUser] = useState(
        localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []
    );

    //SetUser(JSON.parse(localStorage.getItem('user')));

    return (
        <UserContext.Provider value={{ user, SetUser }} >
            {children}
        </UserContext.Provider>
    );
}
