import React from 'react'

export function Center() {
  return (
     <div id="center">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <ul className="cars">
            <li>
                <span className="material-symbols-outlined">
                    directions_car
                </span>
            </li>
            <li className="space"></li> 
            <li>12</li>
        </ul>

        <ul className="motocycles">
            <li>
                <span className="material-symbols-outlined">
                    motorcycle
                </span>
            </li>
            <li className="space"></li>
            <li>5</li>
        </ul>
    </div>
  )
}
