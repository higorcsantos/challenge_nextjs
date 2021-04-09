import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContexts';
import styles from '../styles/components/CompletedChallenges.module.css';

function CompletedChallenges(){
    const {challengesCompleted} = useContext(ChallengeContext)
    return(
        <div className={styles.challengesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}

export {CompletedChallenges}