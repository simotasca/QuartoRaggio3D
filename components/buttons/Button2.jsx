import styles from "./button2.module.scss";

const Button2 = ({ style, className, ...props }) => {
  return (
    <div style={{ ...style }} className={[className, styles.button].join(" ")}>
      <b>{props.children}</b>
    </div>
  );
};

export default Button2;
