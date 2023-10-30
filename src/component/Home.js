import cloud from "../website/main-photo/cloud.png";
import star from "../website/main-photo/star.png"
import wstar from "../website/main-photo/w-star.png"


export function Home() {
  return (
    <>
      <body>
        <div className="container-fluid">
          <div className="row ">
            {/* heading */}
            <div className="background">
              <h3 className=" heading text-center top mb-3 ">
                <u>REGISTRATION FORM</u>
              </h3>
              <div className="fixed cloud-img  ">
                <img src={cloud} alt="cloud-img" />
              </div>
            </div>
            <br></br>

            {/* Three-Stars col-md-2*/}
            <div className="col-md-2 stars star">
            <img className="fixed" src={star} alt="star-img" />
            </div>

            {/* Main-Form col-md-8 */}
            <form className="form col-md-8" >

              <p>1. Full Name</p>
              <input className="name" type="text" name="n" placeholder="   First name" required ></input>
              <input className="name" type="text" name="n" placeholder="   Last name" required ></input>
              <br />
              <br />

              <p>2. Email Address</p>
              <input className="input" type="email" name="n" placeholder="   Enter your email" required ></input>
              <br />
              <br />

              <p>3. Phone Number</p>
              <input className="input" type="number" name="n" placeholder="   Enter your number" required></input>
              <br />
              <br />

              <p>4. Select your Branch</p>
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


              <p>5. Select your Study Year</p>
              <select class="form-select select" placeholder="   Select" aria-label="Default select example">
                <option selected></option>
                <option value="1">1st year</option>
                <option value="2">2nd year</option>
                <option value="3">3rd year</option>
                <option value="3">4th year</option>
               
              </select>

              <br />
              <br />

              <p>6. Are you currently a member of any other college club?</p>
              <select class="form-select select" placeholder="   Select" aria-label="Default select example">
                <option selected></option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>

              <br />
              <br />

              <p>7. Please briefly describe why you are interested in joining this college club.</p>
              <textarea className="input" cols={67} style={{ height: 100 }}></textarea>
              <br />
              <br />
               
              <p>8. Do you have any previous experience or skills related to the activities of this college club?</p>
              <select class="form-select select" placeholder="   Select" aria-label="Default select example">
                <option selected></option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>
              <br />
              <br />

              <p>9. If yes, please describe your previous experience or skills.</p>
              <textarea className="input" cols={67} style={{ height: 100 }}></textarea>
              <br />
              <br />


              <p>10. Do you have any specific ideas or suggestions for club events or initiatives?</p>
              <select class="form-select select" placeholder="   Select" aria-label="Default select example">
                <option selected></option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>
              <br />
              <br />

              <p>11. Please share your ideas or suggestions..</p>
              <textarea className="input" cols={67} style={{ height: 100 }}></textarea>
              <br />
              <br />

              <label for="file">12. If applicable, please attach your resume.</label>
              <input id="file" type="file" className="file"/>
              <br />
              <br />

               
              <button className="Button d-grid gap-2 d-md-block" type="submit" placeholder="Send" form="form1" value="Submit">
                Submit
              </button>
            </form>
            <div className="col-md-2 cloud wstar">
            <img className="fixed" src={wstar} alt="wstar-img" />
            </div>
            
           

       </div>
        </div>
      </body>
    </>
  );
}
