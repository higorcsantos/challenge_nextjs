import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContexts';
import styles from '../styles/components/ChallengeBox.module.css'

function ChallengeBox(){
    const hasActiveChallenge = true;
    const teste = useContext(ChallengeContext)
    console.log(teste);
    return(
        <div className={styles.challengeBoxContainer}>
            {hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400xp</header>
                    <main>
                        <img src="/icons/body.svg" alt=""/>
                        <strong>Novo Desafio</strong>
                        <p>Vamos exercitar e alongar para um bom descanso</p>
                        
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