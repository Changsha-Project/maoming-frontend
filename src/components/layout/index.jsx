import styles from "./index.module.scss";
import { Outlet } from "react-router-dom";
import Header from "@components/header";
import FitScreen from "@fit-screen/react";
const Layout = () => {
  return (
    <>
      <FitScreen width={1920} height={1080} mode="fit">
        <div className={styles.container}>
          <Header />
          <Outlet />
        </div>
      </FitScreen>
    </>
  );
};

export default Layout;
