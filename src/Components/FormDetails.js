import React from "react";

const FormDetails = () => {
  return (
    < div className="container" style={{ backgroundColor: "whitesmoke" }}>
      

      <h3> Book Appointment</h3>
      <div className="row col-md-12">
        <div
          className="col-md-7"
          
        >
<div>
            <div  className="col-md-12">
              <form style={{ float: "left" ,backgroundColor:'white',padding:'11px',width:'576px',marginTop:'2rem' }}>
                <h4>Personal details</h4>
                <label for="inputName" className="form-label">
                Name*
                </label>
                <input type="text" className="form-control" id="inputName4" />

                <label for="inputEmil4" className="form-label">
                Email*
                </label>
                <input type="email" className="form-control" id="inputEmail4" />

                <label for="inputPhone" className="form-label">
                 Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPhone"
                  />

                <label for="inputComments" className="form-label">
                 Comments
                </label>
                
                <textarea type="text" className="form-control" id="inputComments"></textarea>
                
              </form>
            </div> </div>
          </div>
          
        <div
          className="col-md-5"
          style={{
            backgroundColor: "white",

            marginTop: "2rem",
          }}
        >
          <h3> Appointment Summery</h3>
          <p> Service </p>
         Blow dry,45 mins
          <p style={{ float: "right" }}> Rs45.00</p>
          <hr></hr>
          <p> Location</p>
          Address Line 1,City
          <p>Postcode</p>
          <hr></hr>
          
          <p>Date & Time</p>
          Monday 11 April 2022
          <p>10:00 AM (GMT)</p>
          <hr></hr>
          <p>Personal details</p>
          Mary Kate
          <p>mkate@mail.com|+9876541235</p>
          <i>i'd love advice on the best products to get the perfect blow dry</i>
          <hr></hr>
          <b>Total</b>
          <p style={{float:'right'}}>Rs45.00</p><br></br><br></br>
          <div className="d-grid gap-2">
  
  <button className="btn btn-primary" type="button " style={{backgroundColor:"green"}}>Proceed</button>
</div>
        </div>
      </div>
  </div>
  );
};

export default FormDetails;
