import { createContext,useContext,useState, useEffect } from "react";
// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

export const ClimateContext = createContext()

export const useClimate = () => useContext(ClimateContext);

const useChange = () => {
    useEffect(() => {
        const changeTemp = setInterval(() => {
            if (DesiredTemperature > Temperature) setTemperature(Temperature + 1);
            if (DesiredTemperature < Temperature) setTemperature(Temperature - 1);
        }, 1000);

        //cleanup function
        return () => clearInterval(changeTemp);
    }, [Temperature]);
}

export default function ClimateProvider({children}){
    const [Temperature, setTemperature] = useState(50)
    const [Humidity, setHumidity] = useState(40)

    //desired
    const [DesiredTemperature, setDesiredTemperature] = useState(50);
    const [DesiredHumidity, setDesiredHumidity] = useState(40);


    return (
        <ClimateContext.Provider value={{
            Temperature, setTemperature,
            Humidity, setHumidity,
            DesiredHumidity, setDesiredHumidity,
            DesiredTemperature, setDesiredTemperature
        }}>
        {children}
        </ClimateContext.Provider>
    )
}
