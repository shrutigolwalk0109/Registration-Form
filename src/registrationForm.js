import React, { useState, useRef } from "react";

function RegistrationForm() {
  const formRef = useRef(null);
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbzhqwFLKY84zw_YXp3xF8RKnvFuy457eioGLsTJMFtn099I1DsqMpkTMKX-c-GYeBdZmA/exec";
  const [openForm, setOpenForm] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    major: "",
    year: "",
    branch: "",
    monumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setOpenForm(!openForm);
    console.log(formData);
    fetch(scriptUrl, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        setOpenForm(!openForm);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {openForm && (
        <>
          <div className="container registration-form">
            <h2>College Club Registration</h2>
            <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>College:</label>
                <input
                  type="text"
                  name="college"
                  className="form-control"
                  value={formData.college}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Major/Degree:</label>
                <input
                  type="text"
                  name="major"
                  className="form-control"
                  value={formData.major}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Year:</label>
                <select
                  name="year"
                  className="form-control"
                  value={formData.year}
                  onChange={handleChange}
                >
                  <option value="">Select Year</option>
                  <option value="First Year">First Year</option>
                  <option value="Second Year">Second Year</option>
                  <option value="Third Year">Third Year</option>
                  <option value="Forth Year">Forth Year</option>
                </select>
              </div>
              <div className="form-group">
                <label>Branch:</label>
                <input
                  type="text"
                  name="branch"
                  className="form-control"
                  value={formData.branch}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-group">
                <label>Contact No.(Whatsapp) :</label>
                <input
                  type="number"
                  name="monumber"
                  className="form-control"
                  value={formData.monumber}
                  onChange={handleChange}
                ></input>
              </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </form>
          </div>
        </>
      )}
      {!openForm && (
        <>
          <div className="thank-you-container">
            <h1>Thank You for Submitting Your Data</h1>
            <p>Your registration has been successfully submitted.</p>
            <p>We appreciate your interest in our college club event.</p>
          </div>
        </>
      )}
    </>
  );
}

export default RegistrationForm;
