import styles from "../../styles/sass/OAuth.module.scss";

const OAuth = () => {
  return (
    <div className={styles["o-auth"]}>
      <div className={styles["divider"]}>
        <span>or</span>
      </div>

      <ul className={styles["links"]}>
        <li>
          <a href="#!" title="Facebook">
            <i class="fab fa-facebook" style={{ color: "#497ce2" }}></i>
          </a>
        </li>
        <li>
          <a href="#!" title="Twitter">
            <i class="fab fa-twitter" style={{ color: "#1da1f2" }}></i>
          </a>
        </li>
        <li>
          <a href="#!" title="Google">
            <i class="fab fa-google" style={{ color: "#e94235" }}></i>
          </a>
        </li>
        <li>
          <a href="#!" title="Github">
            <i class="fab fa-github" style={{ color: "#272727" }}></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default OAuth;