function DoctorSpecialty() {

    return (
        <section className="specialty-section">

            <h2>
                Find Doctors By Specialty
            </h2>

            <p className="specialty-description">
                Select a Specialty to View all Doctors and
                schedule an Appointment
            </p>

            <div className="specialty-grid">

                <div className="specialty-item">
                    <span>Anesthesiology</span>
                    <span className="arrow">⌄</span>
                </div>

                <div className="specialty-item">
                    <span>Dermatology</span>
                    <span className="arrow">⌄</span>
                </div>

                <div className="specialty-item">
                    <span>Emergency medicine</span>
                    <span className="arrow">⌄</span>
                </div>

                <div className="specialty-item">
                    <span>Neurology</span>
                    <span className="arrow">⌄</span>
                </div>

                <div className="specialty-item">
                    <span>Consultation</span>
                    <span className="arrow">⌄</span>
                </div>

                <div className="specialty-item">
                    <span>Ophthalmology</span>
                    <span className="arrow">⌄</span>
                </div>

            </div>

        </section>
    );
}

export default DoctorSpecialty;