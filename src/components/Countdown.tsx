import styles from '../styles/components/Countdown.module.css';
import 'react';
import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';



function Countdown(){
    
    const {
        hasFinished,
        isActive,
        minutes,
        resetCountdown,
        seconds,
        startCountdown
        } = useContext(CountdownContext)
    const [minuteLeft,minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft,secondRight] = String(seconds).padStart(2,'0').split('');
    

  
    
    return(
        
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            {hasFinished ?(
                <button 
                type="button"
                disabled 
                className={styles.countdownButton}
                >
                    Ciclo Terminado
                </button> 
             ) : (
                 <>
                    {isActive ? (
                <button type="button" 
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountdown}>
                    Abandonar Ciclo
                </button> 
            ) : (
                <button type="button" 
                className={styles.countdownButton}
                onClick={startCountdown}>
                    Iniciar Ciclo
                 </button>
            )}
                 </>
             )}
            
            
            
        </div>
    )
}

export {Countdown}