import {createContext, ReactNode, useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json'

interface ChallengeProviderProps {
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
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

function ChallengeProvider({children, ...rest}: ChallengeProviderProps){
    const [level,setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted,setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
    const [activeChallenge,setActiveChallenge] = useState(null);

    // Constante que calcula a experiência para o próximo level
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    useEffect(() => {
        Notification.requestPermission()
    },[]);
    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengesCompleted', String(challengesCompleted))
    }, [level,currentExperience,challengesCompleted])

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