import { default as h } from "../../hooks/Okra";

import { GuestLogoSlot } from "../slots";

import styles from "../../styles/sass/Guest.module.scss";
import BackgroundImageAsset from "../../public/images/guest-split-image.png";

const Guest = ({ children }) => {
  return (
    <div className={styles["guest"]}>
      <div className={styles["flex"]}>
        <div
          className={h.classNames(styles, "flex-item split-image")}
          style={h.backgroundImage(BackgroundImageAsset)}
        >
          <GuestLogoSlot />
        </div>

        <div className={h.classNames(styles, "flex-item split-form")}>
          <GuestLogoSlot />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Guest;
