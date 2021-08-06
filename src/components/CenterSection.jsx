const CenterSection = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
        width: "100%",
      }}
    >
      <div style={{ maxHeight: "100%", margin: "auto 0", width: "100%" }}>
        {children}
      </div>
    </div>
  );
};

export default CenterSection;
