import Head from "next/head";
import kvpLogo from "../kvp-logo.png";

import styles from "../styles/LandingPage.module.css";

export default function Home() {
  console.log(kvpLogo);
  return (
    <div className="">
      <div className="">
        <div className="headerComponent" /* THIS IS OUR HEADER COMPONENT*/>
          <div className="">
            <img src={kvpLogo.src} />
          </div>

          <ul className="">
            <li className="">
              Home
              <hr className=""></hr>
            </li>
            <li className="text-lg">
              Marketplace
              <hr className=""></hr>
            </li>
            <li className="">
              Resource
              <hr className=""></hr>
            </li>
            <lit className="">
              About
              <hr className=""></hr>
            </lit>
          </ul>

          <button className="">Buy Our NFT</button>
        </div>
        <hr className=""></hr>
        <div className="" /* body component */>
          <h1 className="">Buy your KEY to a vacation home!</h1>
          <p className="">Testing</p>
        </div>
      </div>
    </div>
  );
}
