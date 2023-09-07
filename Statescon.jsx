import React,{createContext,useState} from "react";
export const States = createContext();
const Stateprovider = ({child})=>{
    const [activetag,setactivetag]=useState(0)
    return <StateContext.Provider value={{activetag,setactivetag}}>{child}</StateContext.Provider>
}



export default Stateprovider;