import styles from '../styles/components/Profile.module.css';

function Profile(){
    return(
        <div className = {styles.profileContainer}>
            <img src="https://github.com/Higorcsantos.png" alt="Higor Santos"/>
            <div>
                <strong>Higor Cerqueira dos Santos</strong>
                <p>
                    Level 1
                </p>
            </div>
        </div>
    )
}

export {Profile};