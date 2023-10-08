import moment from "moment/moment";
import Logo from "../../assets/logo.png";
const Header = () => {
    return (
        <div className="text-center">
            <img className="mx-auto" src={Logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;