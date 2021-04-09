import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContexts';
import styles from '../styles/Components/ExperienceBar.module.css';

function ExpirienceBar(){
    const {currentExperience,experienceToNextLevel} = useContext(ChallengeContext);
    const percent = Math.round((currentExperience * 100/ experienceToNextLevel));
    return(
        <header className={styles.experienceBar}>
            <span>0xp</span>
            <div>
                <div style={{width: `${percent}%`}}/>
                <span className={styles.currentExperience} style={{left: `${percent}%`}}>{currentExperience}</span>
            </div>
            <span>{experienceToNextLevel}px</span>
        </header>
    );
}

export {ExpirienceBar};