import { useState } from "react";
import GlobalSearch from "./GlobalSearch";
function DoctorHero({ onMenuClick, onLogout, onSettings, navigation, onSearch }) {
    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState("");
    function submit(event) { event.preventDefault(); onSearch?.(keyword, location); }

    return (
        <section className="doctor-hero">

            <header className="doctor-header">

                <div className="head-left">

                    <div className="breadcrumb">
                        <span>⌂</span>
                        <span>/</span>
                        <span>Searchdoctor</span>
                    </div>

                    <h2>Searchdoctor</h2>

                </div>

                <button
                    className="menu-btn"
                    onClick={onMenuClick}
                >
                    ☰
                </button>

                <div className="head-right">

                    <div className="top-search"><GlobalSearch navigation={navigation} /></div>

                    <a href="#" className="logout" onClick={(event) => { event.preventDefault(); if (onLogout) onLogout(); }}>
                        ● Log out
                    </a>

                    <a href="#/settings" className="head-icon" onClick={(event) => { event.preventDefault(); onSettings?.(); }}>
                        ⚙
                    </a>

                    <a href="#" className="head-icon">
                        ♟
                    </a>

                </div>

            </header>

            <div className="hero-content">

                <h1>Find a Doctor</h1>

                <p>
                    Search Doctors and schedule an appointment
                </p>

                <form className="doctor-search-form" onSubmit={submit}>

                    <input
                        type="text"
                        placeholder="Search by doctor or specialty" value={keyword} onChange={(event) => setKeyword(event.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Area (demo)" value={location} onChange={(event) => setLocation(event.target.value)}
                    />

                    <button type="button" className="current-btn" onClick={() => { setLocation("Any area"); onSearch?.(keyword, ""); }}>
                        ANY AREA
                    </button>

                    <button type="submit" className="doctor-search-btn">
                        SEARCH
                    </button>

                </form>

            </div>

        </section>
    );
}

export default DoctorHero;