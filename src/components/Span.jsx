const exceptCN = (props) => {
  const { className, ...others } = props;
  return others;
};

export const Success = ({ children, ...props }) => (
  <span className={'text-success ' + props.className} {...exceptCN(props)}>
    {children}
  </span>
);
export const Danger = ({ children, ...props }) => (
  <span className={'text-danger ' + props.className} {...exceptCN(props)}>
    {children}
  </span>
);
export const Secondary = ({ children, ...props }) => (
  <span className={'text-secondary ' + props.className} {...exceptCN(props)}>
    {children}
  </span>
);
export const Primary = ({ children, ...props }) => (
  <span className={'text-primary ' + props.className} {...exceptCN(props)}>
    {children}
  </span>
);
