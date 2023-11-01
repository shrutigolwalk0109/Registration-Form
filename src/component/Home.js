export function Home() {
  return (
    <>
      <body>
        <div className="container-fluid">
          <div className="row ">
            {/* heading */}
            <div className="background">
              <h3 className=" heading text-center top  ">
                <u>Registration Form</u>
              </h3>
              <div className="fixed cloud-img  ">
                {/* <img src={cloud} alt="cloud-img" /> */}
              </div>
            </div>
            <br></br>

            {/* Three-Stars col-md-2*/}
            <div className="col-md-2 stars star">
            {/* <img className="fixed" src={star} alt="star-img" /> */}
            </div>

            {/* Main-Form col-md-8 */}
            <form className="form col-md-8" >

              <p><span>1.</span> Full Name</p>
              <input className="input" type="text" name="n" placeholder="   Enter your name" required ></input>
              
              <br />
              <br />

              <p><span>2.</span> Email Address</p>
              <input className="input" type="email" name="n" placeholder="   Enter your email" required ></input>
              <br />
              <br />

              <p><span>3.</span> Phone Number</p>
              <input className="input" type="number" name="n" placeholder="   Enter your number" required></input>
              <br />
              <br />

              <p><span>4.</span> Select your Branch</p>
              <select class="form-select select" placeholder="   Select" aria-label="Default select example">
                <option selected></option>
                <option value="1">Computer Science Engineering</option>
                <option value="2">Electronics Engineering</option>
                <option value="3">Electronics and Telecommunication Engineering</option>
                <option value="3">AIML Engineering</option>
                <option value="3">AIDS Engineering</option>
              </select>
              <br />
              <br />


              <p><span>5.</span> Select your Study Year</p>
              <select class="form-select select" placeholder="   Select" aria-label="Default select example">
                <option selected></option>
                <option value="1">1st year</option>
                <option value="2">2nd year</option>
                <option value="3">3rd year</option>
                <option value="3">4th year</option>
               
              </select>

              <br />
              <br />

              <p><span>6.</span> Are you currently a member of any other college club?</p>
              <select class="form-select select" placeholder="   Select" aria-label="Default select example">
                <option selected></option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>

              <br />
              <br />

              <p><span>7.</span> Please briefly describe why you are interested in joining this college club.</p>
              <textarea className="input" cols={67} style={{ height: 100 }}></textarea>
              <br />
              <br />
               
              <p><span>8.</span> Do you have any previous experience or skills related to the activities of this college club?</p>
              <select class="form-select select" placeholder="   Select" aria-label="Default select example">
                <option selected></option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>
              <br />
              <br />

              <p><span>9.</span> If yes, please describe your previous experience or skills.</p>
              <textarea className="input" cols={67} style={{ height: 100 }}></textarea>
              <br />
              <br />


              <p><span>10.</span> Do you have any specific ideas or suggestions for club events or initiatives?</p>
              <select class="form-select select" placeholder="   Select" aria-label="Default select example">
                <option selected></option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>
              <br />
              <br />

              <p><span>11.</span> Please share your ideas or suggestions..</p>
              <textarea className="input" cols={67} style={{ height: 100 }}></textarea>
              <br />
              <br />

              <label for="file"><p><span>12.</span> If applicable, please attach your resume.</p></label>
              <input id="file" type="file" className="file"/>
              <br />
              <br />

               
              <button className="Button mb-3"  type="submit" placeholder="Send" form="form1" value="Submit">
                Submit
              </button>
            </form>
            <div className="col-md-2 cloud">
            {/* <img className="fixed" src={wstar} alt="wstar-img" /> */}
            </div>
       </div>
        </div>
      </body>
    </>
  );
}
