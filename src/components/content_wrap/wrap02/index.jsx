import styles from "./index.module.scss";
import { useEffect, useRef, useState } from "react";

const Wrap = ({ title = "", children, className = "", style = {} }) => {
  const SvgRef = useRef();
  const containerRef = useRef();

  const [scale, setScale] = useState("1,0.9");

  const updateSvg = () => {
    const { clientWidth } = containerRef.current;
    setScale(`${clientWidth / 378 - 0.1},${clientWidth / 378 - 0.16}`);
  };

  useEffect(() => {
    updateSvg();
    window.addEventListener("resize", updateSvg);
    return () => {
      window.removeEventListener("resize", updateSvg);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${className}`}
      style={style}
    >
      <div className={styles.background}>
        <svg
          className={styles.svg_content}
          ref={SvgRef}
          width="378"
          height="300"
          style={{ transform: `scale(${scale})` }}
        >
          <defs>
            <filter id="filter-fDYTbTyiZG">
              <feFlood flood-color="#19e5e6"></feFlood>
              <feComposite in2="SourceGraphic" operator="out"></feComposite>
              <feGaussianBlur stdDeviation="5" result="blur"></feGaussianBlur>
              <feOffset dx="0" dy="0" result="offsetblur"></feOffset>
              <feComposite operator="atop" in2="SourceGraphic"></feComposite>
            </filter>
          </defs>
          <polyline
            class="svg-bg"
            // fill="#05192e"
            fill="rgba(0,0,0,0)"
            filter=""
            stroke="#0f4c8a"
            stroke-width="1"
            points="145, 297 35, 297 3, 265 3, 25 25, 3 167, 3 188, 25 363, 25 375 , 40 375 , 275 375 , 275 353 , 297 145, 297"
          ></polyline>
          <polyline
            fill="#75d1f0"
            class="corner-LBLongDec"
            points="3, 200 3, 265 35, 297 100, 297 90, 293 37, 293 7, 263 7, 204 3, 200"
          ></polyline>
          <polyline
            class="corner-LTTriangle"
            stroke="#19e5e6"
            fill="#19e5e6"
            points="8, 8 16, 8 8,16 8, 8"
          ></polyline>
          <polyline
            class="corner-RBTriangle"
            stroke="#19e5e6"
            fill="#19e5e6"
            points="375, 297 375, 284 362, 297 375, 297"
          ></polyline>
          <polyline
            class="title-deco"
            stroke="#19e5e6"
            fill="#19e5e6"
            points="167,3 188,25 363, 25 375 , 40 360, 28 183,28 167,3"
          ></polyline>
        </svg>
      </div>
      <div className={styles.content_wrap}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Wrap;
