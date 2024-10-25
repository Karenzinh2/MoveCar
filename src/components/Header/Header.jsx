import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      style={{ background: "rgb(191D88)" }}
      className="row m-0 p-0 justify-content-around w-100"
    >
      <div className="col1 col-md-9 ms-3 d-flex ms-md-5 ps-md-5 justify-content-center aling-items-center">
        <Link to={"/"} className="text-decoration-none ms-md-5 ps-md-5"></Link>
      </div>
      <div className="col col-md-1 d-flex justify-content-end align-items-center me-2">
        <Link className="BtnNav texts" to={"entrar"}>
          ENTRAR
        </Link>
      </div>
    </nav>
  );
};

export default Header;
