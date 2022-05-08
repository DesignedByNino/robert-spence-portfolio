import Image from "next/image";
import styles from "./hero-center-content.module.scss";
import heroImageAsset from "../public/images/design/liquid-dev-01.jpeg";

export default function HeroCenterContent() {
  return (
    <div className={styles.mainWrap}>
      <div className={styles.leftSideWrap}>
        <p className={styles.centerTextLine}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
          consequatur voluptatum
        </p>
        <h1 className={styles.mainCenterHeading}>
          Business expertise you can leverage
        </h1>
        <p className={styles.baselineDescription}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint rem,
          temporibus molestias praesentium aperiam sit cupiditate impedit
          consectetur, nihil alias voluptatum nostrum corporis harum nulla.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
          inventore?
        </p>
        <button className={styles.baselineButton}>Contact</button>
      </div>
      <div className={styles.heroImageWrap}>
        <Image
          className={styles.heroImageAsset}
          src={heroImageAsset}
          alt='Picture of the author'
        />
        {/* <Image
          className={styles.heroImageAsset2}
          src={heroImageAsset}
          alt='Picture of the author'
        />
        <Image
          className={styles.heroImageAsset3}
          src={heroImageAsset}
          alt='Picture of the author'
        /> */}
      </div>
    </div>
  );
}
