import React, { useState } from "react";

function NavBar() {

const [lang, setlang] = useState(localStorage.getItem("language")?localStorage.getItem("language"):"")

  const onChangeLanguage = (e) =>{
    localStorage.setItem(
      "language",
      e.target.value
    );
  }


  return (
    <div className="navbar-wrapper ">
      <nav
        className="navbar navbar-default navbar-fixed-top navbar-expand-md"
        role="navigation"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            Best Friends Quiz
          </a>
          <div className="navbar-header page-scroll col-5">
            <select  className="form-control " name="account" onChange={onChangeLanguage}>
            <option value="en" selected = {(lang == 'en')?'true':false}>English</option>
              <option value="tr"  selected = {(lang == 'tr')?'selected':''} >Türkçe</option>
              <option value="isl" selected = {(lang == 'isl')?'selected':''}>עִבְרִית</option>
              <option value="ara" selected = {(lang == 'ara')?'selected':''} >عربي</option>
              <option value="se" selected = {(lang == 'se')?'selected':''} >Svenska</option>
              <option value="dk" selected = {(lang == 'dk')?'selected':''} >Dansk</option>
              <option value="nl" selected = {(lang == 'nl')?'selected':''} >Nederlands</option>
              <option value="deu" selected = {(lang == 'deu')?'selected':''} >Deutsch</option>
              <option value="cze" selected = {(lang == 'cze')?'selected':''} >čeština</option>
              <option value="it" selected = {(lang == 'it')?'selected':''} >Italiano</option>
              <option value="fre" selected = {(lang == 'fre')?'selected':''} >Français</option>
              <option value="es" selected = {(lang == 'es')?'selected':''} >Español</option>
              <option value="cn" selected = {(lang == 'cn')?'selected':''} >繁體中文</option>
              <option value="ch" selected = {(lang == 'ch')?'selected':''} >简体中文</option>
              <option value="kr" selected = {(lang == 'kr')?'selected':''} >한국어</option>
              <option value="jp" selected = {(lang == 'jp')?'selected':''} >日本語</option>
              <option value="th" selected = {(lang == 'th')?'selected':''} >ภาษาไทย</option>
              <option value="no" selected = {(lang == 'no')?'selected':''} >Norsk</option>
              <option value="fi" selected = {(lang == 'fi')?'selected':''} >Suomi</option>
              <option value="ru" selected = {(lang == 'ru')?'selected':''} >Русский</option>
              <option value="ro" selected = {(lang == 'ro')?'selected':''} >Română</option>
              <option value="et" selected = {(lang == 'et')?'selected':''} >Eesti</option>
              <option value="lv" selected = {(lang == 'lv')?'selected':''} >Latviešu</option>
              <option value="sk" selected = {(lang == 'sk')?'selected':''} >Slovenčina</option>
              <option value="hu" selected = {(lang == 'hu')?'selected':''} >Magyar</option>
              <option value="ell" selected = {(lang == 'ell')?'selected':''} >Ελληνικά</option>
              <option value="my" selected = {(lang == 'my')?'selected':''} >Bahasa Melayu</option>
              <option value="id" selected = {(lang == 'id')?'selected':''} >Bahasa Indonesia</option>
              <option value="bg" selected = {(lang == 'bg')?'selected':''} >Български</option>
              <option value="vn" selected = {(lang == 'vn')?'selected':''} >tiếng Việt</option>
              <option value="pt" selected = {(lang == 'pt')?'selected':''} >Português</option>
              <option value="rs" selected = {(lang == 'rs')?'selected':''} >Srpsko-hrvatski</option>
              <option value="ua" selected = {(lang == 'ua')?'selected':''} >українська</option>
              <option value="si" selected = {(lang == 'si')?'selected':''} >Slovenščina</option>
              <option value="ph" selected = {(lang == 'ph')?'selected':''} >Tagalog</option>
            </select>
          </div>
          <div className="navbar-header page-scroll">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar"
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navbar">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a className="nav-link page-scroll text-black-50" href="/">
                  About us
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll text-black-50" href="/">
                  Social
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll text-black-50" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
