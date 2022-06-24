import React from 'react'
import star from './star.png'
import '../App.css'

const card = () => {
  return (
    
    <div className='main'>
        <div>
        <img src='https://images.91wheels.com//assets/b_images/main/models/profile/profile1629346089.png?width=360'/>
       
        
        </div>
        <div className='lol'>
        <div>
    <h1>Honda Amaze 2021</h1>
    <div className='ww'>
    <img src={star} alt='starS'></img><img src={star} alt='starS'></img><img src={star} alt='starS'></img><img src={star} alt='starS'></img><img src={star} alt='starS'></img><span><a href="#" className='rr'>190ratings/ 15 answered questions</a></span>
    </div>
    <p><strong>₹ 6.32 - 11.50 Lakh*</strong><a href="#">View price breakup</a></p>
    <p className='tt'>*Ex-showroom Price in <a href="#" className='rr'>New Delhi</a></p>
    </div>
    <div > 
       <button className='your'>View fastive Offers</button><button className='our'><strong>Contact Details</strong></button>
    </div>
    <div>
    <p className='tt'>Offer will expire in <strong>30days</strong></p>
    </div>
    </div>
    </div>
  )
    
}

export default card