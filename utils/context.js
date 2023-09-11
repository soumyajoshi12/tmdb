// MyContext.js
"use client"
import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export function useMyContext() {
  return useContext(MyContext);
}

export function MyContextProvider({ children }) {
  const [users, setusers] = useState("summi");

  return (
    <MyContext.Provider value={[users, setusers]}>
      {children}
    </MyContext.Provider>
  );
}
