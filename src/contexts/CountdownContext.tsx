import { createContext, ReactNode,useContext,useState,useEffect } from "react";
import { ChallengeContext } from "./ChallengeContexts";

interface CountdownContextData{
     minutes: number;
     seconds: number;
     hasFinished: boolean;
     isActive: boolean;
     resetCountdown: () => void;
     startCountdown: () => void;
}
interface CountdownProviderProps{
    children: ReactNode;
}
const CountdownContext = createContext({} as CountdownContextData);
let countDownTimeOut: NodeJS.Timeout;

function CountdownProvider({children}: CountdownProviderProps){
    const {startNewChallenge} = useContext(ChallengeContext);
    //estado para inicializar o contador em 25 minutos
    const [time,setTime] = useState(0.05 * 60);
    // Verificar se o countdown está ativo ou não
    const [isActive,setIsActive] = useState(false);
    // Verificar se o countdown zerou
    const [hasFinished,setHasFinished] = useState(false);

    function startCountdown(){
        setIsActive(true);
    }
    function resetCountdown(){
        clearTimeout(countDownTimeOut);
        setIsActive(false);
        setTime(0.05 * 60);
    }
    //quando o botão mudar o estado do active e quando o time mudar, senão mudaria
    useEffect(() => {
        if(isActive && time > 0){
            countDownTimeOut = setTimeout(() => {
                setTime(time - 1);
            },1000)
        }else if(isActive && time===0){
            setIsActive(false);
            setHasFinished(true);
            startNewChallenge();
        }
    }, [isActive,time])

    // Arredondar os minutos para que não tenha numeros quebrados
    const minutes = Math.floor(time / 60);
    // Retornar os segundos pelo resto da divisão
    const seconds = time % 60;
    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            resetCountdown,
            startCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}

export {CountdownProvider,CountdownContext}