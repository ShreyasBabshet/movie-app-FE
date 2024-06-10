import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.types.ts";
import { Link } from "react-router-dom";
import video from "../../images/video.png";
import users from "../../images/users.jpg";
const Header = ({}: HeaderProps) => {
  return (
    <div className={styles.Container}>
      <Link to="/">
        <div className={styles.HeaderLeft}>
          <img className={styles.Image} src={video} alt="" />
          <h2 className={styles.Title}>Movie App</h2>
        </div>
      </Link>
      <div>
        <img className={styles.Image} src={users} alt="" />
      </div>
    </div>
  );
};

export default Header;
