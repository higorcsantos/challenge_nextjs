import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import {ExpirienceBar} from '../components/ExperienceBar';
import { Profile } from '../components/Profile'
import styles from '../styles/Pages/Home.module.css';
import Head from 'next/head';
import {GetServerSideProps} from 'next'
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import {ChallengeProvider} from '../contexts/ChallengeContexts'

interface HomeProps{
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  console.log(props);
  return (
    <ChallengeProvider 
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}>
    <div className={styles.container}>
        <Head>
          <title>Challenge App</title>
        </Head>
        <ExpirienceBar/>
        <CountdownProvider>
          <section>
            <div>
              <Profile/>
              <CompletedChallenges/>
              <Countdown/>
            </div>
            <div>
              <ChallengeBox/>
            </div>
          </section>
        </CountdownProvider>
    </div>
    </ChallengeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {level, currentExperience,challengesCompleted} = ctx.req.cookies;
  
  
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
    
  }
}