function User() {

    return (
        <div className="d-flex p-2 justify-content-center align-items-center" style={{height:"100vh"}}>
            <form className="d-flex flex-column w-50 form-group">
            <h1>User</h1>
<input className="m-1" type = "text" placeholder = "Username" />
<input className="m-1" type = "text" placeholder = "Password" />
<input className="m-1" type = "text" placeholder = "Email" />
<input className="m-1" type = "text" placeholder = "Phone" />
<div className="mb-3  ">
  <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="maleCheck" />
    <label className="form-check-label" for="maleCheck">
      Male
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="femaleCheck" />
    <label className="form-check-label" for="femaleCheck">
      Female
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="otherCheck" />
    <label className="form-check-label" for="otherCheck">
      Other
    </label>
  </div>
</div>
<   input type = "text" placeholder = "Age" />
<button className="btn mt-2 w-50 p-2 bg-primary">Enter Gnomeland</button>
            </form>
        </div>
    )
}

export default User;