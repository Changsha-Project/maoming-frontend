import styles from "./index.module.scss";
import Map from "./components/map";
// import Header from "@components/header";
import { BorderBox8 } from "@jiaminghi/data-view-react";

const Overview = () => {
  return (
    <div class={styles.container}>
      <div class={`${styles.content_wrap} ${styles.leftSide}`}>leftside</div>
      <div class={styles.map_wrap}>
        <BorderBox8 dur={20} className={styles.map_border}>
          <Map />
        </BorderBox8>
      </div>
      <div class={`${styles.content_wrap} ${styles.rightSide}`}>leftside</div>
    </div>
  );
};

export default Overview;
