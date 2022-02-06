import logo from "../img/logo.svg";
import "./header.css";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { dispatchLocale } from "../state/actions";
import { useEffect } from "react";
export const Header = ({ dispatchLocale }) => {
  useEffect(() => {
    dispatchLocale("en");
  }, []);

  const localeChangeHandler = (e) => {
    dispatchLocale(e.target.value);
  };

  return (
    <div className="headerDiv">
      <img className="headerLogo" src={logo} />
      <span className="heading">
        <FormattedMessage id="GREETING" />
      </span>
      <select
        id="selectinput"
        className="select"
        onChange={(e) => {
          localeChangeHandler(e);
        }}
      >
        <option value="en"> English </option>
        <option value="fr"> French </option>
      </select>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLocale: (locale) => dispatch(dispatchLocale(locale)),
  };
};
export default connect(null, mapDispatchToProps)(Header);
