import Head from "next/head";
import kvpLogo from "../kvp-logo.png";
import styles from "../styles/LandingPage.module.css";

export default function Home() {
  console.log(kvpLogo);
  return (
    <div className={styles.webpageContainer}>
      <div className={styles.container}>
        <div className="headerComponent" /* THIS IS OUR HEADER COMPONENT*/>
          <div className={styles.headerLogoTitle}>
            <img src={kvpLogo.src} />
          </div>

          <ul className={styles.headerNavigationContainer}>
            <li className={styles.headerNavigationLink}>
              Home
              <hr className={styles.headerLineUnderHome}></hr>
            </li>
            <li className={styles.headerNavigationLink}>
              Marketplace
              <hr className={styles.headerLineUnderMarketplace}></hr>
            </li>
            <li className={styles.headerNavigationLink}>
              Resource
              <hr className={styles.headerLineUnderResource}></hr>
            </li>
            <lit className={styles.headerNavigationLink}>
              About
              <hr className={styles.headerLineUnderAbout}></hr>
            </lit>
          </ul>

          <button className={styles.headerButton}>Buy Our NFT</button>
        </div>
        <hr className={styles.headerLineBreak}></hr>
        <div className="" /* body component */>
          <h1 className={styles.bodyMainHeader}>
            Discover, and collect Digital Art NFTs
          </h1>
        </div>
      </div>
    </div>
  );
}
