import styles from "./socialicons.module.scss";
import Image from "next/image"
import igImg from "../../public/resources/social/ig.svg";
import fbImg from "../../public/resources/social/fb.svg";
import ytImg from "../../public/resources/social/yt.svg";
import twitImg from "../../public/resources/social/twit.svg";

const SocialIcons = () => {
  return (
    <div className={styles.socialIcons}>
      <Image onClick={() => window.open("https://facebook.com")} src={fbImg} alt="fb" />
      <Image onClick={() => window.open("https://instagram.com/quarto_raggio4/")} src={igImg} alt="ig" />
      <Image onClick={() => window.open("https://twitter.com")} src={twitImg} alt="tw" />
      <Image onClick={() => window.open("https://youtube.com")} src={ytImg} alt="yt" />
    </div>
  );
};

export default SocialIcons;
