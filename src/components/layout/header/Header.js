// import React from "react";
// import { Link } from "react-router-dom";
// import Logo from "../../ui/Logo";
// import "./Header.scss";

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="header__hero">
//         <div className="header__content">
//           <div className="header__nav">
//             <Link to="/">
//               <Logo />
//             </Link>
//             <div className="header__actions">
//               <button className="btn--login">Войти</button>
//             </div>
//           </div>

//           <div className="header__divider"></div>

//           <div className="header__title">
//             <h1>ТАМ, ГДЕ МИР НАЧИНАЕТСЯ С ПУТЕШЕСТВИЙ</h1>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../ui/Logo";
import "./Header.scss";

const Header = () => {
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
            <h1>ТАМ, ГДЕ МИР НАЧИНАЕТСЯ С ПУТЕШЕСТВИЙ</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
