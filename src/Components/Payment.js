import React from "react";

const Payment = () => {
  return (
    < div className="container" style={{ backgroundColor: "whitesmoke" }}>
      

      <h3> Book Appointment</h3>
      <div className="row col-md-12">
        <div
          className="col-md-7"
          
        >
          <div style={{
            backgroundColor: "white",
            padding:"5px",
            margin: "1rem"
          }}>
            <h5>Payment location</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Pay now
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label className="form-check-label" for="flexRadioDefault2">
                Pay later at location
              </label>
            </div>
</div>
<div>
            <div  className="col-md-12">
              <form style={{ float: "left" ,backgroundColor:'white',padding:'11px',width:'576px' }}>
                <h5>Billing Address</h5>
                <label for="inputCountry4" className="form-label">
                 Country*
                </label>
                <input type="text" className="form-control" id="inputCountry4" />

                <label for="inputHouse4" className="form-label">
                Flat/House/Apartment No.
                </label>
                <input type="text" className="form-control" id="inputHouse4" />

                <label for="inputAddress" className="form-label">
                 Address line 1*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />

                <label for="inputAddress2" className="form-label">
                  Address line 2*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />

                <div className="row g-3">
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">
                      City*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      aria-label="City"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">
                      State
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State"
                      aria-label="State"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <label for="inputEmail4" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Zip"
                    aria-label="Zip"
                  />
                </div>
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
          <p>  Service</p>
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

export default Payment;