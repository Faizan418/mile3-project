import React from "react";
import styles from "../Section5/Section5.module.css";

function Section5() {
  return (
    <div className={styles.containar}>
      <div className={styles.main}>
        <div className={styles.one}>
          <h2 className={styles.first_heading}>
            <i> The All New </i>
          </h2>
        </div>
        <div className={styles.two}>
          <h1 className={styles.second_heading}>
            <i>Kryo X26 MTB Is Here</i>
          </h1>
        </div>
        <div className={styles.three}>
          <p className={styles.third_heading}>
            Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
            vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Mauris in erat justo.
          </p>
        </div>
        <div className={styles.four}>
          <button className={styles.btn} type="button">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section5;
