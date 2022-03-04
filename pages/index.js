import Head from "next/head";
import kvpLogo from "../kvp-logo.png";
import { useState, useEffect } from "react";
import styles from "../styles/LandingPage.module.css";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  console.log(isNavOpen);
  function RenderHamburgerMenu() {
    function closed() {
      return (
        <div className="flex items-center justify-between  justify-self-end ">
          <nav>
            <section className="MOBILE-MENU flex lg:hidden">
              <div
                className="HAMBURGER-ICON space-y-2"
                onClick={() => setIsNavOpen(true)}
              >
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600 m-0"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600 m-0"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600 m-0"></span>
              </div>
            </section>
          </nav>
        </div>
      );
    }

    function open() {
      return (
        <div>
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between ">
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/about">About</a>
            </li>
            {/* <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/portfolio">Portfolio</a>
            </li> */}
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      );
    }
    return isNavOpen ? open() : closed();
  }
  return (
    <div className="">
      <div className=" ">
        <div className="" /* THIS IS OUR HEADER COMPONENT*/>
          <div className="flex flex-row justify-center">
            <svg
              // width="198"
              // height="45"
              viewBox="0 0 198 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3/5"
            >
              <path
                d="M65.2827 5.74917V18.592H62.625V5.74917H65.2827ZM73.0079 5.74917L67.8962 12.0912L64.9461 15.249L64.4677 12.7439L66.461 10.0272L69.7478 5.74917H73.0079ZM69.987 18.592L66.1864 12.6557L68.1531 11.0151L73.132 18.592H69.987Z"
                fill="black"
              />
              <path
                d="M82.815 16.528V18.592H75.9492V16.528H82.815ZM76.8174 5.74917V18.592H74.1596V5.74917H76.8174ZM81.9202 10.9798V12.9909H75.9492V10.9798H81.9202ZM82.8061 5.74917V7.82201H75.9492V5.74917H82.8061Z"
                fill="black"
              />
              <path
                d="M86.1372 5.74917L88.8304 11.6061L91.5235 5.74917H94.4205L90.177 13.9171V18.592H87.4838V13.9171L83.2314 5.74917H86.1372Z"
                fill="black"
              />
              <path
                d="M104.768 15.9105L107.807 5.74917H110.766L106.274 18.592H104.325L104.768 15.9105ZM101.968 5.74917L104.998 15.9105L105.459 18.592H103.492L99.0272 5.74917H101.968Z"
                fill="black"
              />
              <path
                d="M116.542 7.9455L113.034 18.592H110.207L115 5.74917H116.799L116.542 7.9455ZM119.456 18.592L115.939 7.9455L115.656 5.74917H117.472L122.291 18.592H119.456ZM119.297 13.8112V15.8841H112.484V13.8112H119.297Z"
                fill="black"
              />
              <path
                d="M130.805 14.3316H133.454C133.401 15.196 133.162 15.9634 132.736 16.6338C132.317 17.3042 131.729 17.8275 130.973 18.2039C130.223 18.5802 129.32 18.7684 128.262 18.7684C127.436 18.7684 126.694 18.6273 126.039 18.345C125.383 18.0569 124.822 17.6452 124.356 17.1101C123.895 16.575 123.543 15.9282 123.301 15.1696C123.059 14.411 122.938 13.5613 122.938 12.6204V11.7295C122.938 10.7887 123.062 9.93896 123.31 9.18039C123.564 8.41593 123.924 7.76615 124.391 7.23103C124.863 6.69591 125.428 6.28428 126.083 5.99614C126.739 5.708 127.471 5.56393 128.28 5.56393C129.355 5.56393 130.262 5.75799 131 6.14609C131.744 6.5342 132.32 7.06932 132.727 7.75145C133.141 8.43357 133.389 9.20979 133.472 10.0801H130.814C130.784 9.56261 130.681 9.12452 130.504 8.76582C130.327 8.40123 130.058 8.12779 129.698 7.9455C129.343 7.75733 128.871 7.66324 128.28 7.66324C127.837 7.66324 127.45 7.74557 127.12 7.91022C126.789 8.07487 126.511 8.32479 126.287 8.65997C126.062 8.99515 125.894 9.41854 125.782 9.93014C125.676 10.4359 125.622 11.0298 125.622 11.7119V12.6204C125.622 13.2849 125.673 13.87 125.773 14.3757C125.873 14.8756 126.027 15.2989 126.234 15.6459C126.446 15.987 126.718 16.2457 127.049 16.4221C127.385 16.5926 127.79 16.6779 128.262 16.6779C128.818 16.6779 129.275 16.5897 129.636 16.4133C129.996 16.2369 130.271 15.9752 130.46 15.6283C130.654 15.2813 130.77 14.8491 130.805 14.3316Z"
                fill="black"
              />
              <path
                d="M140.444 7.9455L136.936 18.592H134.109L138.902 5.74917H140.701L140.444 7.9455ZM143.358 18.592L139.841 7.9455L139.558 5.74917H141.374L146.193 18.592H143.358ZM143.199 13.8112V15.8841H136.386V13.8112H143.199Z"
                fill="black"
              />
              <path
                d="M152.058 5.74917V18.592H149.409V5.74917H152.058ZM156.027 5.74917V7.82201H145.502V5.74917H156.027Z"
                fill="black"
              />
              <path
                d="M160.368 5.74917V18.592H157.719V5.74917H160.368Z"
                fill="black"
              />
              <path
                d="M173.453 11.8707V12.4793C173.453 13.4554 173.32 14.3316 173.054 15.1078C172.789 15.884 172.413 16.5456 171.929 17.0925C171.445 17.6335 170.866 18.048 170.193 18.3362C169.525 18.6243 168.784 18.7684 167.969 18.7684C167.16 18.7684 166.419 18.6243 165.745 18.3362C165.078 18.048 164.499 17.6335 164.009 17.0925C163.519 16.5456 163.138 15.884 162.866 15.1078C162.601 14.3316 162.468 13.4554 162.468 12.4793V11.8707C162.468 10.8886 162.601 10.0125 162.866 9.24213C163.132 8.46592 163.507 7.80437 163.991 7.25749C164.482 6.71061 165.06 6.2931 165.728 6.00496C166.401 5.71682 167.142 5.57275 167.951 5.57275C168.766 5.57275 169.508 5.71682 170.175 6.00496C170.848 6.2931 171.427 6.71061 171.911 7.25749C172.402 7.80437 172.78 8.46592 173.045 9.24213C173.317 10.0125 173.453 10.8886 173.453 11.8707ZM170.769 12.4793V11.853C170.769 11.1709 170.707 10.5711 170.583 10.0536C170.459 9.53615 170.275 9.101 170.033 8.74818C169.791 8.39535 169.496 8.13073 169.147 7.95432C168.799 7.77203 168.4 7.68088 167.951 7.68088C167.503 7.68088 167.104 7.77203 166.755 7.95432C166.413 8.13073 166.121 8.39535 165.878 8.74818C165.642 9.101 165.462 9.53615 165.338 10.0536C165.214 10.5711 165.152 11.1709 165.152 11.853V12.4793C165.152 13.1555 165.214 13.7553 165.338 14.2787C165.462 14.7962 165.645 15.2343 165.887 15.593C166.129 15.9458 166.425 16.2134 166.773 16.3956C167.122 16.5779 167.52 16.6691 167.969 16.6691C168.418 16.6691 168.817 16.5779 169.165 16.3956C169.514 16.2134 169.806 15.9458 170.042 15.593C170.278 15.2343 170.459 14.7962 170.583 14.2787C170.707 13.7553 170.769 13.1555 170.769 12.4793Z"
                fill="black"
              />
              <path
                d="M185.865 5.74917V18.592H183.207L178.024 9.98306V18.592H175.367V5.74917H178.024L183.216 14.3669V5.74917H185.865Z"
                fill="black"
              />
              <path
                d="M194.892 15.2313C194.892 15.002 194.857 14.7962 194.786 14.6139C194.721 14.4257 194.597 14.2552 194.414 14.1023C194.231 13.9435 193.974 13.7877 193.643 13.6348C193.312 13.4819 192.884 13.3231 192.358 13.1585C191.774 12.9703 191.219 12.7586 190.693 12.5234C190.173 12.2882 189.712 12.0147 189.311 11.7031C188.915 11.3855 188.602 11.018 188.372 10.6005C188.147 10.183 188.035 9.69786 188.035 9.1451C188.035 8.60999 188.153 8.12485 188.389 7.6897C188.626 7.24867 188.956 6.87233 189.382 6.56066C189.807 6.24312 190.309 5.99908 190.888 5.82855C191.472 5.65802 192.113 5.57275 192.81 5.57275C193.761 5.57275 194.591 5.74329 195.3 6.08435C196.008 6.42541 196.558 6.89291 196.947 7.48683C197.343 8.08075 197.541 8.75994 197.541 9.52439H194.901C194.901 9.14804 194.821 8.81874 194.662 8.53648C194.508 8.24834 194.272 8.02194 193.953 7.85729C193.64 7.69264 193.244 7.61032 192.766 7.61032C192.305 7.61032 191.921 7.68088 191.614 7.82201C191.307 7.95726 191.077 8.14249 190.923 8.37771C190.77 8.60705 190.693 8.86578 190.693 9.15392C190.693 9.3715 190.746 9.56849 190.852 9.7449C190.965 9.92132 191.13 10.086 191.348 10.2389C191.567 10.3917 191.836 10.5358 192.155 10.6711C192.474 10.8063 192.843 10.9386 193.262 11.068C193.965 11.2797 194.582 11.5178 195.114 11.7825C195.651 12.0471 196.1 12.344 196.46 12.6733C196.82 13.0026 197.092 13.3761 197.275 13.7936C197.458 14.2111 197.55 14.6844 197.55 15.2137C197.55 15.7723 197.441 16.2722 197.222 16.7132C197.004 17.1542 196.688 17.5276 196.274 17.8334C195.861 18.1392 195.368 18.3715 194.795 18.5302C194.222 18.689 193.581 18.7684 192.872 18.7684C192.234 18.7684 191.605 18.6861 190.985 18.5214C190.365 18.3509 189.801 18.0951 189.293 17.754C188.791 17.413 188.389 16.9778 188.088 16.4486C187.787 15.9193 187.636 15.2931 187.636 14.5698H190.303C190.303 14.9696 190.365 15.3078 190.489 15.5841C190.613 15.8605 190.787 16.084 191.012 16.2545C191.242 16.425 191.514 16.5485 191.827 16.625C192.146 16.7014 192.494 16.7396 192.872 16.7396C193.333 16.7396 193.711 16.675 194.006 16.5456C194.307 16.4162 194.529 16.2369 194.671 16.0075C194.818 15.7782 194.892 15.5195 194.892 15.2313Z"
                fill="black"
              />
              <path
                d="M66.477 38.95H63.72V37.8421H66.477C67.0109 37.8421 67.4432 37.7574 67.7739 37.588C68.1047 37.4187 68.3456 37.1835 68.4968 36.8824C68.6528 36.5813 68.7307 36.2379 68.7307 35.8521C68.7307 35.4993 68.6528 35.1677 68.4968 34.8572C68.3456 34.5467 68.1047 34.2974 67.7739 34.1092C67.4432 33.9163 67.0109 33.8199 66.477 33.8199H64.0389V42.9792H62.6711V32.705H66.477C67.2566 32.705 67.9157 32.839 68.4543 33.1072C68.993 33.3753 69.4017 33.747 69.6804 34.2221C69.9592 34.6925 70.0986 35.2312 70.0986 35.838C70.0986 36.4966 69.9592 37.0588 69.6804 37.5245C69.4017 37.9903 68.993 38.3454 68.4543 38.5901C67.9157 38.83 67.2566 38.95 66.477 38.95Z"
                fill="black"
              />
              <path
                d="M77.7064 32.705H81.1225C81.8974 32.705 82.5518 32.8226 83.0857 33.0578C83.6243 33.293 84.033 33.6411 84.3118 34.1021C84.5953 34.5585 84.737 35.1206 84.737 35.7886C84.737 36.2591 84.6402 36.6895 84.4464 37.08C84.2574 37.4657 83.9834 37.795 83.6243 38.0679C83.2699 38.336 82.8447 38.536 82.3486 38.6677L81.9659 38.8159H78.7553L78.7411 37.708H81.165C81.6564 37.708 82.0651 37.6233 82.3911 37.454C82.7171 37.2799 82.9628 37.047 83.1282 36.7554C83.2936 36.4637 83.3762 36.1415 83.3762 35.7886C83.3762 35.3935 83.2983 35.0477 83.1424 34.7513C82.9864 34.455 82.7408 34.2268 82.4053 34.0669C82.0745 33.9022 81.6469 33.8199 81.1225 33.8199H79.0742V42.9792H77.7064V32.705ZM83.7377 42.9792L81.2288 38.3219L82.6533 38.3149L85.1977 42.8945V42.9792H83.7377Z"
                fill="black"
              />
              <path
                d="M100.474 37.5175V38.1667C100.474 38.9382 100.377 39.6297 100.183 40.2413C99.9897 40.8528 99.7109 41.3727 99.3471 41.8008C98.9833 42.2289 98.5462 42.5558 98.0359 42.7816C97.5304 43.0074 96.9634 43.1203 96.335 43.1203C95.7255 43.1203 95.1656 43.0074 94.6553 42.7816C94.1497 42.5558 93.7103 42.2289 93.337 41.8008C92.9685 41.3727 92.6827 40.8528 92.4795 40.2413C92.2763 39.6297 92.1747 38.9382 92.1747 38.1667V37.5175C92.1747 36.746 92.274 36.0568 92.4724 35.4499C92.6756 34.8384 92.9614 34.3185 93.33 33.8904C93.6985 33.4576 94.1356 33.1283 94.6411 32.9025C95.1514 32.6767 95.7113 32.5638 96.3208 32.5638C96.9492 32.5638 97.5162 32.6767 98.0218 32.9025C98.5321 33.1283 98.9691 33.4576 99.3329 33.8904C99.7015 34.3185 99.9826 34.8384 100.176 35.4499C100.375 36.0568 100.474 36.746 100.474 37.5175ZM99.1203 38.1667V37.5034C99.1203 36.8918 99.0565 36.3508 98.9289 35.8804C98.8061 35.4099 98.6242 35.0148 98.3832 34.6949C98.1423 34.375 97.8469 34.1327 97.4973 33.9681C97.1524 33.8034 96.7602 33.7211 96.3208 33.7211C95.8956 33.7211 95.5105 33.8034 95.1656 33.9681C94.8254 34.1327 94.5324 34.375 94.2868 34.6949C94.0458 35.0148 93.8591 35.4099 93.7269 35.8804C93.5946 36.3508 93.5284 36.8918 93.5284 37.5034V38.1667C93.5284 38.7829 93.5946 39.3286 93.7269 39.8038C93.8591 40.2742 94.0481 40.6717 94.2938 40.9963C94.5443 41.3162 94.8396 41.5585 95.1798 41.7231C95.5247 41.8878 95.9097 41.9701 96.335 41.9701C96.7791 41.9701 97.1737 41.8878 97.5186 41.7231C97.8635 41.5585 98.1541 41.3162 98.3903 40.9963C98.6313 40.6717 98.8132 40.2742 98.936 39.8038C99.0589 39.3286 99.1203 38.7829 99.1203 38.1667Z"
                fill="black"
              />
              <path
                d="M112.207 38.95H109.45V37.8421H112.207C112.741 37.8421 113.173 37.7574 113.504 37.588C113.834 37.4187 114.075 37.1835 114.226 36.8824C114.382 36.5813 114.46 36.2379 114.46 35.8521C114.46 35.4993 114.382 35.1677 114.226 34.8572C114.075 34.5467 113.834 34.2974 113.504 34.1092C113.173 33.9163 112.741 33.8199 112.207 33.8199H109.769V42.9792H108.401V32.705H112.207C112.986 32.705 113.645 32.839 114.184 33.1072C114.723 33.3753 115.131 33.747 115.41 34.2221C115.689 34.6925 115.828 35.2312 115.828 35.838C115.828 36.4966 115.689 37.0588 115.41 37.5245C115.131 37.9903 114.723 38.3454 114.184 38.5901C113.645 38.83 112.986 38.95 112.207 38.95Z"
                fill="black"
              />
              <path
                d="M129.992 41.8713V42.9792H124.527V41.8713H129.992ZM124.804 32.705V42.9792H123.436V32.705H124.804ZM129.269 37.1223V38.2302H124.527V37.1223H129.269ZM129.921 32.705V33.8199H124.527V32.705H129.921Z"
                fill="black"
              />
              <path
                d="M137.564 32.705H140.98C141.755 32.705 142.41 32.8226 142.943 33.0578C143.482 33.293 143.891 33.6411 144.17 34.1021C144.453 34.5585 144.595 35.1206 144.595 35.7886C144.595 36.2591 144.498 36.6895 144.304 37.08C144.115 37.4657 143.841 37.795 143.482 38.0679C143.128 38.336 142.702 38.536 142.206 38.6677L141.824 38.8159H138.613L138.599 37.708H141.023C141.514 37.708 141.923 37.6233 142.249 37.454C142.575 37.2799 142.821 37.047 142.986 36.7554C143.151 36.4637 143.234 36.1415 143.234 35.7886C143.234 35.3935 143.156 35.0477 143 34.7513C142.844 34.455 142.599 34.2268 142.263 34.0669C141.932 33.9022 141.505 33.8199 140.98 33.8199H138.932V42.9792H137.564V32.705ZM143.596 42.9792L141.087 38.3219L142.511 38.3149L145.055 42.8945V42.9792H143.596Z"
                fill="black"
              />
              <path
                d="M155.633 32.705V42.9792H154.286V32.705H155.633ZM158.95 32.705V33.8199H150.977V32.705H158.95Z"
                fill="black"
              />
              <path
                d="M167.826 32.705V42.9792H166.458V32.705H167.826Z"
                fill="black"
              />
              <path
                d="M182.748 41.8713V42.9792H177.284V41.8713H182.748ZM177.56 32.705V42.9792H176.192V32.705H177.56ZM182.025 37.1223V38.2302H177.284V37.1223H182.025ZM182.677 32.705V33.8199H177.284V32.705H182.677Z"
                fill="black"
              />
              <path
                d="M195.82 40.3824C195.82 40.1425 195.782 39.9308 195.707 39.7473C195.636 39.5592 195.508 39.3898 195.324 39.2393C195.145 39.0887 194.894 38.9452 194.573 38.8088C194.256 38.6724 193.855 38.5336 193.368 38.3925C192.858 38.2419 192.397 38.0749 191.986 37.8915C191.575 37.7033 191.223 37.4893 190.93 37.2493C190.637 37.0094 190.413 36.7342 190.257 36.4237C190.101 36.1132 190.023 35.7581 190.023 35.3582C190.023 34.9583 190.106 34.589 190.271 34.2503C190.436 33.9116 190.673 33.6176 190.98 33.3683C191.291 33.1142 191.662 32.9167 192.092 32.7755C192.522 32.6344 193.002 32.5638 193.531 32.5638C194.306 32.5638 194.963 32.712 195.501 33.0084C196.045 33.3001 196.458 33.6835 196.742 34.1586C197.025 34.629 197.167 35.1324 197.167 35.6687H195.806C195.806 35.2829 195.723 34.9419 195.558 34.6455C195.393 34.3444 195.142 34.1092 194.807 33.9398C194.471 33.7658 194.046 33.6788 193.531 33.6788C193.044 33.6788 192.643 33.7517 192.326 33.8975C192.01 34.0433 191.773 34.2409 191.617 34.4902C191.466 34.7396 191.391 35.0242 191.391 35.3441C191.391 35.5605 191.436 35.7581 191.525 35.9368C191.62 36.1109 191.764 36.2732 191.958 36.4237C192.156 36.5743 192.407 36.713 192.709 36.8401C193.016 36.9671 193.382 37.0894 193.807 37.207C194.393 37.3716 194.899 37.5551 195.324 37.7574C195.749 37.9597 196.099 38.1878 196.373 38.4419C196.652 38.6912 196.857 38.9758 196.99 39.2957C197.127 39.6109 197.195 39.9684 197.195 40.3683C197.195 40.787 197.11 41.1657 196.94 41.5044C196.77 41.8431 196.527 42.1324 196.21 42.3723C195.894 42.6123 195.513 42.7981 195.069 42.9298C194.63 43.0568 194.138 43.1203 193.595 43.1203C193.118 43.1203 192.648 43.0545 192.184 42.9228C191.726 42.791 191.308 42.5934 190.93 42.33C190.557 42.0666 190.257 41.742 190.03 41.3562C189.808 40.9658 189.697 40.5141 189.697 40.0014H191.058C191.058 40.3542 191.126 40.6576 191.263 40.9117C191.4 41.161 191.587 41.368 191.823 41.5326C192.064 41.6973 192.336 41.8196 192.638 41.8996C192.945 41.9748 193.264 42.0125 193.595 42.0125C194.072 42.0125 194.476 41.9466 194.807 41.8149C195.138 41.6832 195.388 41.495 195.558 41.2504C195.733 41.0057 195.82 40.7164 195.82 40.3824Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M41.625 14.2985V45H30.2333C30.2078 43.3721 29.7341 41.7817 28.863 40.404C27.9669 38.9868 26.6869 37.8529 25.1719 37.1343V33.75L22.6406 31.2188L25.1719 28.6875L22.6406 26.1563L25.1719 23.625L22.6406 21.0938L25.1719 18.5625L21.375 14.7656L17.5781 18.5625V37.1343C16.1457 37.8137 14.9219 38.8651 14.0343 40.1787C13.1467 41.4923 12.6278 43.0201 12.5319 44.6026C12.5238 44.7351 12.5188 44.8676 12.5167 45H0V14.2985L20.8125 0L41.625 14.2985Z"
                fill="#EACD67"
              />
            </svg>
          </div>

          {/* <ul className="">
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

          <button className="">Buy Our NFT</button> */}
        </div>
        <hr className=""></hr>
        <div className="flex justify-center">
          <RenderHamburgerMenu />
        </div>
        <div className="" /* body component */>
          <div className="">
            <svg
              width="94"
              height="91"
              viewBox="0 0 94 91"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41.8615 2.16921L17.4153 7.87943L37.5564 18.0498L41.8615 2.16921Z"
                fill="black"
              />
              <path
                d="M40.974 28.5055L37.4462 39.6394L57.8455 50.2987L40.974 28.5055Z"
                fill="black"
              />
              <path
                d="M6.64323 26.2087L2.73154 36.6399L10.7405 38.5461L6.64323 26.2087Z"
                fill="black"
              />
              <path
                d="M80.3036 44.9477L68.2708 75.345L88.797 85.3289L80.3036 44.9477Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="">
            <h1 className="">Buy your KEY to a vacation home!</h1>

            <p className="">
              Digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
            </p>

            <div className="">
              <button className="bg-logo-gold w-[140px] h-[62px] font-body-header">
                Buy our NFT
              </button>
              <button className="bg-black w-[140px] h-[62px] font-body-header text-white">
                White Paper
              </button>
            </div>
          </div>
          <div className="">
            <svg
              width="119"
              height="119"
              viewBox="0 0 119 119"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M82.5295 100.207L101.823 84.1457L79.2602 84.0814L82.5295 100.207Z"
                fill="#EACD67"
              />
              <path
                d="M71.5187 76.2665L69.6821 64.7324L46.6689 64.3467L71.5187 76.2665Z"
                fill="#EACD67"
              />
              <path
                d="M103.238 62.9325L102.059 51.8545L94.0451 53.7401L103.238 62.9325Z"
                fill="#EACD67"
              />
              <path
                d="M28.9913 79.196L26.1236 46.6298L3.29979 46.9048L28.9913 79.196Z"
                fill="#EACD67"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
