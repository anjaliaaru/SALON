import React from "react";
const Date = () => {
  return (
    < div className="container" style={{ backgroundColor: "whitesmoke" }}>
      

      <h3> Book Appointment</h3>
      <div className="row col-md-12">
        <div
          className="col-md-7"
          
        >
          
<div>
            <div  className="col-md-12">
              <div style={{ float: "left" ,backgroundColor:'white',padding:'11px',width:'576px',marginTop:"2rem" }}>
                <h5>Date & Time</h5>
                <div>
                
               <p style={{textAlign:"center"}}><i style={{float:"left",marginLeft:"13rem"}} className='fa fa-arrow-left'></i>April 2022 
               <i style={{float:"right",marginRight:"13rem"}} className='fa fa-arrow-right'></i></p> 
                
                <table class="table">
  <thead>
    <tr>
      <th >Mon</th>
      <th >Tue</th>
      <th >Wed</th>
      <th >Thu</th>
      <th >Fri</th>
      <th >Sat</th>
      <th >Sun</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td >28</td>
      <td>29</td>
      <td >30</td>
      <td>31</td>
      <td>1</td>
      <td>2</td>
      <th >3</th>
    </tr>
    <tr>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      <td>8</td>
      <td>9</td>
      <th >10</th>
    </tr>
    <tr>
      <td >11</td>
      <td >12</td>
      <th >13</th>
      <td>14</td>
      <td >15</td>
      <td >16</td>
      <td>17</td>
    </tr>
    <tr>
      <td >18</td>
      <td >19</td>
      <th >20</th>
      <td>21</td>
      <td >22</td>
      <td >23</td>
      <td>24</td>
    </tr>
    <tr>
      <td >25</td>
      <td >26</td>
      <td>27</td>
      <th >28</th>
      <td >29</td>
      <td >30</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
<div>
    <p style={{textAlign:"center"}}><b>Available times(in GMT)</b></p>
    <table className="tdata1" style={{width:"100%"}}>
  
    <tr className="tdata" style={{}}>
    <td>10:00 AM</td>
    <td>11:00 AM </td>
    <td>11:00 AM</td>
    <td>11:00 AM</td>
  </tr>
  <tr className="tdata">
    <td>10:00 AM</td>
    <td>11:00 AM </td>
    <td>11:00 AM</td>
    <td>11:00 AM</td>
  </tr> 
  <tr className="tdata">
    <td>10:00 AM</td>
    <td>11:00 AM </td>
    <td>11:00 AM</td>
    <td>11:00 AM</td>
  </tr>
  <tr className="tdata">
    <td >10:00 AM</td>
    <td>11:00 AM </td>
    <td>11:00 AM</td>
    <td>11:00 AM</td>
  </tr>
  
 
</table>
</div>

                </div>
              </div>
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
          <p>Service</p>
          Blow dry,45mins
          <p style={{ float: "right" }}> Rs45.00</p>
          <hr></hr>
          <p> Location</p>
          Address Line 1,City
          <p>Postcode</p>
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

export default Date;
