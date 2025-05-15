import { createContext, useContext, ReactNode } from "react";

const userData = {
    id: 1,
    name: 'John Doe',
    cousers: [
        { courseId: 1, dateJoined: "2023-02-15" },
        { courseId: 3, dateJoined: "2023-03-10" },
        { courseId: 5, dateJoined: "2023-04-05" }
    ]
}; 

const UserContext = createContext(userData);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    );
};