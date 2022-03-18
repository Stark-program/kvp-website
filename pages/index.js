import React from "react";

import placeHolderKey from "../placeholderKey.png";

import kvpLogo from "../kvp_logo.svg";
import { useState, useEffect, useMemo } from "react";
import styles from "../styles/LandingPage.module.css";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  console.log(kvpLogo);
  function RenderHamburgerMenu() {
    function closed() {
      return (
        <div className="flex items-center justify-between justify-self-end ">
          <nav>
            <section className="MOBILE-MENU flex lg:hidden">
              <div
                className="HAMBURGER-ICON space-y-1"
                onClick={() => setIsNavOpen(true)}
              >
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>
            </section>
          </nav>
        </div>
      );
    }

    function open() {
      return (
        <div className="grid grid-cols-7 w-full justify-center">
          <div
            className="flex col-start-7 justify-end py-1 px-1"
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
          <ul className="NAVIGATION-MOBILE-OPEN col-start-4 row-start-1 flex flex-col items-center justify-between ">
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
    <div className="lg:flex lg:justify-center">
      <div className="min-h-screen w-screen">
        <div className="" /* THIS IS OUR HEADER COMPONENT*/>
          <div className="flex flex-row justify-center ">
            <svg
              // width="934"
              // height="576"
              viewBox="0 0 934 576"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3/5 drop-shadow-lg h-24 mt-2"
            >
              {/* <path
                d="M202.13 565.27H210.37L206.25 553.49L202.13 565.27Z"
                fill="url(#paint0_radial_97_4)"
              />
              <path
                d="M415.46 545.83H410.9L416.18 554.27C417.68 554.08 421.13 553.35 421.13 550.05C421.13 545.83 415.46 545.83 415.46 545.83Z"
                fill="url(#paint1_radial_97_4)"
              />
              <path
                d="M493.03 545.3C489.15 545.3 486.05 548.4 486.05 552.28C486.05 556.16 489.15 559.26 493.03 559.26C496.91 559.26 500.01 556.16 500.01 552.28C500.01 548.4 496.91 545.3 493.03 545.3Z"
                fill="url(#paint2_radial_97_4)"
              />
              <path
                d="M533.41 545.83H528.85L534.13 554.27C535.63 554.08 539.08 553.35 539.08 550.05C539.09 545.83 533.41 545.83 533.41 545.83Z"
                fill="url(#paint3_radial_97_4)"
              />
              <path
                d="M121.99 565.27H130.23L126.11 553.49L121.99 565.27Z"
                fill="url(#paint4_radial_97_4)"
              />
              <path
                d="M615.3 550.05C615.3 545.83 609.63 545.83 609.63 545.83H605.07L610.35 554.27C611.86 554.12 615.3 553.39 615.3 550.05Z"
                fill="url(#paint5_radial_97_4)"
              />
              <path
                d="M302.98 545.3C299.1 545.3 296 548.4 296 552.28C296 556.16 299.1 559.26 302.98 559.26C306.86 559.26 309.96 556.16 309.96 552.28C309.96 548.4 306.85 545.3 302.98 545.3Z"
                fill="url(#paint6_radial_97_4)"
              />
              <path
                d="M92.0298 560.23L97.2098 545.78H86.7898L92.0298 560.23Z"
                fill="url(#paint7_radial_97_4)"
              />
              <path
                d="M459.14 550.05C459.14 545.83 453.47 545.83 453.47 545.83H448.91L454.19 554.27C455.7 554.12 459.14 553.39 459.14 550.05Z"
                fill="url(#paint8_radial_97_4)"
              /> */}
              <path
                d="M324.56 203.51H260.78L135.41 357.72V256.29L84.2898 285.92V509.3H135.41V425.43L164.24 393.1L258.6 509.3H325.43L198.31 359.03L324.56 203.51Z"
                fill="url(#paint9_radial_97_4)"
              />
              <path
                d="M135.41 119.68H84.2898V210.79L135.41 181.16V119.68Z"
                fill="url(#paint10_radial_97_4)"
              />
              <path
                d="M570.5 254.62V203.51H366.5V509.3H570.5V458.19H417.61V381.74H544.73V331.07H417.61V254.62H570.5Z"
                fill="url(#paint11_radial_97_4)"
              />
              {/* <path
                d="M92.03 575.5L105.55 540.16H78.45L92.03 575.5ZM92.03 560.23L86.7899 545.78H97.21L92.03 560.23Z"
                fill="url(#paint12_radial_97_4)"
              />
              <path
                d="M112.58 574.1H118.69L120.14 570.17H132.07L133.57 574.1H139.68L126.11 539.19L112.58 574.1ZM121.99 565.27L126.11 553.49L130.23 565.27H121.99Z"
                fill="url(#paint13_radial_97_4)"
              />
              <path
                d="M169.07 545.35C172.17 545.35 175.03 546.61 177.07 548.65L181.04 544.67C177.99 541.57 173.77 539.68 169.07 539.68C159.13 539.68 152.05 546.9 152.05 557.13C152.05 567.8 159.71 574.58 169.07 574.58C173.77 574.58 177.99 572.69 181.04 569.64L177.07 565.62C175.03 567.66 172.17 568.92 169.07 568.92C162.82 568.92 157.82 564.41 157.82 557.14C157.82 550.29 162.08 545.35 169.07 545.35Z"
                fill="url(#paint14_radial_97_4)"
              />
              <path
                d="M192.73 574.1H198.84L200.29 570.17H212.22L213.72 574.1H219.83L206.26 539.19L192.73 574.1ZM202.13 565.27L206.25 553.49L210.37 565.27H202.13Z"
                fill="url(#paint15_radial_97_4)"
              />
              <path
                d="M230.49 545.35H237.62V574.1H243.24V545.35H250.37V540.16H230.49V545.35Z"
                fill="url(#paint16_radial_97_4)"
              />
              <path
                d="M272.19 545.35H275.97V540.16H262.74V545.35H266.52V568.91H262.54V574.1H276.16V568.91H272.19V545.35Z"
                fill="url(#paint17_radial_97_4)"
              />
              <path
                d="M302.98 539.67C296.05 539.67 290.38 545.34 290.38 552.27C290.38 559.2 296.05 564.88 302.98 564.88C309.91 564.88 315.58 559.21 315.58 552.27C315.58 545.35 309.91 539.67 302.98 539.67ZM302.98 559.26C299.1 559.26 296 556.16 296 552.28C296 548.4 299.1 545.3 302.98 545.3C306.86 545.3 309.96 548.4 309.96 552.28C309.96 556.16 306.85 559.26 302.98 559.26Z"
                fill="url(#paint18_radial_97_4)"
              />
              <path
                d="M314.03 568.47H291.63V574.09H314.03V568.47Z"
                fill="url(#paint19_radial_97_4)"
              />
              <path
                d="M354.71 564.3L337.79 540.16H332.07V574.1H337.74V549.95L354.61 574.1H360.33V540.16H354.71V564.3Z"
                fill="url(#paint20_radial_97_4)"
              />
              <path
                d="M415.46 540.16H404.16V545.83L409.54 554.31H404.16V574.09H409.83V559.93H415.45C415.45 559.93 426.75 559.93 426.75 550.04C426.75 540.16 415.46 540.16 415.46 540.16ZM416.18 554.27L410.9 545.83H415.46C415.46 545.83 421.13 545.83 421.13 550.05C421.13 553.35 417.69 554.07 416.18 554.27Z"
                fill="url(#paint21_radial_97_4)"
              />
              <path
                d="M464.81 550.05C464.81 540.16 453.47 540.16 453.47 540.16H442.17V545.83L447.55 554.31H442.17V574.09H447.84V559.93H451.09L459.91 574.09H466.55L457.34 559.35C460.64 558.44 464.81 556.06 464.81 550.05ZM448.91 545.83H453.47C453.47 545.83 459.14 545.83 459.14 550.05C459.14 553.39 455.7 554.12 454.19 554.27L448.91 545.83Z"
                fill="url(#paint22_radial_97_4)"
              />
              <path
                d="M493.03 539.67C486.1 539.67 480.43 545.34 480.43 552.27C480.43 559.2 486.1 564.88 493.03 564.88C499.96 564.88 505.64 559.21 505.64 552.27C505.63 545.35 499.96 539.67 493.03 539.67ZM493.03 559.26C489.15 559.26 486.05 556.16 486.05 552.28C486.05 548.4 489.15 545.3 493.03 545.3C496.91 545.3 500.01 548.4 500.01 552.28C500.01 556.16 496.91 559.26 493.03 559.26Z"
                fill="url(#paint23_radial_97_4)"
              />
              <path
                d="M504.08 568.47H481.68V574.09H504.08V568.47Z"
                fill="url(#paint24_radial_97_4)"
              />
              <path
                d="M533.41 540.16H522.11V545.83L527.49 554.31H522.11V574.09H527.78V559.93H533.4C533.4 559.93 544.7 559.93 544.7 550.04C544.71 540.16 533.41 540.16 533.41 540.16ZM534.14 554.27L528.86 545.83H533.42C533.42 545.83 539.09 545.83 539.09 550.05C539.09 553.35 535.65 554.07 534.14 554.27Z"
                fill="url(#paint25_radial_97_4)"
              />
              <path
                d="M560.08 574.1H582.72V568.42H565.75V559.94H579.86V554.31H565.75V545.83H582.72V540.16H560.08V574.1Z"
                fill="url(#paint26_radial_97_4)"
              />
              <path
                d="M620.97 550.05C620.97 540.16 609.63 540.16 609.63 540.16H598.33V545.83L603.71 554.31H598.33V574.09H604V559.93H607.25L616.07 574.09H622.71L613.5 559.35C616.8 558.44 620.97 556.06 620.97 550.05ZM605.07 545.83H609.63C609.63 545.83 615.3 545.83 615.3 550.05C615.3 553.39 611.86 554.12 610.35 554.27L605.07 545.83Z"
                fill="url(#paint27_radial_97_4)"
              />
              <path
                d="M634.79 545.35H641.92V574.1H647.54V545.35H654.67V540.16H634.79V545.35Z"
                fill="url(#paint28_radial_97_4)"
              />
              <path
                d="M676.49 545.35H680.27V540.16H667.04V545.35H670.82V568.91H666.84V574.1H680.46V568.91H676.49V545.35Z"
                fill="url(#paint29_radial_97_4)"
              />
              <path
                d="M695.74 574.1H718.38V568.42H701.41V559.94H715.52V554.31H701.41V545.83H718.38V540.16H695.74V574.1Z"
                fill="url(#paint30_radial_97_4)"
              /> */}
              {/* <path
                d="M748.39 555.48C745.97 554.36 743.59 554.36 743.35 554.36C740.83 554.36 738.4 552.86 738.4 550.05C738.4 546.9 740.68 545.35 743.35 545.35C745.92 545.35 748.1 546.61 748.2 549.42H753.82C753.72 543.65 749.22 539.68 743.35 539.68C737.87 539.68 732.73 543.61 732.73 550.05C732.73 554.07 734.72 557.08 738.26 558.73C740.73 559.84 743.06 559.84 743.35 559.84C745.63 559.94 748.29 561.68 748.29 564.54C748.29 567.21 745.96 568.9 743.35 568.9C740.83 568.9 738.5 567.49 738.4 564.68H732.73C732.83 571.03 737.48 574.42 743.35 574.57C748.83 574.57 753.92 571.03 753.92 564.53C753.92 560.52 751.98 557.13 748.39 555.48Z"
                fill="url(#paint31_radial_97_4)"
              /> */}
              <path
                d="M467 0.5L0.899902 270.69L23.4698 309.62L467 52.51L910.53 309.62L933.1 270.69L467 0.5Z"
                fill="url(#paint32_radial_97_4)"
              />
              <path
                d="M821.21 271.61L822.32 270.04L778.14 244.43L777.03 246L729.52 312.73L651.32 203.51H588.85L703.74 364.71V509.31H732.73H754.86H781.33V490.25H754.86V480.57H797.21V461.51H754.86V451.84H781.33V432.78H754.86V364.71L821.21 271.61Z"
                fill="url(#paint33_radial_97_4)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.47 -196.767) scale(743.237 743.239)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.47 -196.77) scale(743.236 743.243)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint2_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.47 -196.763) scale(743.239 743.235)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint3_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.47 -196.77) scale(743.236 743.243)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint4_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.47 -196.767) scale(743.237 743.239)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint5_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.47 -196.77) scale(743.245 743.243)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint6_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.471 -196.763) scale(743.239 743.235)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint7_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.472 -196.762) scale(743.241 743.235)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint8_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.471 -196.77) scale(743.24 743.243)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint9_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.47 -196.765) scale(743.238)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint10_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.47 -196.765) scale(743.237)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint11_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.471 -196.765) scale(743.237)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint12_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.47 -196.764) scale(743.237)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint13_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.47 -196.765) scale(743.237 743.238)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint14_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.47 -196.763) scale(743.237 743.235)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint15_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.471 -196.765) scale(743.239 743.238)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint16_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.47 -196.763) scale(743.238 743.236)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint17_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.47 -196.763) scale(743.237 743.236)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint18_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.471 -196.764) scale(743.238 743.236)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint19_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.471 -196.764) scale(743.238 743.237)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint20_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.471 -196.763) scale(743.238 743.236)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint21_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.471 -196.763) scale(743.238 743.236)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint22_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.471 -196.763) scale(743.238 743.236)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint23_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.471 -196.764) scale(743.238 743.236)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint24_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.47 -196.764) scale(743.236 743.237)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint25_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.47 -196.763) scale(743.236 743.236)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint26_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.47 -196.763) scale(743.238 743.236)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint27_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.47 -196.763) scale(743.238 743.236)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint28_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.471 -196.763) scale(743.238 743.236)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint29_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.471 -196.763) scale(743.237 743.236)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint30_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.47 -196.763) scale(743.238 743.236)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint31_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.47 -196.762) scale(743.24 743.235)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint32_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.47 -196.765) scale(743.237)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
                <radialGradient
                  id="paint33_radial_97_4"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(538.47 -196.765) scale(743.237)"
                >
                  <stop stop-color="#FFFBCC" />
                  <stop offset="0.1171" stop-color="#FBEEB7" />
                  <stop offset="0.3487" stop-color="#EFD88C" />
                  <stop offset="0.3708" stop-color="#EED688" />
                  <stop offset="0.6854" stop-color="#EBBB10" />
                  <stop offset="1" stop-color="#C3922E" />
                </radialGradient>
              </defs>
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
        <hr className="mt-3"></hr>
        {/* <div className="flex justify-center">
          <div className="flex justify-center bg-gray-200 w-3/4 rounded py-1">
            <RenderHamburgerMenu />
          </div>
        </div> */}
        <div
          className="flex flex-col justify-center items-center" /* body component */
        >
          <div className="hidden">
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
          <div className="shadow-slate-300 shadow-2xl rounded-lg mt-6">
            <h1 className="text-center font-body-header font-bold text-[35px]">
              Buy your KEY to a vacation home!
            </h1>

            <p className="text-center font-body-header text-[#565656] text-[12px]">
              Providing the next innovative entry to your future vacation
              rentals!
            </p>

            <div className="flex justify-center mt-[60px]">
              <button className="bg-logo-gold w-[100px] h-[50px] rounded font-body-header mr-2 text-[15px] mb-1">
                Buy a Key
              </button>
              <button className="bg-black w-[100px] h-[50px] rounded font-body-header text-white ml-2 text-[15px]">
                Properties
              </button>
            </div>
          </div>
          <div className="hidden">
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
        <div className="flex justify-end mt-4">
          <svg
            width="60"
            height="40"
            viewBox="0 0 79 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-5 mt-5 mb-3"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.55596 0.00257342C6.39665 -0.0460731 7.11733 0.600813 7.16564 1.44743C7.19293 1.92575 7.23431 2.65582 7.28607 3.56898C7.59694 9.05338 8.28217 21.1422 8.53748 24.9611C8.54184 25.0264 8.5462 25.0916 8.55055 25.1568C8.64814 26.618 8.74365 28.048 8.8885 29.467C10.4654 28.7817 12.0341 28.217 13.6149 27.6552C14.4089 27.373 15.2798 27.7924 15.5601 28.5921C15.8404 29.3918 15.4238 30.2688 14.6298 30.5511C12.5985 31.273 10.7352 31.9492 8.87186 32.8466C8.84166 32.8612 8.79875 32.8821 8.75362 32.9042C8.68857 32.9359 8.61892 32.9699 8.57608 32.9902C8.49661 33.0279 8.33952 33.102 8.16514 33.1539C8.0268 33.195 7.56414 33.3244 7.03904 33.109C6.42892 32.8588 6.19008 32.3477 6.10596 32.0995C6.02765 31.8685 6.0071 31.6491 5.99853 31.5528C5.98867 31.442 5.98231 31.3153 5.9769 31.2077L5.97585 31.1869C5.96371 30.9461 5.94829 30.6466 5.90448 30.2479C5.72515 28.6159 5.61598 26.9807 5.50942 25.3846C5.50458 25.3121 5.49975 25.2397 5.49491 25.1674C5.23836 21.3298 4.55144 9.21085 4.24101 3.73405C4.18946 2.82467 4.1483 2.09842 4.12121 1.6236C4.0729 0.776977 4.71526 0.05122 5.55596 0.00257342ZM9.03824 31.3005C9.03816 31.3008 9.03749 31.2962 9.0365 31.2861C9.03782 31.2951 9.03832 31.3002 9.03824 31.3005Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.323 16.2099C16.3713 16.9648 15.7312 17.612 14.8931 17.6556L2.33533 18.3081C1.49727 18.3517 0.778701 17.775 0.730351 17.0202C0.682002 16.2653 1.32218 15.6181 2.16024 15.5745L14.718 14.9219C15.5561 14.8784 16.2746 15.455 16.323 16.2099Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.0853 0.00471345C19.9235 -0.0606257 20.6564 0.561006 20.7222 1.39317C20.9038 3.68841 21.0747 5.98153 21.2453 8.27186C21.5955 12.9705 21.9447 17.6575 22.3833 22.3269C23.1605 20.7094 24.2387 19.221 25.7233 18.2785C26.1124 18.0315 26.6109 17.8804 27.1621 17.9671C27.6813 18.0487 28.0689 18.3138 28.3272 18.555C28.8074 19.0036 29.1285 19.6413 29.3547 20.1805C29.8327 21.3203 30.237 22.9137 30.5898 24.4477C30.734 25.0744 30.8696 25.6911 31.0004 26.2859C31.2045 27.2141 31.397 28.0893 31.5922 28.8672C31.7501 29.4966 31.894 29.9952 32.0247 30.3474C32.0781 30.4912 32.1205 30.5863 32.1494 30.6436C32.6781 31.1612 32.7591 31.9989 32.3074 32.6114C31.8106 33.2849 30.858 33.4312 30.1795 32.938C29.833 32.6862 29.6231 32.3551 29.506 32.1461C29.373 31.9088 29.262 31.6469 29.1676 31.3927C28.9784 30.883 28.8028 30.2568 28.6375 29.5978C28.4343 28.7877 28.2223 27.8253 28.0089 26.8558C27.8797 26.2693 27.75 25.6802 27.6213 25.1207C27.279 23.6326 26.9389 22.3287 26.5906 21.4571C25.7436 22.3146 25.0305 23.6179 24.4909 25.2176C23.8098 27.2372 23.4892 29.4823 23.4477 31.2444C23.4425 31.4685 23.4348 31.7363 23.4026 31.9266C23.3965 31.9623 23.3856 32.0207 23.3666 32.0899C23.3534 32.1384 23.3105 32.2923 23.2087 32.4658L23.208 32.4669C23.1608 32.5474 22.7647 33.2224 21.8842 33.2196C21.0656 33.217 20.6672 32.6175 20.6192 32.5452L20.6169 32.5417C20.513 32.3866 20.4621 32.2475 20.4456 32.2013C20.4226 32.1373 20.4078 32.083 20.3994 32.0498C20.3824 31.9831 20.3714 31.9236 20.365 31.8872C20.341 31.7491 20.3097 31.4706 20.2829 31.2324C20.2704 31.1214 20.259 31.0192 20.2497 30.944C19.3246 23.4749 18.7626 15.9322 18.2048 8.44537C18.0351 6.16712 17.8657 3.89405 17.6866 1.62978C17.6208 0.79762 18.247 0.0700527 19.0853 0.00471345ZM32.1821 30.7015C32.182 30.7017 32.1789 30.6973 32.173 30.6872C32.1793 30.6961 32.1822 30.7012 32.1821 30.7015Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M35.2992 16.2875C36.1354 16.1838 36.8957 16.7911 36.9974 17.6441C37.2361 19.6469 37.49 21.6735 37.7444 23.7046C38.0704 26.3067 38.3973 28.9161 38.6944 31.4924C38.7929 32.3457 38.1945 33.1189 37.3579 33.2192C36.5213 33.3196 35.7633 32.7093 35.6648 31.8559C35.3669 29.2725 35.0456 26.709 34.723 24.135C34.469 22.1081 34.2141 20.0746 33.9692 18.0196C33.8675 17.1667 34.463 16.3912 35.2992 16.2875Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M34.9017 9.50456C34.6906 9.47861 34.4707 9.50121 34.2564 9.57964C33.4979 9.85728 33.0969 10.7294 33.3608 11.5277C33.423 11.716 33.4807 11.882 33.5342 12.0271C33.5873 12.1708 33.6392 12.3022 33.6905 12.419C33.7163 12.4778 33.7439 12.5373 33.7732 12.5958C33.802 12.6532 33.8367 12.7178 33.8773 12.7843C33.898 12.8181 33.9222 12.8556 33.95 12.8951C33.9775 12.9341 34.0117 12.9797 34.053 13.028C34.0936 13.0755 34.148 13.1339 34.2167 13.1943C34.2842 13.2536 34.3803 13.3279 34.5053 13.3945C34.631 13.4614 34.805 13.5305 35.0194 13.5545C35.1274 13.5667 35.2428 13.5669 35.3627 13.5508C35.4829 13.5346 35.6003 13.503 35.7125 13.4568C35.9393 13.3636 36.1116 13.2251 36.2349 13.0915C36.355 12.9614 36.4334 12.8311 36.4836 12.7316C36.5344 12.6309 36.5672 12.5395 36.5887 12.4694C36.6106 12.3981 36.6251 12.3341 36.635 12.2824C36.6543 12.1813 36.6624 12.0929 36.6662 12.0293C36.6703 11.9629 36.6709 11.9019 36.6703 11.8501C36.6696 11.7975 36.6674 11.7471 36.6646 11.7007C36.6589 11.6087 36.6496 11.5179 36.6389 11.4338C36.6178 11.2681 36.5865 11.0912 36.5484 10.9291C36.5294 10.8481 36.5052 10.7557 36.4749 10.662C36.4595 10.6147 36.4399 10.5586 36.4154 10.4984C36.4029 10.4678 36.388 10.4332 36.3704 10.3959C36.3529 10.3591 36.3306 10.3152 36.3031 10.2673C36.276 10.2203 36.2386 10.1604 36.1895 10.0953C36.1419 10.032 36.0697 9.94574 35.9696 9.85833C35.871 9.7722 35.7168 9.66004 35.5057 9.58348C35.3978 9.54436 35.2748 9.51453 35.1393 9.50354C35.0609 9.49719 34.9815 9.49741 34.9017 9.50456ZM36.4231 11.3449C36.4236 11.3387 36.4239 11.3358 36.424 11.3359C36.424 11.3361 36.4238 11.3392 36.4231 11.3449Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M51.584 16.7644C51.7703 17.5736 51.2652 18.3806 50.456 18.5669C50.2385 18.617 49.91 18.6753 49.5076 18.7468C48.3836 18.9464 46.6829 19.2484 45.2126 19.7588C44.7409 19.9225 44.3536 20.09 44.0656 20.2538C44.0257 20.2765 43.9895 20.298 43.9568 20.3184C44.0002 20.3553 44.0508 20.396 44.1097 20.4405C44.729 20.9079 45.4992 21.2657 46.401 21.5862C46.9844 21.7936 47.5348 21.9579 48.1124 22.1303C48.4754 22.2387 48.8492 22.3502 49.2486 22.4777C49.3747 22.518 49.5543 22.5641 49.8136 22.6307C49.9445 22.6643 50.0957 22.7031 50.2707 22.7491C50.745 22.8736 51.3238 23.034 51.8929 23.2365C52.4489 23.4344 53.0721 23.6987 53.6013 24.0571C54.0978 24.3934 54.7635 24.9833 54.9403 25.9115C55.1128 26.8171 54.7046 27.5502 54.3087 28.0126C53.9147 28.4728 53.388 28.8475 52.8723 29.152C51.8275 29.769 50.4457 30.3163 49.1065 30.7724C46.8554 31.5389 44.4391 32.1385 43.415 32.3927C43.2152 32.4423 43.0684 32.4787 42.9861 32.5007C42.1838 32.7148 41.3598 32.238 41.1456 31.4357C40.9314 30.6334 41.4082 29.8094 42.2106 29.5953C42.3275 29.564 42.5131 29.5178 42.7538 29.4579C43.8377 29.1881 46.0403 28.6397 48.1371 27.9257C49.4243 27.4875 50.5703 27.0191 51.3432 26.5627C51.453 26.4978 51.5481 26.4374 51.6299 26.3817C51.4303 26.2801 51.1804 26.1748 50.8846 26.0696C50.438 25.9106 49.9576 25.7759 49.5069 25.6576C49.4007 25.6297 49.2892 25.601 49.1772 25.5723C48.8639 25.4918 48.5473 25.4105 48.3343 25.3425C48.0467 25.2507 47.7205 25.1529 47.3759 25.0495C46.7359 24.8576 46.0323 24.6466 45.3939 24.4197C44.3634 24.0535 43.2681 23.5728 42.2981 22.8408C41.6932 22.3842 41.1413 21.8144 40.8851 21.0898C40.593 20.2636 40.7649 19.4716 41.1833 18.8521C41.5546 18.3026 42.0948 17.9151 42.5788 17.6399C43.0833 17.3529 43.6566 17.1158 44.2265 16.918C45.9962 16.3036 48.3448 15.8918 49.3381 15.7177C49.5624 15.6783 49.7176 15.6511 49.7814 15.6364C50.5907 15.4502 51.3977 15.9552 51.584 16.7644ZM52.0645 26.6678C52.0643 26.6679 52.0623 26.6657 52.059 26.6613C52.063 26.6656 52.0647 26.6678 52.0645 26.6678Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M64.6939 29.699C64.9473 29.1976 65.5592 28.9965 66.0606 29.2499C66.2078 29.3243 66.3578 29.3996 66.5102 29.4762C68.0472 30.2482 69.8195 31.1385 71.2743 32.3173C72.9057 33.6391 74.2332 35.3967 74.4562 37.8691C74.6814 40.3664 73.7522 42.6354 72.6262 44.6467C72.1071 45.574 71.527 46.4785 70.9758 47.3379C70.9273 47.4136 70.8789 47.489 70.8309 47.564C70.2293 48.503 69.6725 49.3848 69.2245 50.245C68.9651 50.7433 68.3508 50.9369 67.8525 50.6775C67.3542 50.418 67.1606 49.8037 67.42 49.3054C67.916 48.3529 68.5206 47.3986 69.1178 46.4665C69.1646 46.3935 69.2113 46.3206 69.258 46.2478C69.8153 45.3786 70.3632 44.5242 70.851 43.6528C71.9121 41.7574 72.5994 39.9317 72.4299 38.0518C72.2716 36.2967 71.3512 34.9981 69.9935 33.898C68.7196 32.8658 67.1455 32.0737 65.5727 31.2822C65.4294 31.2101 65.2861 31.138 65.1431 31.0657C64.6416 30.8124 64.4405 30.2005 64.6939 29.699Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M67.2198 44.1396C67.7794 44.0897 68.2734 44.5029 68.3233 45.0625C68.3456 45.313 68.3705 45.5693 68.3958 45.8303C68.5145 47.0547 68.6433 48.3824 68.5664 49.6956C68.5692 49.6939 68.5719 49.6923 68.5746 49.6906C68.7152 49.6043 68.8658 49.5118 69.0286 49.414C69.6883 49.0176 70.5898 48.5122 71.572 48.4891C72.1337 48.4758 72.5997 48.9204 72.6129 49.4821C72.6262 50.0437 72.1816 50.5098 71.6199 50.523C71.2389 50.532 70.7623 50.7458 70.0764 51.158C69.9749 51.2189 69.866 51.2864 69.7512 51.3574C69.2124 51.691 68.5451 52.1041 67.9119 52.3037C67.7492 52.355 67.5344 52.3845 67.2969 52.3277C67.0537 52.2695 66.8645 52.1393 66.7314 51.9954C66.4996 51.7447 66.4351 51.4526 66.4119 51.3257C66.3588 51.0349 66.3787 50.7102 66.3994 50.4885C66.4226 50.2401 66.4609 49.993 66.4915 49.8123C66.5059 49.7276 66.5192 49.6538 66.5288 49.6007L66.531 49.5884C66.5332 49.5764 66.535 49.5663 66.5365 49.5578C66.6011 48.4253 66.4922 47.2939 66.3755 46.082C66.349 45.8068 66.3222 45.5275 66.2968 45.2431C66.2469 44.6835 66.6602 44.1894 67.2198 44.1396ZM66.5433 49.518C66.5433 49.5177 66.5429 49.521 66.5416 49.5289C66.5425 49.5223 66.5432 49.5183 66.5433 49.518Z"
              fill="black"
            />
          </svg>
        </div>
        <div
          className="flex flex-col justify-center h-full bg-black -skew-y-12 mt-20 relative z-10" /* PRODUCT PLACEMENT */
        >
          <div className="flex justify-center w-full">
            <div className="bg-white w-11/12 skew-y-12 -mt-20">
              <video className="w-full h-full" controls>
                <source src="/productVideo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="flex flex-col skew-y-12 w-full h-full justify-center mt-6">
            <div className="flex justify-center text-white ml-1">
              <img src={placeHolderKey.src} className="h-60 w-40" />
            </div>
            <div className="flex flex-col text-center text-white">
              <h1 className="font-body-header text-[25px]">
                Our <span className="text-logo-gold"> product </span>,
              </h1>
              <h1 className="font-body-header text-[25px]">
                Everything <span className="text-logo-gold">about us</span>
              </h1>
              <p className="font-body-header text-[12px]">
                {" "}
                arcu eget. Eget blandit morbi vitae eget dolor. Amet pulvinar id
                risus volutpat aliquam sed purus velit. Sapien netus pretium
                magna sem viverra neque. Sed pellentesque varius dolor, in purus
                integer lobortis vitae euismod. Nisl interdum commodo quis.
              </p>
              <div className="flex items-center mt-1">
                {/* <span className="">
                  <hr className="w-10 mx-1"></hr>
                </span> */}
                <button className=" basis-3/12 border border-solid px-2 py-1 font-body-header text-[8px]">
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
          className="flex justify-center -mt-8" /* BOTTOM OF PAGE *NOT THE FOOTER* ### */
        >
          <div className="relative z-0 mx-2">
            <svg
              // height="153"
              viewBox="0 0 1130 153"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-md shape-optimize-speed w-full h-[153px] shadow-logo-gold"
            >
              <g filter="url(#filter0_d_9_76)">
                <path
                  d="M68.9683 144C55.9351 144 44.5476 141.049 34.8056 135.148C25.0637 129.246 17.4939 121.049 12.0963 110.557C6.69878 99.9344 4 87.6066 4 73.5738C4 59.4098 6.76461 46.9508 12.2938 36.1967C17.9547 25.3115 25.9194 16.8525 36.1879 10.8197C46.5881 4.65574 58.8972 1.57377 73.1152 1.57377C89.3079 1.57377 102.736 5.44262 113.399 13.1803C124.063 20.918 130.974 31.6066 134.134 45.2459H105.896C103.789 38.8197 99.9714 33.8361 94.4421 30.2951C88.9129 26.6229 81.8039 24.7869 73.1152 24.7869C59.2921 24.7869 48.6287 29.1803 41.1247 37.9672C33.6208 46.623 29.8688 58.5574 29.8688 73.7705C29.8688 88.9836 33.555 100.787 40.9272 109.18C48.4312 117.443 58.5681 121.574 71.3379 121.574C83.8445 121.574 93.2573 118.23 99.5764 111.541C106.027 104.721 109.911 95.8033 111.227 84.7869H76.2747V65.9016H136.701V141.639H113.399L111.425 123.541C106.949 130.098 101.354 135.148 94.6396 138.689C87.9256 142.23 79.3684 144 68.9683 144Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M205.31 144C195.437 144 186.682 141.902 179.047 137.705C171.411 133.508 165.421 127.607 161.077 120C156.732 112.393 154.56 103.607 154.56 93.6393C154.56 83.541 156.666 74.5574 160.879 66.6885C165.223 58.8197 171.148 52.7213 178.652 48.3934C186.287 43.9344 195.239 41.7049 205.508 41.7049C215.118 41.7049 223.609 43.8033 230.982 48C238.354 52.1967 244.081 57.9672 248.162 65.3115C252.374 72.5246 254.481 80.5902 254.481 89.5082C254.481 90.9508 254.415 92.459 254.283 94.0328C254.283 95.6066 254.218 97.2459 254.086 98.9508H179.639C180.166 106.557 182.798 112.525 187.538 116.852C192.409 121.18 198.267 123.344 205.113 123.344C210.247 123.344 214.526 122.23 217.948 120C221.503 117.639 224.136 114.623 225.847 110.951H251.519C249.676 117.115 246.582 122.754 242.238 127.869C238.025 132.852 232.759 136.787 226.44 139.672C220.252 142.557 213.209 144 205.31 144ZM205.508 62.1639C199.32 62.1639 193.857 63.9344 189.118 67.4754C184.378 70.8852 181.35 76.1312 180.034 83.2131H228.809C228.415 76.7869 226.045 71.6721 221.7 67.8689C217.356 64.0656 211.959 62.1639 205.508 62.1639Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M314.684 141.639C304.415 141.639 296.187 139.148 290 134.164C283.812 129.18 280.718 120.328 280.718 107.607V65.1148H263.933V44.0656H280.718L283.68 17.9016H305.995V44.0656H332.456V65.1148H305.995V107.803C305.995 112.525 306.982 115.803 308.957 117.639C311.063 119.344 314.618 120.197 319.62 120.197H331.864V141.639H314.684Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M408.913 28.918C404.305 28.918 400.488 27.541 397.46 24.7869C394.563 22.0328 393.115 18.5574 393.115 14.3607C393.115 10.1639 394.563 6.7541 397.46 4.13114C400.488 1.37705 404.305 0 408.913 0C413.521 0 417.273 1.37705 420.169 4.13114C423.197 6.7541 424.711 10.1639 424.711 14.3607C424.711 18.5574 423.197 22.0328 420.169 24.7869C417.273 27.541 413.521 28.918 408.913 28.918ZM396.275 141.639V44.0656H421.551V141.639H396.275Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M444.972 141.639V44.0656H467.286L469.261 60.5902C472.289 54.8197 476.633 50.2295 482.294 46.8197C488.086 43.4098 494.866 41.7049 502.634 41.7049C514.745 41.7049 524.158 45.5082 530.872 53.1148C537.586 60.7213 540.943 71.8689 540.943 86.5574V141.639H515.667V88.918C515.667 80.5246 513.955 74.0984 510.532 69.6393C507.11 65.1803 501.778 62.9508 494.537 62.9508C487.428 62.9508 481.57 65.4426 476.962 70.4262C472.486 75.4098 470.248 82.3607 470.248 91.2787V141.639H444.972Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M834.135 144C821.892 144 812.413 140.197 805.699 132.59C799.117 124.984 795.825 113.836 795.825 99.1475V44.0656H820.904V96.7869C820.904 105.18 822.616 111.607 826.039 116.066C829.461 120.525 834.859 122.754 842.231 122.754C849.209 122.754 854.935 120.262 859.411 115.279C864.019 110.295 866.323 103.344 866.323 94.4262V44.0656H891.599V141.639H869.285L867.31 125.115C864.282 130.885 859.872 135.475 854.08 138.885C848.419 142.295 841.771 144 834.135 144Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M962.57 144C952.565 144 943.745 141.836 936.109 137.508C928.474 133.18 922.418 127.148 917.942 119.41C913.597 111.672 911.425 102.82 911.425 92.8525C911.425 82.8853 913.597 74.0328 917.942 66.2951C922.418 58.5574 928.474 52.5246 936.109 48.1967C943.745 43.8689 952.565 41.7049 962.57 41.7049C975.077 41.7049 985.609 44.9836 994.166 51.541C1002.72 57.9672 1008.19 66.8852 1010.56 78.2951H983.897C982.581 73.5738 979.948 69.9016 975.999 67.2787C972.181 64.5246 967.639 63.1475 962.373 63.1475C955.396 63.1475 949.471 65.7705 944.6 71.0164C939.729 76.2623 937.294 83.541 937.294 92.8525C937.294 102.164 939.729 109.443 944.6 114.689C949.471 119.934 955.396 122.557 962.373 122.557C967.639 122.557 972.181 121.246 975.999 118.623C979.948 116 982.581 112.262 983.897 107.41H1010.56C1008.19 118.426 1002.72 127.279 994.166 133.967C985.609 140.656 975.077 144 962.57 144Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M1030.03 141.639V0H1055.31V59.0164C1058.6 53.6393 1063.01 49.4426 1068.54 46.4262C1074.2 43.2787 1080.65 41.7049 1087.89 41.7049C1100 41.7049 1109.35 45.5082 1115.93 53.1148C1122.64 60.7213 1126 71.8689 1126 86.5574V141.639H1100.92V88.918C1100.92 80.5246 1099.21 74.0984 1095.79 69.6393C1092.5 65.1803 1087.23 62.9508 1079.99 62.9508C1072.88 62.9508 1066.96 65.4426 1062.22 70.4262C1057.61 75.4098 1055.31 82.3607 1055.31 91.2787V141.639H1030.03Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M649.884 141.639C639.616 141.639 631.388 139.148 625.2 134.164C619.013 129.18 615.919 120.328 615.919 107.607V65.1148H599.134V44.0656H615.919L618.881 17.9016H641.196V44.0656H667.657V65.1148H641.196V107.803C641.196 112.525 642.183 115.803 644.158 117.639C646.264 119.344 649.819 120.197 654.821 120.197H667.064V141.639H649.884Z"
                  fill="#F5F5F5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M690.5 53.1148C688.5 57.7295 690.5 134.164 690.5 134.164C690.5 134.164 692.5 143.361 701 144C703.096 144.158 707.474 144.238 713 144.268C722.979 144.324 736.702 144.22 747.5 144.126C754.967 144.061 761.036 144 763.5 144C771.5 144 772 134.164 772 134.164C772 134.164 773.5 60.5 772 53.1148C770.5 45.7295 763.5 44.0656 763.5 44.0656C763.5 44.0656 706.5 42.1311 701 44.0656C695.5 46 692.5 48.5 690.5 53.1148ZM713 120.197V65.1148C713 63.2295 747.5 64.5 747.5 65.1148V120.197C747.5 121.5 713 120.197 713 120.197Z"
                  fill="#F5F5F5"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_9_76"
                  x="0"
                  y="0"
                  width="1130"
                  height="152.284"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_9_76"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_9_76"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-3/6 ml-2">
            {" "}
            <h1 className="font-body-header font-bold text-[20px]">
              Get in touch
            </h1>
            <h2>Signup for our monthly newsletter!</h2>
          </div>
          <div className="w-3/6 mr-2">
            <h1>form to fill out</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
