import Image from "next/image";
import styles from "./socialicons.module.scss";

const SocialIcons = () => {
  return (
    <div className={styles.socialIcons}>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <Image
          src="/resources/social/ig.svg"
          alt="ig"
          height="35px"
          width="35px"
        />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <Image
          src="/resources/social/fb.svg"
          alt="fb"
          height="35px"
          width="35px"
        />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noreferrer">
        <Image
          src="/resources/social/yt.svg"
          alt="yt"
          height="35px"
          width="35px"
        />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <Image
          src="/resources/social/twit.svg"
          alt="tw"
          height="35px"
          width="35px"
        />
      </a>
    </div>
  );
};

export default SocialIcons;
