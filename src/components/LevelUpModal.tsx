import { createContext, useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContexts';
import styles from '../styles/components/LevelUpModal.module.css'

function LevelUpModal(){
    const {level,openModal} = useContext(ChallengeContext)
    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo nível</p>
                <button onClick={openModal}>
                    <img src="/icons/close.svg" alt="Fechar Modal"/>
                </button>
            </div>
        </div>
    )
}

export {LevelUpModal};