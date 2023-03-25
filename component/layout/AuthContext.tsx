// import React, { createContext } from 'react';

// export const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//     const [count, setCount] = React.useState(0);
  
//     const incrementCount = () => {
//       setCount(count + 1);
//     };
  
//     const decrementCount = () => {
//       setCount(count - 1);
//     };
  
//     return (
//       <AppContext.Provider value={{ count, incrementCount, decrementCount }}>
//         {children}
//       </AppContext.Provider>
//     );
//   };

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

type LoggedInContextType = {
  isLoggedIn: boolean,
  
  // count: number;
  // setCount: React.Dispatch<React.SetStateAction<number>>;
};
type children ={
  children: ReactNode
}
const LoggedInContext = createContext<LoggedInContextType>({
  // count: 0,
  // setCount: () => {},
  isLoggedIn: false
  
});

export const useLoggedInContext = () => useContext(LoggedInContext);

export const LoggedInProvider = ({ children }: children) => {
  // const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const getUserDetails = async () => {
      const token = localStorage.getItem('token');
    
      if(!token){
        console.log(123)
      }
  
      try {
        const response = await fetch(`${API_ENDPOINT}/seller/get_account`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
    
        const user = await response.json();
        
        if(user.success){
          setIsLoggedIn(true)
        }else{
          setIsLoggedIn(false)
        }
       
        
        
        // Do something with the user details...
      } catch (error) {
        console.error(error);
        setIsLoggedIn(false)
      }
    };
    getUserDetails()
  })
  console.log(isLoggedIn)
  return (
    <LoggedInContext.Provider value={{ isLoggedIn }}>
      {children}
    </LoggedInContext.Provider>
  );
};


  