import styles from "./index.module.scss";
import Map from "./components/map";
// import Header from "@components/header";
import { BorderBox8, ScrollBoard } from "@jiaminghi/data-view-react";
import Wrap01 from "@components/content_wrap/wrap01";
import Wrap02 from "@components/content_wrap/wrap02";
import IndustryBarChart from "./components/IndustryBarChart";
import BrandPlantingRatio from "./components/BrandPlantingRatio";

const Overview = () => {
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
      </div>
    </div>
  );
};

export default Overview;
