import React from 'react'
import "./Makeup.css";
const Pearl = () => {
  return (
  <>
 <div style={{backgroundColor:'lightGrey'}}>
  <div >
     <div style={{display:'flex' , justifyContent:'space-between'}} >
      <h4 style={{marginTop:'4rem',marginLeft:'3rem'}} className="gallery">Gallery</h4>
        <div><button style={{backgroundColor:'green',marginRight:'12rem',color:'white',marginTop:'4rem'}} type="submit">
       Add image</button></div></div><br></br><br></br>
      
      <input className=" col-md-9" type="search" placeholder="Search" aria-label="Search" />
      <div style={{marginRight:'9rem' ,display:'flex',float:'right'}}>
       
          <button  className="icon"><i className="fa fa-th"> Grid View</i></button>
         <button className="icon2"> <i className="fa fa-list">listView</i></button>
         </div> </div><br></br>
      <table className="table">
  <thead>
    <tr>
      <th scope="col"><input type="checkbox"/></th>
      <th scope="col">Image</th>
      <th scope="col">Uploaded on</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><input type="checkbox"/></th>
      <td><img
              src=" https://www.paintshoppro.com/static/psp/images/pages/seo/ui-screenshot.jpg"alt="" height="25" width="25"
            /></td>
      <td>March 29 2022 11:37</td>
      <td><i className="fa fa-edit"></i></td>
    </tr>
    <tr>
      <th scope="row"><input type="checkbox"/></th>
      <td><img src="https://www.paintshoppro.com/static/psp/images/pages/seo/ui-screenshot.jpg" alt="" height="25" width="25"/></td>
      <td>March 29 2022 11:37</td>
      <td><i className="fa fa-edit"></i></td>
    </tr>
    <tr>
      <th scope="row"><input type="checkbox"/></th>
      <td><img
              src=" https://www.paintshoppro.com/static/psp/images/pages/seo/ui-screenshot.jpg"alt="" height="25" width="25"
            /></td>
      <td>March 29 2022 11:37</td>
      <td><i className="fa fa-edit"></i></td>
    </tr>
    <tr>
      <th scope="row"><input type="checkbox"/></th>
      <td><img
              src=" https://www.paintshoppro.com/static/psp/images/pages/seo/ui-screenshot.jpg"alt="" height="25" width="25"
            /></td>
      <td>March 29 2022 11:37</td>
      <td><i className="fa fa-edit"></i></td>
    </tr>
    <tr>
      <th scope="row"><input type="checkbox"/></th>
      <td><img
              src=" https://www.paintshoppro.com/static/psp/images/pages/seo/ui-screenshot.jpg"alt="" height="25" width="25"
            /></td>
      <td>March 29 2022 11:37</td>
      <td><i className="fa fa-edit"></i></td>
    </tr>
    <tr>
      <th scope="row"><input type="checkbox"/></th>
      <td><img
              src=" https://www.paintshoppro.com/static/psp/images/pages/seo/ui-screenshot.jpg"alt="" height="25" width="25"
            /></td>
      <td>March 29 2022 11:37</td>
      <td><i className="fa fa-edit"></i></td>
    </tr>
    <tr>
      <th scope="row"><input type="checkbox"/></th>
      <td><img
              src=" https://www.paintshoppro.com/static/psp/images/pages/seo/ui-screenshot.jpg"alt="" height="25" width="25"
            /></td>
      <td>March 29 2022 11:37</td>
      <td><i className="fa fa-edit"></i></td>
    </tr>
    <tr>
      <th scope="row"><input type="checkbox"/></th>
      <td><img
              src=" https://www.paintshoppro.com/static/psp/images/pages/seo/ui-screenshot.jpg"alt="" height="25" width="25"
            /></td>
      <td>March 29 2022 11:37</td>
      <td><i className="fa fa-edit"></i></td>
    </tr>

  </tbody>
</table>
</div>
       </>
  )
}

export default Pearl