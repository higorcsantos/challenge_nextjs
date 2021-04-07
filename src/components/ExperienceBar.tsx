import styles from '../styles/Components/ExperienceBar.module.css';

function ExpirienceBar(){
    return(
        <header className={styles.experienceBar}>
            <span>0xp</span>
            <div>
                <div style={{width: "50%"}}/>
                <span className={styles.currentExperience} style={{left: '50%'}}>300xp</span>
            </div>
            <span>600px</span>
        </header>
    );
}

export {ExpirienceBar};