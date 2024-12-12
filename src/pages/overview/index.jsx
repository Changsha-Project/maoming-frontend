import styles from "./index.module.scss";
import { useRef } from "react";
import Map from "./components/map";
// import Header from "@components/header";
import { BorderBox8, ScrollBoard } from "@jiaminghi/data-view-react";
import Wrap01 from "@components/content_wrap/wrap01";
import Wrap02 from "@components/content_wrap/wrap02";
import IndustryBarChart from "./components/IndustryBarChart";
import BrandPlantingRatio from "./components/BrandPlantingRatio";
import ClassScatterChart from "./components/ClassScatterChart";
import { Carousel } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

import Slide1_img from "./assets/slide1.png";
import Slide2_img from "./assets/slide2.png";
import Slide3_img from "./assets/slide3.png";
import Slide4_img from "./assets/slide4.png";
import Slide5_img from "./assets/slide5.png";

const Overview = () => {
  //    幻灯片ref
  const CarouselRef = useRef();
  //    切换幻灯片
  const handleCarouselRef = (type = "next") => {
    CarouselRef?.current?.[type]?.();
  };

  return (
    <div class={styles.container}>
      <div class={`${styles.content_wrap} ${styles.leftSide}`}>
        <Wrap01 title="产业发展情况">
          <IndustryBarChart />
        </Wrap01>
        <Wrap01 title="种植企业情况">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              marginTop: "5px",
            }}
          >
            <ScrollBoard
              config={{
                header: ["企业", "品牌", "面积(m²)"],
                data: [
                  ["沉香种植有限公司 1", "奇楠", "1000"],
                  ["沉香种植有限公司 2", "奇楠", "1000"],
                  ["沉香种植有限公司 3", "奇楠", "1000"],
                  ["沉香种植有限公司 4", "奇楠", "1000"],
                  ["沉香种植有限公司 5", "奇楠", "1000"],
                  ["沉香种植有限公司 6", "奇楠", "1000"],
                  ["沉香种植有限公司 7", "奇楠", "1000"],
                  ["沉香种植有限公司 8", "奇楠", "1000"],
                  ["沉香种植有限公司 9", "奇楠", "1000"],
                  ["沉香种植有限公司 10", "奇楠", "1000"],
                  ["沉香种植有限公司 11", "奇楠", "1000"],
                ],
                index: true,
                rowNum: 4,
                waitTime: 3000,
                headerHeight: 35,
                oddRowBGC: "rgba(31, 64, 55,0.3)",
                evenRowBGC: "rgba(153, 242, 200,0.3)",
                headerBGC: "rgba(0, 69, 170,1)",
                columnWidth: [40, 160, 100, 100],
              }}
              className={styles.ScrollBoardChart}
              style={{ height: "90%", width: "94%" }}
            />
          </div>
        </Wrap01>
        <Wrap01 title="加工企业情况">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              marginTop: "5px",
            }}
          >
            <ScrollBoard
              config={{
                header: ["企业", "加工类别"],
                data: [
                  ["茂名市裕丰沉香创业产业有限公司 1", "沉香茶、沉香酒"],
                  ["茂名市裕丰沉香创业产业有限公司 2", "沉香茶、沉香酒"],
                  ["茂名市裕丰沉香创业产业有限公司 3", "沉香茶、沉香酒"],
                  ["茂名市裕丰沉香创业产业有限公司 4", "沉香茶、沉香酒"],
                  ["茂名市裕丰沉香创业产业有限公司 5", "沉香茶、沉香酒"],
                  ["茂名市裕丰沉香创业产业有限公司 6", "沉香茶、沉香酒"],
                  ["茂名市裕丰沉香创业产业有限公司 7", "沉香茶、沉香酒"],
                  ["茂名市裕丰沉香创业产业有限公司 8", "沉香茶、沉香酒"],
                ],
                index: true,
                rowNum: 4,
                waitTime: 3000,
                headerHeight: 35,
                oddRowBGC: "rgba(31, 64, 55,0.3)",
                evenRowBGC: "rgba(153, 242, 200,0.3)",
                headerBGC: "rgba(0, 69, 170,1)",
                columnWidth: [40, 200, 200],
              }}
              className={styles.ScrollBoardChart}
              style={{ height: "90%", width: "94%" }}
            />
          </div>
        </Wrap01>
      </div>
      <div class={styles.map_wrap}>
        <BorderBox8 dur={20} className={styles.map_border}>
          <Map />
        </BorderBox8>
      </div>
      <div class={`${styles.content_wrap} ${styles.rightSide}`}>
        <Wrap02 title="种植品种占比">
          <BrandPlantingRatio />
        </Wrap02>
        <Wrap02 title="园区监控">
          <div className={styles.slide_wrap}>
            <Carousel
              ref={CarouselRef}
              autoplay
              autoplaySpeed={5000}
              dots={false}
              draggable
            >
              <div className={styles.slide}>
                <img src={Slide1_img} alt="Image 1" />
                <div className={styles.text}>花苞红A1-02</div>
              </div>
              <div className={styles.slide}>
                <img src={Slide2_img} alt="Image 1" />
                <div className={styles.text}>花苞红A1-02</div>
              </div>
              <div className={styles.slide}>
                <img src={Slide3_img} alt="Image 1" />
                <div className={styles.text}>花苞红A1-02</div>
              </div>
              <div className={styles.slide}>
                <img src={Slide4_img} alt="Image 1" />
                <div className={styles.text}>花苞红A1-02</div>
              </div>
              <div className={styles.slide}>
                <img src={Slide5_img} alt="Image 1" />
                <div className={styles.text}>花苞红A1-02</div>
              </div>
            </Carousel>
            <div className={styles.arrow_group}>
              <div
                className={styles.leftArrow}
                onClick={() => handleCarouselRef("prev")}
              >
                <LeftOutlined style={{ fontSize: "36px" }} />
              </div>
              <div
                className={styles.rightArrow}
                onClick={() => handleCarouselRef("next")}
              >
                <RightOutlined style={{ fontSize: "36px" }} />
              </div>
            </div>
          </div>
        </Wrap02>
        <Wrap02 title="加工品类词条">
          <ClassScatterChart />
        </Wrap02>
      </div>
    </div>
  );
};

export default Overview;
