
import { useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import Footer from "../Footer";
import "./MyDependents.css";

const steps = [
  "Dependents Registration",
  "Dependents Health Records",
  "Family Care Plan",
];

const plans = [
  {
    name: "Standard Plan",
    description: "Basic family healthcare support",
  },
  {
    name: "Premium Plan",
    description: "Extended healthcare support for your family",
  },
  {
    name: "Super Plan",
    description: "Complete family healthcare support",
  },
];

function MyDependents({ goToDashboard, goToFindDoctor }) {
  const [step, setStep] = useState(1);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Standard Plan");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthMonth: "",
    birthDay: "",
    birthYear: "",
    relation: "",
    gender: "",
    bloodGroup: "",
    allergies: "",
    medicalConditions: "",
    medications: "",
  });

  function handleMenuClick() {
    if (window.innerWidth <= 768) {
      setIsMobileOpen(!isMobileOpen);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  }

  function handleSidebarClose() {
    setIsMobileOpen(false);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData(function (previousData) {
      return {
        ...previousData,
        [name]: value,
      };
    });
  }

  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  function handleBack() {
    if (step > 1) {
      setStep(step - 1);
      setSubmitted(false);
    }
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  return (
    <div
      className={`app ${
        isCollapsed ? "sidebar-collapsed" : ""
      }`}
    >
      <Sidebar
        isCollapsed={isCollapsed}
        isMobileOpen={isMobileOpen}
        onClose={handleSidebarClose}
        activePage="dependents"
        goToDashboard={goToDashboard}
        goToFindDoctor={goToFindDoctor}
      />

      <main className="main">
        <Header onMenuClick={handleMenuClick} />

        <section className="dep-main">
          <div className="dep-intro">
            <h1>Build Your Profile</h1>
            <p>
              This information will let us know more
              about your Family.
            </p>
          </div>

          <div className="dep-progress">
            <div className="dep-progress-line">
              <div
                className="dep-progress-fill"
                style={{
                  width: `${((step - 1) / 2) * 100}%`,
                }}
              />
            </div>

            {steps.map(function (label, index) {
              return (
                <div
                  className={`dep-progress-step ${
                    step >= index + 1 ? "active" : ""
                  }`}
                  key={label}
                >
                  <span className="dep-step-number">
                    {index + 1}
                  </span>
                  <span className="dep-step-label">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="dep-card">
            {step === 1 && (
              <div className="dep-step-content">
                <h2>Dependents Registration</h2>
                <p className="dep-description">
                  Please enter your dependent's personal
                  information.
                </p>

                <div className="dep-form">
                  <div className="dep-form-row">
                    <div className="dep-form-group">
                      <label htmlFor="dep-first-name">
                        First Name
                      </label>
                      <input
                        id="dep-first-name"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="dep-form-group">
                      <label htmlFor="dep-last-name">
                        Last Name
                      </label>
                      <input
                        id="dep-last-name"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="dep-form-group">
                    <label>Birth Date</label>

                    <div className="dep-form-row dep-date-row">
                      <select
                        aria-label="Birth month"
                        name="birthMonth"
                        value={formData.birthMonth}
                        onChange={handleChange}
                      >
                        <option value="">Month</option>
                        {[
                          "January",
                          "February",
                          "March",
                          "April",
                          "May",
                          "June",
                          "July",
                          "August",
                          "September",
                          "October",
                          "November",
                          "December",
                        ].map(function (month, index) {
                          return (
                            <option
                              key={month}
                              value={index + 1}
                            >
                              {month}
                            </option>
                          );
                        })}
                      </select>

                      <select
                        aria-label="Birth day"
                        name="birthDay"
                        value={formData.birthDay}
                        onChange={handleChange}
                      >
                        <option value="">Day</option>
                        {Array.from(
                          { length: 31 },
                          function (_, index) {
                            return index + 1;
                          }
                        ).map(function (day) {
                          return (
                            <option key={day} value={day}>
                              {day}
                            </option>
                          );
                        })}
                      </select>

                      <select
                        aria-label="Birth year"
                        name="birthYear"
                        value={formData.birthYear}
                        onChange={handleChange}
                      >
                        <option value="">Year</option>
                        {Array.from(
                          { length: 110 },
                          function (_, index) {
                            return new Date().getFullYear() - index;
                          }
                        ).map(function (year) {
                          return (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="dep-form-row">
                    <div className="dep-form-group">
                      <label htmlFor="dep-relation">
                        Relation
                      </label>
                      <select
                        id="dep-relation"
                        name="relation"
                        value={formData.relation}
                        onChange={handleChange}
                      >
                        <option value="">
                          Select Relation
                        </option>
                        <option value="Child">Child</option>
                        <option value="Spouse">Spouse</option>
                        <option value="Parent">Parent</option>
                        <option value="Sibling">Sibling</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="dep-form-group">
                      <label htmlFor="dep-gender">
                        Gender
                      </label>
                      <select
                        id="dep-gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <option value="">
                          Select Gender
                        </option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                        <option value="Prefer not to say">
                          Prefer not to say
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="dep-step-content">
                <h2>Dependents Health Records</h2>
                <p className="dep-description">
                  Please provide the health information
                  of your dependent.
                </p>

                <div className="dep-form">
                  <div className="dep-form-row">
                    <div className="dep-form-group">
                      <label htmlFor="dep-blood">
                        Blood Group
                      </label>
                      <select
                        id="dep-blood"
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                      >
                        <option value="">
                          Select Blood Group
                        </option>
                        {[
                          "A+",
                          "A-",
                          "B+",
                          "B-",
                          "AB+",
                          "AB-",
                          "O+",
                          "O-",
                          "Unknown",
                        ].map(function (group) {
                          return (
                            <option
                              key={group}
                              value={group}
                            >
                              {group}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="dep-form-group">
                      <label htmlFor="dep-allergies">
                        Allergies
                      </label>
                      <input
                        id="dep-allergies"
                        type="text"
                        name="allergies"
                        placeholder="Enter allergies, if any"
                        value={formData.allergies}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="dep-form-group">
                    <label htmlFor="dep-conditions">
                      Medical Conditions
                    </label>
                    <textarea
                      id="dep-conditions"
                      name="medicalConditions"
                      placeholder="Enter medical conditions, if any"
                      value={formData.medicalConditions}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>

                  <div className="dep-form-group">
                    <label htmlFor="dep-medications">
                      Current Medications
                    </label>
                    <textarea
                      id="dep-medications"
                      name="medications"
                      placeholder="Enter current medications, if any"
                      value={formData.medications}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="dep-step-content">
                <h2>Family Care Plan</h2>
                <p className="dep-description">
                  Choose the plan that best suits your
                  family's healthcare needs.
                </p>

                <div className="dep-plans">
                  {plans.map(function (plan) {
                    return (
                      <button
                        type="button"
                        key={plan.name}
                        className={`dep-plan-card ${
                          selectedPlan === plan.name
                            ? "selected"
                            : ""
                        }`}
                        onClick={function () {
                          setSelectedPlan(plan.name);
                          setSubmitted(false);
                        }}
                        aria-pressed={
                          selectedPlan === plan.name
                        }
                      >
                        <span className="dep-plan-title">
                          {plan.name}
                        </span>
                        <span className="dep-plan-description">
                          {plan.description}
                        </span>
                        <span className="dep-plan-check">
                          {selectedPlan === plan.name
                            ? "✓"
                            : "○"}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {submitted && (
                  <p
                    className="dep-success"
                    role="status"
                  >
                    Your information is ready. The
                    selected plan is {selectedPlan}.
                    Backend submission is not connected yet.
                  </p>
                )}
              </div>
            )}

            <div className="dep-actions">
              {step > 1 && (
                <button
                  type="button"
                  className="dep-btn dep-btn-back"
                  onClick={handleBack}
                >
                  BACK
                </button>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  className="dep-btn dep-btn-next"
                  onClick={handleNext}
                >
                  NEXT
                </button>
              ) : (
                <button
                  type="button"
                  className="dep-btn dep-btn-next"
                  onClick={handleSubmit}
                >
                  SEND
                </button>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default MyDependents;
