import styles from "./button.module.scss";

const Button = ({ style={}, className="" , onClick = () => {}, ...props }) => {
  return (
    <div style={{ ...style }} className={[className, styles.button].join(" ")} onClick={onClick}>
      <b>{props.children}</b>
    </div>
  );
};

export default Button;
