// // Header.js
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import { nav } from "../../data/Data";
// // import "./header.css";

// const Header = ({ onSignInClick, isLoggedIn, onSignOut }) => {
//   const [navList, setNavList] = useState(false);

//   return (
//     <header>
//       <div className='container flex'>
//         <div className='logo'>
//           <img src='./images/logo.png' alt='logo' />
//         </div>

//         <nav className={`nav ${navList ? "small" : "flex"}`}>
//           <ul>
//             {nav.map((list, index) => (
//               <li key={index}>
//                 <Link to={list.path}>{list.text}</Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         <div className='button flex'>
//           {!isLoggedIn ? (
//             <button className='btn1' onClick={onSignInClick}>
//               <i className='fa fa-sign-out'></i> Sign In
//             </button>
//           ) : (
//             <>
//               <span>Welcome!</span>
//               <button className='btn1' onClick={onSignOut}>
//                 <i className='fa fa-sign-out'></i> Sign Out
//               </button>
//             </>
//           )}
//         </div>

//         <div className='toggle'>
//           <button onClick={() => setNavList(!navList)}>
//             <i className={`fa ${navList ? "fa-times" : "fa-bars"}`}></i>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../../data/Data";
import "./header.css";

const Header = ({ onSignInClick, isLoggedIn, onSignOut }) => {
  const [navList, setNavList] = useState(false);

  return (
    <header>
      <div className='container flex'>
        <div className='logo'>
          <img src='./images/logo.png' alt='logo' />
        </div>

        <nav className={`nav ${navList ? "small" : "flex"}`}>
          <ul>
            {nav.map((list, index) => (
              <li key={index}>
                <Link to={list.path}>{list.text}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className='button flex'>
          {!isLoggedIn ? (
            <button className='btn1' onClick={onSignInClick}>
              <i className='fa fa-sign-out'></i> Sign In
            </button>
          ) : (
            <>
              <span>Welcome!</span>
              <button className='btn1' onClick={onSignOut}>
                <i className='fa fa-sign-out'></i> Sign Out
              </button>
            </>
          )}
        </div>

        <div className='toggle'>
          <button onClick={() => setNavList(!navList)}>
            <i className={`fa ${navList ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
