import {createContext, ReactNode, useState} from 'react'
import challenges from '../../challenges.json'

interface ChallengeProviderProps {
    children: ReactNode
}
interface Challenge{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
interface ChallengeContextData{
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    activeChallenge: Challenge
}
const ChallengeContext = createContext({} as ChallengeContextData);

function ChallengeProvider({children}: ChallengeProviderProps){
    const [level,setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted,setChallengesCompleted] = useState(0);
    const [activeChallenge,setActiveChallenge] = useState(null);

    function levelUp(){
        setLevel(level + 1);
    }

    function startNewChallenge(){
        //gerar um desafio randomico
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge);

    }

    return(
        <ChallengeContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted, 
            levelUp,
            startNewChallenge,
            activeChallenge,
            }}>
            {children}
        </ChallengeContext.Provider>
    )
}




export {ChallengeContext,ChallengeProvider};