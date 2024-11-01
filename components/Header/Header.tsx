import React from 'react'
import styles from '../Header/Header.module.css'
import Navbar from '../Navbar/Navbar'

function Header() {
  return (
    <div className={styles.containar}>
      <Navbar/>

      <div className={styles.main}>
          <div className={styles.one}></div>
          <div className={styles.two}></div>
      </div>
      <div className={styles.current}>

        <div className={styles.onee}>Newly Launched</div>
        <div className={styles.twoo}>Kryo X26 MTB</div>
        <div className={styles.three}>
          <h3>Specifications:</h3>
          <p className={styles.pera}>&#xF18D; Lightweight 18 Frame</p>
          <p className={styles.pera}>&#xF18D; Steel Suspension Fork</p>
          <p className={styles.pera}>&#xF18D; Steel Hardtail Frame</p>
        </div>
        <div className={styles.fourr}>
          <button className={styles.btn} type='button'>BUY NOW</button>
        </div>

      </div>

    </div>
  )
}

export default Header
