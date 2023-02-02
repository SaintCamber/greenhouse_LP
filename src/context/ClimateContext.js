import { createContext,useContext,useState } from "react";
// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
export const ClimateContext = createContext()

export const useClimate = () => useContext(ClimateContext);

export default function ClimateProvider({children}){
    const [Temperature,setTemperature] = useState(50)


    return (
        <ClimateContext.Provider value={{
            Temperature,setTemperature}}>
        {children}
        </ClimateContext.Provider>
    )
}