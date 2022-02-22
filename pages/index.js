import Head from "next/head";
import kvpLogo from "../kvp-logo.png";

import styles from "../styles/LandingPage.module.css";

export default function Home() {
  console.log(kvpLogo);
  return (
    <div className="flex justify-center top-4">
      <div className="w-[1440px] flex flex-col mt-[45px]">
        <div
          className="flex justify-between flex-wrap" /* THIS IS OUR HEADER COMPONENT*/
        >
          <div className="flex items-center">
            <img src={kvpLogo.src} className=" w-[197px]" />
          </div>

          <ul className="flex grow justify-between mr-40 ml-40 items-center">
            <li className="hover:font-bold">
              Home
              <hr className=""></hr>
            </li>
            <li className="hover:font-bold">
              Marketplace
              <hr className=""></hr>
            </li>
            <li className="hover:font-bold">
              Resource
              <hr className=""></hr>
            </li>
            <li className="hover:font-bold">
              About
              <hr className=""></hr>
            </li>
          </ul>

          <button className="flex items-center bg-logo-gold w-[140px] h-[48px] justify-center">
            Buy Our NFT
          </button>
        </div>
        <hr className="mt-[45px]"></hr>
        <div className="" /* body component */>
          <h1 className="">Buy your KEY to a vacation home!</h1>
          <p className="">Testing</p>
        </div>
      </div>
    </div>
  );
}
