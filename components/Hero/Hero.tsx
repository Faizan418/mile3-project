import React from 'react'
import styles from '../Hero/Hero.module.css'
import Image from 'next/image'

function Hero() {
  return (
    <div className={styles.container} id='bicycles'>

        <div className={styles.one}>
            <h1 className={styles.head_one}><i>New Arrivals</i></h1>
        </div>
        
        <div className={styles.two}>
            <div className={styles.card}>
                <Image src={'/images/bicycle-1.jpg'} alt='one' height={180} width={270}/>
                <p>Bicycles</p>
                <h2>Kryo X26 MTB--Model K</h2>
                <p>--------</p>
                <h1>$350.00</h1>
            </div>
            <div className={styles.card}>
                <Image src={'/images/bicycle-2.jpg'} alt='two' height={180} width={270}/>
                <p>Bicycles</p>
                <h2>Kryo X26 MTB--Model X</h2>
                <p>--------</p>
                <h1>$350.00</h1>
            </div>
            <div className={styles.card}>
                <Image src={'/images/bicycle-3.jpg'} alt='three' height={180} width={270}/>
                <p>Bicycles</p>
                <h2>Kryo X26 MTB--Model Y</h2>
                <p>--------</p>
                <h1>$350.00</h1>
            </div>
            <div className={styles.card}>
                <Image src={'/images/bicycle-4.jpg'} alt='four' height={180} width={270}/>
                <p>Bicycles</p>
                <h2>Kryo X26 MTB--Model Z</h2>
                <p>--------</p>
                <h1>$350.00</h1>
            </div>
        </div>
        
      
    </div>
  )
}

export default Hero;