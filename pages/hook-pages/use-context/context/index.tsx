import React, { useState, createContext, PropsWithChildren, useMemo } from "react";

type User = {
    userName: string;
    updateUser: (name: string) => void;
}

export const MyContext = createContext<User>({ userName: "", updateUser: () => null });

export default function ContextProvider({ children }: PropsWithChildren) {
    const [userName, setUserName] = useState("Hudson");

    const memo = useMemo(() => ({ userName, updateUser: (name: string) => setUserName(name) }), [userName])

    return (
        <MyContext.Provider value={memo}>
            {children}
        </MyContext.Provider>
    );
}
