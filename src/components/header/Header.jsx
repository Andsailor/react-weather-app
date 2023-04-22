import React from "react";

import "./header.scss"
import logo from "../../assets/logo.png"
import github from "../../assets/github.png"

import SearchForm from "./searchForm/SearchForm"

const Header = ({ setWeatherLocation }) => {
    return (
        <header className="header">
            <img
                onClick={() => setWeatherLocation("Druzhkovka")}
                src={logo}
                alt="main weather app logo"
                className="header-logo" />
            <SearchForm
                setWeatherLocation={setWeatherLocation}
            />
            <a
                href="https://github.com/Andsailor"
                target="_blank"
                className="header-link">
                <img src={github} alt="author's github page link" />
            </a>
        </header>
    )
}

export default Header