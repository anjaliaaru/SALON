import React from "react";
import "./Makeup.css";
export default function Makeup() {
  return (
    <div className="container1">
      <div >
      <div style= {{display:'flex' , justifyContent:'space-between', paddingTop:'20px' ,marginLeft:'10px'}}>
        <h4 className="gallery ">Gallery</h4>
        <div style={{marginRight:'14rem',backgroundColor:'green'}}>
        <button className="btn  d-flex" type="submit">
          Add image</button></div></div>
      <br></br><br></br>
        <div style={{marginRight:'9rem' ,display:'flex',float:'right'}}>
          <button className="icons"><i className="fa fa-th"> Grid View</i></button>
         <button className="icon1"> <i className="fa fa-list">list View</i>
        </button>
        </div>
  
      <div className="row" style={{ display: "flex" }}>
        <div className="col-md-3">
          <div className="card">
          <img
              src=" https://www.paintshoppro.com/static/psp/images/pages/seo/ui-screenshot.jpg"alt="..." 
            />
            <div className="card-body">
              <div className="card-title">
                Uploaded on<br></br>March 29 2022, 11:37{" "}
                <div className="del"><i className="fa fa-trash"></i></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src="https://www.paintshoppro.com/static/psp/images/pages/seo/ui-screenshot.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <div className="card-title">
                Uploaded on<br></br>March 29 2022, 11:37{" "}
                <div className="del"><i className="fa fa-trash"></i></div>
              </div>
            </div>
          </div>
        </div>
      <div className="col-md-3">
        <div className="card">
          <img
            src="https://www.paintshoppro.com/static/psp/images/pages/seo/ui-screenshot.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <div className="card-title">
              Uploaded on<br></br>March 29 2022, 11:37{" "}
              <div className="del"><i className="fa fa-trash"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <img
            src="https://www.paintshoppro.com/static/psp/images/pages/seo/ui-screenshot.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <div className="card-title">
              Uploaded on<br></br>March 29 2022, 11:37{" "}
              <div className="del"><i className="fa fa-trash"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <img
            src="https://www.paintshoppro.com/static/psp/images/pages/seo/ui-screenshot.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <div className="card-title">
              Uploaded on<br></br>March 29 2022, 11:37{" "}
              <div className="del"><i className="fa fa-trash"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <img
            src="https://www.paintshoppro.com/static/psp/images/pages/seo/ui-screenshot.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <div className="card-title">
              Uploaded on<br></br>March 29 2022, 11:37{" "}
              <div className="del"><i className="fa fa-trash"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <img
            src="https://www.paintshoppro.com/static/psp/images/pages/seo/ui-screenshot.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <div className="card-title">
              Uploaded on<br></br>March 29 2022, 11:37{" "}
              <div className="del"><i className="fa fa-trash"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <img
            src="https://www.paintshoppro.com/static/psp/images/pages/seo/ui-screenshot.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <div className="card-title">
              Uploaded on<br></br>March 29 2022, 11:37{" "}
              <div className="del"><i className="fa fa-trash"></i></div>
            </div>
          </div>
        </div>
      </div>
   </div>
   </div>
   </div>
    
  );
}
