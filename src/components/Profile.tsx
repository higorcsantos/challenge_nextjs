import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContexts';
import styles from '../styles/components/Profile.module.css';

function Profile(){
    const {level} = useContext(ChallengeContext)
    return(
        <div className = {styles.profileContainer}>
            <img src="https://github.com/Higorcsantos.png" alt="Higor Santos"/>
            <div>
                <strong>Higor Cerqueira dos Santos</strong>
                <p>
                    level {level}
                </p>
            </div>
        </div>
    )
}

export {Profile};