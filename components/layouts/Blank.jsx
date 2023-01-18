import styles from "../../styles/sass/Blank.module.scss";

const Blank = ({ children }) => {
  return (
    <div className={styles["blank"]}>
      {children}
      <footer></footer>
      <footer></footer>
    </div>
  );
};

export default Blank;
