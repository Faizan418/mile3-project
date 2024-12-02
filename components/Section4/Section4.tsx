import React from "react";
import Image from "next/image";
import styles from "../Section4/Section4.module.css";

function Section4() {
  return (
    <div className={styles.container} id="bicycles">
      <div className={styles.one}>
        <h1 className={styles.head_one}>
          <i>Explore Accessories</i>
        </h1>
      </div>

      <div className={styles.two}>

        <div className={styles.card}>
          <Image
            src={"/images/accessories-1.jpg"}
            alt="one"
            height={180}
            width={270}
          />
          <p className={styles.nam}>Accessories</p>
          <h2 className={styles.modl}>Bicycle Gloves Blue</h2>
          <p>--------</p>
          <p className={styles.price}>$30.00--$50.00</p>
        </div>
        <div className={styles.card}>
          <Image
            src={"/images/accessories-2.jpg"}
            alt="two"
            height={180}
            width={270}
          />
          <p className={styles.nam}>Accessories</p>
          <h2 className={styles.modl}>Bicycle Gloves Gold</h2>
          <p>--------</p>
          <p className={styles.price}>$30.00--$50.00</p>
        </div>
        <div className={styles.card}>
          <Image
            src={"/images/accessories-3.jpg"}
            alt="three"
            height={180}
            width={270}
          />
          <p className={styles.nam}>Accessories</p>
          <h2 className={styles.modl}>Bicycle Gloves pink</h2>
          <p>--------</p>
          <p className={styles.price}>$30.00--$50.00</p>
        </div>
        <div className={styles.card}>
          <Image
            src={"/images/accessories-4.jpg"}
            alt="four"
            height={180}
            width={270}
          />
          <p className={styles.nam}>Accessories</p>
          <h2 className={styles.modl}>Bicycle Gloves Red</h2>
          <p>--------</p>
          <p className={styles.price}>$30.00--$50.00</p>
        </div>
        <div className={styles.card}>
          <Image
            src={"/images/accessories-4.jpg"}
            alt="four"
            height={180}
            width={270}
          />
          <p className={styles.nam}>Accessories</p>
          <h2 className={styles.modl}>Bicycle Gloves Red</h2>
          <p>--------</p>
          <p className={styles.price}>$30.00--$50.00</p>
        </div>
        <div className={styles.card}>
          <Image
            src={"/images/accessories-4.jpg"}
            alt="four"
            height={180}
            width={270}
          />
          <p className={styles.nam}>Accessories</p>
          <h2 className={styles.modl}>Bicycle Gloves Red</h2>
          <p>--------</p>
          <p className={styles.price}>$30.00--$50.00</p>
        </div>
        <div className={styles.card}>
          <Image
            src={"/images/accessories-4.jpg"}
            alt="four"
            height={180}
            width={270}
          />
          <p className={styles.nam}>Accessories</p>
          <h2 className={styles.modl}>Bicycle Gloves Red</h2>
          <p>--------</p>
          <p className={styles.price}>$30.00--$50.00</p>
        </div>
        <div className={styles.card}>
          <Image
            src={"/images/accessories-4.jpg"}
            alt="four"
            height={180}
            width={270}
          />
          <p className={styles.nam}>Accessories</p>
          <h2 className={styles.modl}>Bicycle Gloves Red</h2>
          <p>--------</p>
          <p className={styles.price}>$30.00--$50.00</p>
        </div>
        <div className={styles.card}>
          <Image
            src={"/images/accessories-4.jpg"}
            alt="four"
            height={180}
            width={270}
          />
          <p className={styles.nam}>Accessories</p>
          <h2 className={styles.modl}>Bicycle Gloves Red</h2>
          <p>--------</p>
          <p className={styles.price}>$30.00--$50.00</p>
        </div>
        <div className={styles.card}>
          <Image
            src={"/images/accessories-4.jpg"}
            alt="four"
            height={180}
            width={270}
          />
          <p className={styles.nam}>Accessories</p>
          <h2 className={styles.modl}>Bicycle Gloves Red</h2>
          <p>--------</p>
          <p className={styles.price}>$30.00--$50.00</p>
        </div>

      </div>

      <div className={styles.last_div}>
        <button className={styles.last_btn} type="button">
          VIEW ALL
        </button>
      </div>
    </div>
  );
}

export default Section4;
