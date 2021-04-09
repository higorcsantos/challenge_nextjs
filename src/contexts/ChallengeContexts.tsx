import {createContext, ReactNode, useEffect, useState} from 'react'
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
    completeChallenge: () => void;
}
const ChallengeContext = createContext({} as ChallengeContextData);

function ChallengeProvider({children}: ChallengeProviderProps){
    const [level,setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted,setChallengesCompleted] = useState(0);
    const [activeChallenge,setActiveChallenge] = useState(null);

    // Constante que calcula a experiência para o próximo level
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    useEffect(() => {
        Notification.requestPermission()
    },[])

    function levelUp(){
        setLevel(level + 1);
    }

    function startNewChallenge(){
        //gerar um desafio randomico
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge);

        new Audio('/public_notification.mp3').play();

        if(Notification.permission === 'granted'){
            new Notification('Novo Desafio 🎉',{
                body: `Valendo ${challenge.amount} xp`
            });
        }

    }

    // Função para quando o usuario falhar
    function resetChallenge(){
        setActiveChallenge(null)
    }
    
    // Função para completar um desafio 
    function completeChallenge(){
        if(!activeChallenge){
            return;
        }
        const {amount} = activeChallenge;

        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setActiveChallenge(null);
        setCurrentExperience(finalExperience);
        setChallengesCompleted(challengesCompleted + 1);
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
            resetChallenge,
            completeChallenge
            }}>
            {children}
        </ChallengeContext.Provider>
    )
}




export {ChallengeContext,ChallengeProvider};