import React, { useState } from "react";
import LanguageService from "../services/LanguageService";

export default function Languages() {
  const [locale, setlocale] = useState("tr");
  const [key, setkey] = useState("");
  const [content, setcontent] = useState("");

  const onChangeLocale = (e) => {
    setlocale(e.target.value);
  };

  const onChangeKey = (e) => {
    setkey(e.target.value);
  };
  const onChangeContent = (e) => {
    setcontent(e.target.value);
  };

  const submitHandler = (e) =>{
      e.preventDefault();
      LanguageService.createLanguage({locale:locale,key:key,content:content})
      setcontent("");
  } 

  return (
    <div className=" col-lg-12">
      <div className="ibox ">
        <div className="ibox-title">
          <h5>add language</h5>
        </div>
        <div className="ibox-content">
          <form onSubmit={submitHandler}>
            <div className="form-group row">
              <label className="col-lg-2 col-form-label">eng</label>
              <div className="col-lg-10">
                <input
                  type="text"
                  placeholder=""
                  className="form-control"
                  onChange={onChangeKey}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-lg-2 col-form-label">Language</label>
              <div className="col-lg-10">
                <select
                  class="form-control "
                  name="account"
                  onChange={onChangeLocale}
                >
                  <option value="tr">Türkçe</option>
                  <option value="isl">עִבְרִית</option>
                  <option value="ara">عربي</option>
                  <option value="se">Svenska</option>
                  <option value="dk">Dansk</option>
                  <option value="nl">Nederlands</option>
                  <option value="deu">Deutsch</option>
                  <option value="cze">čeština</option>
                  <option value="it">Italiano</option>
                  <option value="fre">Français</option>
                  <option value="es">Español</option>
                  <option value="cn">繁體中文</option>
                  <option value="ch">简体中文</option>
                  <option value="kr">한국어</option>
                  <option value="jp">日本語</option>
                  <option value="th">ภาษาไทย</option>
                  <option value="no">Norsk</option>
                  <option value="fi">Suomi</option>
                  <option value="ru">Русский</option>
                  <option value="ro">Română</option>
                  <option value="et">Eesti</option>
                  <option value="lv">Latviešu</option>
                  <option value="sk">Slovenčina</option>
                  <option value="hu">Magyar</option>
                  <option value="ell">Ελληνικά</option>
                  <option value="my">Bahasa Melayu</option>
                  <option value="id">Bahasa Indonesia</option>
                  <option value="bg">Български</option>
                  <option value="vn">tiếng Việt</option>
                  <option value="en" selected>
                    English
                  </option>
                  <option value="pt">Português</option>
                  <option value="rs">Srpsko-hrvatski</option>
                  <option value="ua">українська</option>
                  <option value="si">Slovenščina</option>
                  <option value="ph">Tagalog</option>
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-lg-2 col-form-label">translation</label>
              <div className="col-lg-10">
                <input
                  type="text"
                  placeholder=""
                  className="form-control"
                  onChange={onChangeContent}
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-lg-offset-2 col-lg-10">
                <button className="btn btn-sm btn-white" type="submit">
                  add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
