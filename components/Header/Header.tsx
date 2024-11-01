import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../Header/Header.module.css'
import Navbar from '../Navbar/Navbar'

function Header() {
  return (
    <div className={styles.containar}>
      <Navbar/>

        <div className={styles.main}>

            <div className={styles.one}>

                <h2 className={styles.heading_two}>Newly Leunched</h2>
                  <div className={styles.h_o}>
                    <h1 className={styles.heading_one}>Kryo X26 MTB </h1>
                  </div>
                <h3 className={styles.heading_three}>Specifications:</h3>
                <p className={styles.pera}>Lightweight 18 Frame</p>
                <p className={styles.pera}>Steel Suspension</p>
                <p className={styles.pera}>Steel Hardtail Frame</p>
                <Link href={"#"}><button className={styles.btn} type="button">BUY NOW</button></Link>

            </div>

            <div className={styles.two}></div>

        </div>
    </div>
  )
}

export default Header
