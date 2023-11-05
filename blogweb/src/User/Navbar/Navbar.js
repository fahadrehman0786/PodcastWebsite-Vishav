import classes from "./Navbar.module.css";
import logo from "./../../assets/logo192.png";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#3E3E3E", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{marginLeft:'30px',  display: "flex", alignItems: "center" }}>
        <img style={{ height: "60px" }} src={logo} alt="Logo" />
      </div>

      <div style={{marginRight:'30px', display: "flex", alignItems: "center" }}>
        <h2  style={{ marginRight: "20px", color: "white" }}>Letters</h2>
        <h2 style={{ marginRight: "20px", color: "white" }}>Projects</h2>
        <h2 style={{ marginRight: "20px", color: "white" }}>About Me</h2>
        <h2 style={{ marginRight: "20px", color: "white" }}>Podcast</h2>
      </div>
    </div>
  );
};

export default Navbar;
