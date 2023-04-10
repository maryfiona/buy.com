import React from "react";

import Monster1 from '../assets/monster.png' 

const Monsters = () => {

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(res =>{
        
    })
    
   
    
    



    return (

        <>

            <div className="text-center">
                <h1> Monsters list</h1>
               
                <input type="" name="" placeholder="search monsters" />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    <img width="300" src={Monster1} alt='monster' />
                    <h3 className="text-center">leanne Graham</h3>
                    <p className="text-center">sinccre@april.biz</p>


                    </div>
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-3">

                    </div>
                </div>

            </div>

        </>
    )


}

export default Monsters;