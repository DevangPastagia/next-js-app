const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "32px",
    boxShadow: "0px 0px 10px rgba(0,0,0, 0.2) ",
    width: "100%",
    height: "100%",
    display: "flex",
    gap: "16px",
    border: "1px solid #eaeaea",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div style={{ ...cardStyle, flexDirection: "column" }}>{children}</div>
  );
};

export default Card;
