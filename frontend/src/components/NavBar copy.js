import React from "react";

function NavBar() {
  return (
    <nav
      className="navbar navbar-static-top  "
      role="navigation"
      style={{ marginBottom: 0 }}
      style={{backgroundColor:"#6b528a"}}
    >
      <ul className="nav navbar-top-links navbar-left">
        <li>
          
          <a  className="font-weight-bold" href="/">
            <img style={{width:"100px", marginLeft:"20px"}} src="img/quiz-logo.png" alt=""/>
           
          </a>
        </li>
      </ul>
      <ul className="nav navbar-top-links navbar-right">
        <li>
        <a href="/">
        <span className="m-r-sm text-light font-weight-bold">
           About us
          </span>
          </a>
        </li>
        <li>
          <a href="/">
          <span className="m-r-sm text-light font-weight-bold">
           Contact us
          </span>
          </a>
        </li>
        <li>
          <a href="/">
          <span className="m-r-sm text-light font-weight-bold">
           Social
          </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
