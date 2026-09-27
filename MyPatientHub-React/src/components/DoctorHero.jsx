function DoctorHero({ onMenuClick }) {

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

                    <div className="top-search">
                        <span>⌕</span>

                        <input
                            type="text"
                            placeholder="Type here..."
                        />
                    </div>

                    <a href="#" className="logout">
                        ● Log out
                    </a>

                    <a href="#" className="head-icon">
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

                <div className="doctor-search-form">

                    <input
                        type="text"
                        placeholder="Search a doctor by name, specility"
                    />

                    <input
                        type="text"
                        placeholder="Zip Code or Neighborhood"
                    />

                    <button className="current-btn">
                        CURRENT
                    </button>

                    <button className="doctor-search-btn">
                        SEARCH
                    </button>

                </div>

            </div>

        </section>
    );
}

export default DoctorHero;