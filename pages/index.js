import React from "react";
import axios from "axios";
import styles from "../styles/LandingPage.module.css";
import placeHolderKey from "../placeholderKey.png";
import { useState, useEffect, useMemo } from "react";
import { BsFacebook, BsDiscord } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import HeaderLogo from "../components/svglogos/headerlogo";
import ThisLogo from "../components/svglogos/thislogo";
import GetInTouchLogo from "../components/svglogos/getintouchlogo";
import FooterLogoComponents from "../components/svglogos/kvplogofooter";
import BlackandGoldDecoration from "../components/svglogos/blackandgolddecoration";

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalFirstName, setModalFirstName] = useState("");
  const [modalEmail, setModalEmail] = useState("");
  console.log(styles.test);
  console.log(modalEmail, modalFirstName);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    let data = {
      first_name: modalFirstName,
      email: modalEmail,
    };
    axios.post("/api/emails", data).then((res) => {
      console.log(res);
    });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="min-h-full">
      <div className="lg:flex lg:justify-center bg-[#E5E5E5]">
        <div className="min-h-screen w-screen lg:w-[1200px] 2xl:w-[1440px] bg-white test">
          <div className="" /* THIS IS OUR HEADER COMPONENT*/>
            <div className="flex flex-row justify-center ">
              <HeaderLogo />
            </div>
            <ul className="hidden">
              <li className="">
                Home
                <hr className=""></hr>
              </li>
              <li className="">
                Marketplace
                <hr className=""></hr>
              </li>
              <li className="">
                Resource
                <hr className=""></hr>
              </li>
              <li className="">
                About
                <hr className=""></hr>
              </li>
            </ul>

            <button className="hidden">Buy Our NFT</button>
          </div>
          <hr className="mt-3"></hr>

          <div
            className="flex flex-col justify-center items-center" /* body component */
          >
            <div className="hidden lg:flex lg:w-full lg:justify-end lg:mr-10 xl:mr-44 lg:mt-10">
              {BlackandGoldDecoration.black()}
            </div>
            <div className="  rounded-lg mt-6">
              <h1 className="text-center font-body-header font-bold text-[35px] md:text-[50px]">
                Buy your KEY to a vacation home!
              </h1>

              <p className="text-center font-body-header text-[#565656] text-[12px] md:text-[20px]">
                Providing the next innovative entry to your future vacation
                rentals!
              </p>
              <div className="flex justify-center mt-[60px]">
                <button className="hidden bg-black w-[100px] h-[50px] rounded font-body-header text-white ml-2 text-[15px]">
                  Properties
                </button>
              </div>
            </div>
            <div className="hidden lg:flex lg:w-full lg:justify-start lg:ml-10 xl:ml-44">
              {BlackandGoldDecoration.gold()}
            </div>
          </div>
          <div className="flex justify-end mt-4 md:mr-16 lg:-skew-y-12 lg:mt-20">
            <ThisLogo />
          </div>
          <div
            className="flex flex-col justify-center h-max bg-black -skew-y-12 mt-20 relative z-10 lg:mt-0 lg:h-3/5 " /* PRODUCT PLACEMENT */
          >
            <div className="flex justify-center w-full">
              <div className="bg-white w-11/12 md:w-3/4 skew-y-12 -mt-20  ">
                <video className="w-full h-full " controls>
                  <source src="/productVideo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="flex flex-col skew-y-12 w-full h-full justify-center mt-6 lg:flex-row lg:mt-60">
              <div className="flex justify-center text-white ml-1 lg:basis-1/3">
                <img src={placeHolderKey.src} className="h-60 w-40" />
              </div>
              <div className="flex flex-col text-center text-white lg:basis-2/3">
                <h1 className="font-body-header text-[25px] text-white">
                  Our <span className="text-logo-gold"> product </span>,
                </h1>
                <h1 className="font-body-header text-[25px] text-white">
                  Everything <span className="text-logo-gold">about us</span>
                </h1>
                <p className="font-body-header text-[12px] mx-1">
                  {" "}
                  arcu eget. Eget blandit morbi vitae eget dolor. Amet pulvinar
                  id risus volutpat aliquam sed purus velit. Sapien netus
                  pretium magna sem viverra neque. Sed pellentesque varius
                  dolor, in purus integer lobortis vitae euismod. Nisl interdum
                  commodo quis. arcu eget. Eget blandit morbi vitae eget dolor.
                  Amet pulvinar id risus volutpat aliquam sed purus velit.
                  Sapien netus pretium magna sem viverra neque. Sed pellentesque
                  varius dolor, in purus integer lobortis vitae euismod. Nisl
                  interdum commodo quis. arcu eget. Eget blandit morbi vitae
                  eget dolor. Amet pulvinar id risus volutpat aliquam sed purus
                  velit. Sapien netus pretium magna sem viverra neque. Sed
                  pellentesque varius dolor, in purus integer lobortis vitae
                  euismod. Nisl interdum commodo quis. arcu eget. Eget blandit
                  morbi vitae eget dolor. Amet pulvinar id risus volutpat
                  aliquam sed purus velit. Sapien netus pretium magna sem
                  viverra neque. Sed pellentesque varius dolor, in purus integer
                  lobortis vitae euismod. Nisl interdum commodo quis. arcu eget.
                  Eget blandit morbi vitae eget dolor. Amet pulvinar id risus
                  volutpat aliquam sed purus velit. Sapien netus pretium magna
                  sem viverra neque. Sed pellentesque varius dolor, in purus
                  integer lobortis vitae euismod. Nisl interdum commodo quis.
                </p>
                <div className="flex items-center mt-1 ml-1">
                  <button className=" basis-3/12 border border-solid px-2 py-1 font-body-header text-[10px]">
                    Read More
                  </button>
                  <span className="basis-7/12 w-full mx-1">
                    <hr className="decoration-logo-gold"></hr>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-center " /* BOTTOM OF PAGE *NOT THE FOOTER* ### */
          >
            <div className="relative z-0 mx-2 mt-6 md:mt-16 md:mr-5">
              <GetInTouchLogo />
            </div>
            <div className="flex justify-center">
              {" "}
              <button
                className="bg-logo-gold border-2 border-solid border-zinc-600 w-[200px] h-[50px] rounded font-body-header mr-2 text-[15px] mb-1 shadow-lg lg:w-[300px] lg:text-[25px] lg:mt-8"
                onClick={showModal}
              >
                Project Development
              </button>
              <Modal visible={isModalVisible} closable={false} footer={null}>
                <div className="flex flex-col justify-center bg-logo-gold rounded-t">
                  <h1 className="font-body-header text-center text-[40px] mb-0">
                    Sign up
                  </h1>
                  <p className="text-center font-body-header">
                    Keep up to date with project development and announcements!
                    You will receive an update monthly
                  </p>
                </div>
                <div className="flex flex-col bg-logo-gold rounded-b">
                  <div className="flex flex-row justify-center">
                    <input
                      placeholder="Enter your first name..."
                      className="w-2/3 mb-1 border-solid outline-1 outline pl-1"
                      onChange={(e) => setModalFirstName(e.target.value)}
                    ></input>
                  </div>
                  <div className="flex flex-row justify-center ">
                    <input
                      placeholder="Enter your email..."
                      className="w-2/3 border-solid mt-1 mb-2 outline border-solid outline-1 pl-1"
                      onChange={(e) => setModalEmail(e.target.value)}
                    ></input>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <Button onClick={handleOk} type="primary" className="w-3/4">
                      Submit
                    </Button>
                    <button
                      className="text-[10px] mt-2 mb-2 underline font-body-header"
                      onClick={handleCancel}
                    >
                      No Thanks
                    </button>
                  </div>
                </div>
              </Modal>
            </div>
            <div className="flex flex-col mb-1 mt-6">
              <div className="flex flex-col text-center mb-2">
                <h1 className="font-body-header font-bold text-[20px] md:text-[25px]">
                  Questions?
                </h1>
              </div>
              <div className="flex flex-row space-x-4 text-center justify-center mb-2 ml-2">
                <p className=" text-right font-body-header text-[20px] font-medium md:text-[25px]">
                  keyvacationproperties@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h4 className="flex justify-center font-body-header md:text-[20px]">
              Follow our socials below!
            </h4>

            <div className="flex flex-row justify-center space-x-4 mb-1">
              <AiFillInstagram size={25} className="" />
              <AiFillTwitterCircle size={25} />
              <BsDiscord size={25} />
            </div>
          </div>
          <div
            /* THE FOOTER #############*/ className="flex flex-row  w-full bg-black"
          >
            <div className="flex flex-row basis-1/4 items-center justify-start text-white">
              <div>{FooterLogoComponents.kvpLogo()}</div>
              <div className="flex flex-col">
                <div>{FooterLogoComponents.vacation()}</div>
                <div>{FooterLogoComponents.properties()}</div>
              </div>
            </div>
            <div className="flex basis-2/4 justify-center items-center flex-row space-x-3 text-white mt-1 "></div>
            <div className="flex basis-1/4 justify-end items-center text-white mr-4">
              <p className="text-[8px] font-body-header mb-0 lg:text-[12px]">
                © 2022 All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
