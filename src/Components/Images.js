import React from 'react'

const Images = () => {
  return (
    <div>
        
        <div style={{backgroundColor:'lightgrey'}}>
        <div style={{marginLeft:'4rem'}}><i style={{marginTop:'2rem'}}className='fa fa-arrow-left'>Back</i>
        <h2 style={{marginLeft:'1rem'}}>Gallery Images</h2></div>
        <div className='container' style={{border:"1px solid black",backgroundColor:'white',marginTop:'2rem', mrrginLeft:'2rem',alignItems:"center",width:'60%',height:'400px'}}>
            <div style={{backgroundColor:'white'}}><h4>Image details</h4>
            <p>This images will be part of the Gallery</p>
            <div className='box' style={{border:"1px dashed ", borderRadius:'6px' ,width:"30%",height:"50%",marginLeft:"2rem"}}>
                <div><h1 style={{alignItems:'center',marginLeft:'8rem',marginTop:'4rem'}}>+</h1>
                <h4 style= {{marginLeft:'4rem'}}>Add Image</h4>
                <h6 style={{marginLeft:'5rem'}}>Max 20MB</h6>
                </div>
            </div></div>
        </div>
    </div>
    </div>
  )
}

export default Images