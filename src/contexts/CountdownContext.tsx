import { createContext, ReactNode } from "react";

interface CountdownContextData{

}
interface CountdownProviderProps{
    children: ReactNode;
}
const CountdownContext = createContext({} as CountdownContextData);

function CountdownProvider({children}: CountdownProviderProps){
    return(
        <CountdownContext.Provider value={{}}>
            {children}
        </CountdownContext.Provider>
    )
}

export {CountdownProvider}