import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <h4 className={styles.title}>电白沉香产业大数据</h4>
      </div>
    </div>
  );
};

export default Header;
