import styles from "./main-nav.module.scss";

export default function MainNav() {
  return (
    <div className={styles.mainNav}>
      <div className={styles.ambianceContainer}>👾</div>
      <div className={styles.mainLogoContainer}>
        <span className={styles.mainLogo}>Robert Spence</span>
      </div>
      <div className={styles.menuContainer}>
        <svg width='100' height='40' xmlns='http://www.w3.org/2000/svg'>
          <g fill='#000' fill-rule='nonzero' fill-opacity='.85'>
            <path d='M0 0h99.047619v5.71428571H0zM15.2380952 17.1428571H99.047619v5.71428571H15.2380952zM0 34.2857143h99.047619v5.71428571H0z' />
          </g>
        </svg>
      </div>
    </div>
  );
}
