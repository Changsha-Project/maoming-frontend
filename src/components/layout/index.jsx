import styles from "./index.module.scss";
import { FullScreenContainer } from "@jiaminghi/data-view-react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <FullScreenContainer>
        <div className={styles.container}>
          <Outlet />
        </div>
        ;
      </FullScreenContainer>
    </>
  );
};

export default Layout;
