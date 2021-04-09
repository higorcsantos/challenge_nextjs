import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContexts';
import styles from '../styles/components/ChallengeBox.module.css'

function ChallengeBox(){
    const {activeChallenge} = useContext(ChallengeContext)
    
    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount}</header>
                    <main>
                        <img src={`/icons/${activeChallenge.type}.svg `}alt=""/>
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                        
                    </main>
                    <footer>
                            <button 
                            type='button'
                            className={styles.successButton}
                            >
                                Completei</button>
                            <button 
                            type='button'
                            className={styles.failedButton}
                            >
                                Falhei</button>
                        </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber mais desafios</strong>
                    <p>
                        <img src="icons/level.svg" alt="Level Up"/>
                        Avance de level completando os desafios
                    </p>
                </div>
            )}
        </div>
    )
}

export {ChallengeBox};