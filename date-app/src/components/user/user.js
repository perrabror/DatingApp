import React, { useState } from "react";
import { Link } from "react-router-dom";

function User() {
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const inputs = document.querySelectorAll("input[type='text']");
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "") {
        setIsFormValid(false);
        return;
      }
    }
    setIsFormValid(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center " style={{ height: "80vh"  }}>
      <form style={{backgroundColor: "rgba("}}className="col-4 form-group border border-light ">
        <h1>User</h1>
        <input className="m-1" type="text" placeholder="Username" />
        <input className="m-1" type="text" placeholder="Password" />
        <input className="m-1" type="text" placeholder="Email" />
        <input className="m-1" type="text" placeholder="Phone" />
        <div className="mb-3 d-flex flex-row w-75 justify-content-between">
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
        <input className="m-1" type="text" placeholder="Age" />
        <Link className="btn w-50 p-2 bg-success text-light" to="/card" onClick={validateForm} disabled={!isFormValid}>
          Enter Gnomeland
        </Link>
      </form>
    </div>
  );
}

export default User;
