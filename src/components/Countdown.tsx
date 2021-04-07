import styles from '../styles/components/Countdown.module.css';
import 'react';
import { useEffect, useState } from 'react';


function Countdown(){
    //estado para inicializar o contador em 25 minutos
    const [time,setTime] = useState(15 * 60);
    const [active,setActive] = useState(false)

    // Arredondar os minutos para que não tenha numeros quebrados
    const minutes = Math.floor(time / 60);
    // Retornar os segundos pelo resto da divisão
    const seconds = time % 60;

    const [minuteLeft,minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft,secondRight] = String(seconds).padStart(2,'0').split('');
    

    function startCountdown(){
        setActive(true)
    }
    //quando o botão mudar o estado do active e quando o time mudar, senão mudaria
    useEffect(() => {
        if(active && time){
            setTimeout(() => {
                setTime(time - 1);
            },1000)
        }
    }, [active,time])
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
            <button type="button" 
            className={styles.countdownButton}
            onClick={startCountdown}>
                Iniciar Ciclo
            </button>
        </div>
    )
}

export {Countdown}