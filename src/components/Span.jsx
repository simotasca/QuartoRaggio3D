const Success = ({ children }) => (
  <span className="text-success">{children}</span>
);
const Danger = ({ children }) => (
  <span className="text-danger">{children}</span>
);
const Secondary = ({ children }) => (
  <span className="text-secondary">{children}</span>
);
const Primary = ({ children }) => (
  <span className="text-primary">{children}</span>
);

export { Success, Secondary, Danger, Primary };
