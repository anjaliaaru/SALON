import React from 'react'

const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="Makeup">Makeup</a>
          <a className="nav-link active" aria-current="page" href="Pearl">Pearl</a>
          <a className="nav-link active" aria-current="page" href="Images">Images</a>
          <a className="nav-link active" aria-current="page" href="Booking">Booking</a>
          <a className="nav-link active" aria-current="page" href="MaterialUI">MaterialUI</a>
          <a className="nav-link active" aria-current="page" href="Date">Date & time</a>
          <a className="nav-link active" aria-current="page" href=" Details">Personal details</a>
          <a className="nav-link active" aria-current="page" href="Payment">Payment</a>
        
          
        </div>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar