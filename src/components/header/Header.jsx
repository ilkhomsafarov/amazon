import logo from '../../assets/images/logo.png';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import "./Header.css";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import {Link} from "react-router-dom"
function Header({setIsNavbarSearchActive}) {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState("all");
  const { i18n } = useTranslation();

  const langs = [
    "uz", 
    "ru",
    "en"
  ]
  
  const changeWebsiteLang = (e) => {
    i18n.changeLanguage(e.target.value || "uz");
  }



  return (
    <header className="mainHeader">
      <div className="headerLogoWrapper">
        <a href="/" className="logoLink">
          <img className="headerLogo" src={logo} alt="" />
        </a>
      </div>
      <div className="headerDeliveryAddress">
        <HiOutlineLocationMarker className="addressIcon" />
        <div className="deliveryLocation">
          <p>{t("delivery")}</p>
          <b>{t("country")}</b>
        </div>
      </div>
      <div className="headerSearchWrapper">
        <select className="searchSelect" style={selectedOption.length <= 7 ? {width:`${selectedOption.length * 14}px`} : {width:`${selectedOption.length * 10}px`}} onChange={(e) => {setSelectedOption(e.target.value)}}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="personal care">Personal Care</option>
          <option value="toys & babies">Toys and Babies</option>
        </select>
        <input type="text"  className="searchInput" onBlur={() => {setIsNavbarSearchActive(false)}} onFocus={() => {setIsNavbarSearchActive(true)}}/>
        <button>
          <FiSearch />
        </button>
         
      </div>
      <div className="changeLanguage">
        <select onChange={changeWebsiteLang} className="select">
         {

          langs.map(langItem => 
            <option className='option'   selected={localStorage.getItem("lang") === langItem ? true  : false} key={uuidv4()} value={langItem}>{langItem.toUpperCase()}</option>  
          )
         }
        </select>
      </div>
      <div className='btnsWrapper'>
      <button className="signUpBtn">
        <Link to="/signup" className="signupLink">
         {t("register")} 
        </Link>
      </button>
      <button className="signUpBtn more">
        <Link to="/login" className="signupLink">
        {t("Log in")} 
        </Link>
      </button>
      </div>
    </header>
  );
}

export default Header;