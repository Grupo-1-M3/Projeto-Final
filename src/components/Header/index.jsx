import { BsCart2 } from "react-icons/bs";
import { MdOutlineLogin } from "react-icons/md";
import { HeaderContainer } from "./style";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <h3>Nossa Logo</h3>
      </div>
      <div className="icons">
        <Link to="/cart">
          <BsCart2 />
        </Link>
        <Link to="/">
          <MdOutlineLogin />
        </Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;
