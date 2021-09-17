import styles from './button.module.scss';

export default function Button({ style = {}, className = '', onClick = () => {}, ...props }) {
  return (
    <div style={{ ...style }} className={[className, styles.button].join(' ')} onClick={onClick}>
      <b>{props.children}</b>
    </div>
  );
}
