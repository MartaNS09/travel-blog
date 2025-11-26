import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../ui/Logo";
import "./Header.scss";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="header">
      <div className="header__hero">
        <div className="header__content">
          <div className="header__nav">
            <Link to="/">
              <Logo />
            </Link>
            <div className="header__actions">
              <Link to="/login" className="btn--login">
                Войти
              </Link>
            </div>
          </div>

          <div className="header__divider"></div>

          <div className="header__title">
            <h1>
              {isHomePage
                ? "ТАМ, ГДЕ МИР НАЧИНАЕТСЯ С ПУТЕШЕСТВИЙ"
                : "ИСТОРИИ ВАШИХ ПУТЕШЕСТВИЙ"}
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
