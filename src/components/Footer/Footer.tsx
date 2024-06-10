import styles from "./Footer.module.scss";
import { FooterProps } from "./Footer.types.ts";

const Footer = ({}: FooterProps) => {
  return (
    <div className={styles.Footer}>
      <div>Movie App</div>
      <div>
        <span>Email:shreyas@gmail.com</span>
        <span>Mobile:7829552729</span>
      </div>
    </div>
  );
};

export default Footer;
