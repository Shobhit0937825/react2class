import React from "react";
import thumbup from './thumbup.png'
import thumbsdown from './thumbsdown.png'




export default function ThirdCard(){
    return(
        <div className="fight">
            <div className="pppp">
        <div>
         <h3>91Wheels Expert Opinion about Honda Amaze 2021S</h3>
         <img src={thumbup}/> <strong>Features we admire in this car</strong>
        </div>
        <div className="me">
            <ul>
                <li>
                One of the best looking hatchbacks ever.
                </li>
                <li>
                Rides like a bigger vehicle - comfortable.
                </li>
                <li>
                India’s safest hatchback.
                </li>
            </ul>
        </div>
        <div>
            <img src={thumbsdown}/>  <strong>Features we don’t admire in this car</strong>
        </div>
        <div className="me" >
            <ul>
                <li>
                One of the best looking hatchbacks ever.
                </li>
                <li>
                Rides like a bigger vehicle - comfortable.
                </li>
                <li>
                India’s safest hatchback.
                </li>
                
            </ul>
        </div>
        </div>
        </div>
    )
}