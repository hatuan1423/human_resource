import HeaderComponent from "../HeaderComponent/HeaderComponent";

const DefaultComponent = ({ children }) => {
  return (
    <div>
      <HeaderComponent />
      <div style={{ marginTop: "60px" }} />
      {children}
    </div>
  );
};

export default DefaultComponent;
