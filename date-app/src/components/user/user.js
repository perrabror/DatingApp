import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function User() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      navigate("/card");
    }
  };

  const validateForm = () => {
    if (username.length === 0 || password.length === 0 || email.length === 0 || phone.length === 0 || age.length === 0) {
      setIsFormValid(false);
      setErrorMessage("Form is not valid");
      return false;
    } else {
      setIsFormValid(true);
      setErrorMessage("");
      return true;
    }
  };

  const handleRangeChange = (event) => {
    const value = event.target.value;
    event.target.nextElementSibling.value = value;
  };

  return (
    <div className="d-flex justify-content-center align-items-center " style={{ height: "80vh" }}>
      <form style={{ backgroundColor: "rgb(221, 228, 224)" }} className="rounded col-4 p-5 form-group border border-dark" onSubmit={handleFormSubmit}>
        <h1>User</h1>
        { !isFormValid && <p style={{ color: 'red' }}>{errorMessage}</p> }
        <input className="m-1" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="m-1" type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input className="m-1" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="m-1" type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <div className="mb-3 d-flex flex-row w-75 justify-content-between mt-2">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="maleCheck" />
            <label className="form-check-label" htmlFor="maleCheck">
              Male
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="femaleCheck" />
            <label className="form-check-label" htmlFor="femaleCheck">
              Female
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="otherCheck" />
            <label className="form-check-label" htmlFor="otherCheck">
              Other
            </label>
          </div>
         
        </div>
        <div className="m-2">
            <label htmlFor="ageRange">Length:</label>
            <input type="range" id="ageRange" min="1" max="100" onInput={handleRangeChange} />
            <output>24 cm</output>
          </div>
        <input className="m-1" type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
        <Link className="btn w-50 p-2 bg-success text-light" to="/card" onClick={ handleFormSubmit} disabled={!isFormValid}>
          Enter Gnomeland
        </Link>
        
      </form>
    </div>
  );
}

export default User;
