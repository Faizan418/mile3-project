'use client'
import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import styles from '../Navbar/Navbar.module.css'

function Navbar() {
    
    const [menuActive, setMenuActive] = useState(false);

  function toggleMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <div className={styles.containar}>

        <nav className={styles.navbar}>
            <div className={styles.logo_div}>
                <Image src="/images/logo-1.png" alt="Logo" width={80} height={40} />
            </div>
            <div>
                <ul className={`${styles.ul_bar} ${menuActive ? styles.active : ""}`}>
                    <Link href={"#"}><li className={styles.li_bar}>HOME</li></Link>
                    <Link href={"#"}><li className={styles.li_bar}>BICYCLES</li></Link>
                    <Link href={"#"}><li className={styles.li_bar}>ACCESSORIES</li></Link>
                    <Link href={"#"}><li className={styles.li_bar}>ABOUT US</li></Link>
                    <Link href={"#"}><li className={styles.li_bar}>CONTACT</li></Link>
                </ul>
            </div>
            <div className={styles.value}>
                <p>$0.00 </p>
                <Image src={"/images/cart-check.svg"} alt='cart' height={20} width={20}/>
            </div>
            <div className={styles.hamburger} onClick={toggleMenu}>
                &#9776;
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar
