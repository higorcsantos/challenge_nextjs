import {createContext, ReactNode, useState} from 'react'

interface ChallengeProviderProps {
    children: ReactNode
}
interface ChallengeContextData{
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
}
const ChallengeContext = createContext({} as ChallengeContextData);

function ChallengeProvider({children}: ChallengeProviderProps){
    const [level,setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted,setChallengesCompleted] = useState(0);

    function levelUp(){
        setLevel(level + 1);
    }

    function startNewChallenge(){
        console.log('new challenge');
    }

    return(
        <ChallengeContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted, 
            levelUp,
            startNewChallenge}}>
            {children}
        </ChallengeContext.Provider>
    )
}




export {ChallengeContext,ChallengeProvider};