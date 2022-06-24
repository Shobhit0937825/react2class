import React from 'react'
import '../App.css'
import icon from './icon.png'
import engine from './engine.png'


const Secondcard = () => {
    const data=[
            {
                Mileage:"17.65 to 24.3 kmpl",
                Engine:"1199-1498 cc",
                Fuel:"22.65 kmpl",
                Transmission:"Mannual/Automatic"
                
                 }

    ]

    return (
        
      <div className='vv'>
        {
            data.map((element) => {
                return(
                    <div>
                    <h1>{element.Mileage}</h1>
                    <h2>{element.Fuel}</h2>
                    </div>

                )
            })
        }
        <div className='okk'>
      <div>
<h3 className='qq'> Honda Amaze 2021 Specifications</h3>
<div className='pop'>
<div className='oo'>
<img src={icon}/><span className='bc'>Mileage</span><br></br>
<span >17.65 to 24.3 kmpl</span>
      </div>
      <div className='oo'>
        <img src={engine}/><span className='bc'>Engine </span><br></br>
        <span >1199-1498 cc</span>
        </div>
        </div>
      </div>
      <div>
      <div className='pop'>
      <div className='oo'>
        <img src={icon}/><span className='bc'>Fuel</span><br></br>
        <span >22.65 kmpl</span>
      </div>
      <div className='oo'>
        <img src={engine}/><span className='bc'>Transmission</span><br></br>
        <span >Mannual/Automatic</span>
        </div>
        </div>
      </div>
      <p className='mm'>View more Specifications> </p>
      </div>
      </div>
      
    )
}
export default Secondcard