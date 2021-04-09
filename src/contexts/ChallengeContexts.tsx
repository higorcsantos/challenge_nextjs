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
    experienceToNextLevel: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
}
const ChallengeContext = createContext({} as ChallengeContextData);

function ChallengeProvider({children}: ChallengeProviderProps){
    const [level,setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(30);
    const [challengesCompleted,setChallengesCompleted] = useState(0);
    const [activeChallenge,setActiveChallenge] = useState(null);

    // Constante que calcula a experiência para o próximo level
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    function levelUp(){
        setLevel(level + 1);
    }

    function startNewChallenge(){
        //gerar um desafio randomico
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge);

    }

    // Função para quando o usuario falhar
    function resetChallenge(){
        setActiveChallenge(null)
    }

    return(
        <ChallengeContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted, 
            activeChallenge,
            experienceToNextLevel,
            levelUp,
            startNewChallenge,
            resetChallenge
            }}>
            {children}
        </ChallengeContext.Provider>
    )
}




export {ChallengeContext,ChallengeProvider};