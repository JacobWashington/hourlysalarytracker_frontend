import { React, useState } from "react";
import "./RegisterForm.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment-timezone";
import { RxCalendar } from "react-icons/rx";
import axios from "axios"; // Import axios for API requests

const RegisterForm = (props) => {
  const timezones = moment.tz.zonesForCountry("US");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [hireDate, setHireDate] = useState(new Date());
  const [selectedHomeStation, setSelectedHomeStation] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const [error, setError] = useState(""); // State for error handling
  const [success, setSuccess] = useState(""); // State for success message

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLasttNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDateChange = (date) => {
    setHireDate(date);
  };

  const handleHomeStationChange = (event) => {
    setSelectedHomeStation(event.target.value);
  };

  const handleTimezoneChange = (event) => {
    setSelectedTimezone(event.target.value);
  };

  const handleSubmit = async () => {
    const userData = {
      firstName,
      lastName,
      email,
      hireDate: hireDate.toISOString(), // Convert date to ISO string
      homeStation: selectedHomeStation,
      timezone: selectedTimezone,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/users/register",
        userData
      ); // Adjust the URL as necessary
      setSuccess("Registration successful!"); // Set success message
      setError(""); // Clear any previous errors
    } catch (error) {
      setError("Registration failed. Please try again."); // Set error message
      setSuccess(""); // Clear any previous success messages
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="rf">
      <div className="rf-input-section rf-name">
        <div className="rf-input-container">
          <input
            className="input firstname"
            placeholder="First Name"
            onChange={handleFirstNameChange}
          />
          <input
            className="input lastname"
            placeholder="Last Name" // Fixed placeholder
            onChange={handleLasttNameChange}
          />
        </div>
      </div>
      <div className="rf-input-section rf-email">
        <div className="rf-input-container">
          <input
            className="input email"
            placeholder="example@email.com"
            onChange={handleEmailChange}
          />
        </div>
      </div>
      <div className="rf-input-section rf-homeStation">
        <div className="rf-input-container">
          <select
            className="input homeStation"
            value={selectedHomeStation}
            onChange={handleHomeStationChange}
          >
            <option value="" disabled>
              Select Home Station
            </option>
            {props.homeStations.map((station) => (
              <option key={station} value={station}>
                {station}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="rf-input-section rf-hireDate">
        <DatePicker
          selected={hireDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          placeholderText="yyyy-mm-dd"
          className="input hireDate"
          calendarIconClassName="rf-calendar-icon"
          icon={<RxCalendar />}
          showIcon={true}
        />
      </div>
      <div className="rf-input-section rf-timezone">
        <div className="rf-input-container">
          <select
            className="input timezone"
            value={selectedTimezone}
            onChange={handleTimezoneChange}
          >
            <option value="" disabled>
              Select timezone
            </option>
            {timezones.map((timezone) => (
              <option key={timezone} value={timezone}>
                {timezone}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div
        className="button rf-submit"
        id="rf-submit-btn"
        onClick={handleSubmit}
      >
        <div>Register</div>
      </div>
      {error && <p className="error-message">{error}</p>} {/* Error message */}
      {success && <p className="success-message">{success}</p>}{" "}
      {/* Success message */}
    </div>
  );
};

export default RegisterForm;