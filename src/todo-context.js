import React, { createContext, useState, useContext } from 'react'
import { v4 } from "uuid"

export const TodosContext = createContext({});

export default function TodosProvider({ children }) {



    return (
        <TodosContext.Provider value={{}}>
            {children}
        </TodosContext.Provider>
    )
}