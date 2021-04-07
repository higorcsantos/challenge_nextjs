import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import {ExpirienceBar} from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import styles from '../styles/Pages/Home.module.css';
import Head from 'next/head';


export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
          <title>Challenge App</title>
        </Head>
        <ExpirienceBar/>
        <section>
          <div>
            <Profile/>
            <CompletedChallenges/>
            <Countdown/>
          </div>
          <div>

          </div>
        </section>
    </div>
  )
}
