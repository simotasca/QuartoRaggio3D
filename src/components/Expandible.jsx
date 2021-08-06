import { useEffect, useState } from "react";

const Expandible = ({ children, hiddenHtml, isToggled = false }) => {
  const [toggled, setToggled] = useState(isToggled);

  useEffect(() => {
    setToggled(isToggled);
  }, [isToggled]);

  return (
    <div onClick={() => setToggled(!toggled)}>
      <p className="mb-0">{children}</p>
      <p
        className="mb-0"
        style={{
          transition: "height 1000ms",
          overflow: "hidden",
          height: toggled ? "auto" : "0px",
        }}
      >
        {hiddenHtml}
      </p>
      <h2
        className={[
          "bi text-lg-end text-center mb-0",
          toggled ? "bi-chevron-compact-up" : "bi-chevron-compact-down",
        ].join(" ")}
      />
    </div>
  );
};

export default Expandible;
