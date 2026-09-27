function DashboardCards() {
    return (
        <section className="cards">

            {/* CARD 1 */}

            <article className="card">

                <div className="card-head">
                    <h3>Promotion by Clinics</h3>
                    <span className="info">!</span>
                </div>

                <div className="card-body">

                    <div className="chart clinic-chart"></div>

                    <div className="list">

                        <div className="item">
                            <span className="item-name">
                                <span className="color-dot clinic-green"></span>
                                Klinik Lee Healthcare
                            </span>
                            <span>19%</span>
                        </div>

                        <div className="item">
                            <span className="item-name">
                                <span className="color-dot clinic-blue"></span>
                                Klinik Bandar Baru Nilai
                            </span>
                            <span>4%</span>
                        </div>

                        <div className="item">
                            <span className="item-name">
                                <span className="color-dot clinic-orange"></span>
                                Klinik Mediviron Giant Nilai
                            </span>
                            <span>10%</span>
                        </div>

                        <div className="item">
                            <span className="item-name">
                                <span className="color-dot clinic-red"></span>
                                KLINIK NILAI IMPIAN
                            </span>
                            <span>21%</span>
                        </div>

                        <div className="item">
                            <span className="item-name">
                                <span className="color-dot clinic-gray"></span>
                                Klinik Mediviron
                            </span>
                            <span>2%</span>
                        </div>

                    </div>

                </div>

                <button className="details">
                    MORE DETAILS
                </button>

            </article>


            {/* CARD 2 */}

            <article className="card">

                <div className="card-head">
                    <h3>Promotion by Pharmacies</h3>
                    <span className="info">!</span>
                </div>

                <div className="card-body">

                    <div className="chart pharmacy-chart"></div>

                    <div className="list">

                        <div className="item">
                            <span className="item-name">
                                <span className="color-dot pharmacy-green"></span>
                                Alpro Pharmacy Nilai
                            </span>
                            <span>15%</span>
                        </div>

                        <div className="item">
                            <span className="item-name">
                                <span className="color-dot pharmacy-blue"></span>
                                Alpro Pharmacy Pekan Nilai
                            </span>
                            <span>12%</span>
                        </div>

                        <div className="item">
                            <span className="item-name">
                                <span className="color-dot pharmacy-orange"></span>
                                Ok Pharmacy
                            </span>
                            <span>5%</span>
                        </div>
                        <div className="item">
                            <span className="item-name">
                                <span className="color-dot pharmacy-red"></span>
                                Pharmart Pharmacies Nialai
                            </span>
                            <span>9%</span>
                        </div>

                        <div className="item">
                            <span className="item-name">
                                <span className="color-dot pharmacy-gray"></span>
                                Health Lane Family Pharmacy
                            </span>
                            <span>14%</span>
                        </div>

                    </div>

                </div>

                <button className="details">
                    MORE DETAILS
                </button>

            </article>


            {/* CARD 3 */}

            <article className="card">

                <div className="card-head">
                    <h3>Smart Market Usage by app</h3>
                    <span className="info">!</span>
                </div>

                <div className="card-body">

                    <div className="chart market-chart"></div>

                    <div className="list">

                        <div className="item">
                            <span className="item-name">
                                <span className="color-dot market-green"></span>
                                Food Panda
                            </span>
                            <span>25%</span>
                        </div>

                        <div className="item">
                            <span className="item-name">
                                <span className="color-dot market-blue"></span>
                                Grab Food
                            </span>
                            <span>20%</span>
                        </div>

                        <div className="item">
                            <span className="item-name">
                                <span className="color-dot market-orange"></span>
                                Smart Market App
                            </span>
                            <span>15%</span>
                        </div>

                        <div className="item">
                            <span className="item-name">
                                <span className="color-dot market-red"></span>
                                Other Apps
                            </span>
                            <span>10%</span>
                        </div>

                        <div className="item">
                            <span className="item-name">
                                <span className="color-dot market-gray"></span>
                                Others
                            </span>
                            <span>5%</span>
                        </div>

                    </div>

                </div>

                <button className="details">
                    MORE DETAILS
                </button>

            </article>


            {/* CARD 4 */}

            <article className="card">

                <div className="card-head">
                    <h3>Health Index</h3>
                    <span className="info">!</span>
                </div>

                <div className="card-body">

                    <div className="chart health-chart"></div>

                    <div className="list">

                        <div className="item">
                            <span className="item-name">
                                <span className="color-dot health-green"></span>
                                Overall Health
                            </span>
                            <span>85%</span>
                        </div>
                        <div className="item">
                            <span className="item-name">
                                <span className="color-dot health-blue"></span>
                                Physical Health
                            </span>
                            <span>80%</span>
                        </div>

                        <div className="item">
                            <span className="item-name">
                                <span className="color-dot health-orange"></span>
                                Mental Health
                            </span>
                            <span>75%</span>
                        </div>

                        <div className="item">
                            <span className="item-name">
                                <span className="color-dot health-red"></span>
                                Nutrition
                            </span>
                            <span>90%</span>
                        </div>

                        <div className="item">
                            <span className="item-name">
                                <span className="color-dot health-gray"></span>
                                Fitness
                            </span>
                            <span>70%</span>
                        </div>

                    </div>

                </div>

                <button className="details">
                    MORE DETAILS
                </button>

            </article>

        </section>
    );
}

export default DashboardCards;
