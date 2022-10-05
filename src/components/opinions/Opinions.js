import React from "react";
import './opinions.css'
import mujer from "./mujer.jpg";
import hombre from "./men1.jpg";
import SecoHOmbre from "./men2.jpg";

function Opiniones() {
    return (

    <><div class="cards-text">
    <h1>Nuestros usuarios dicen...</h1>
</div>

<div class="cards-container">

    <div class="cards-profile">

        <div class="cards-name"><img src={mujer} alt=""/></div>
        <div class="container-name">
            <h2>Diego Rodriguez</h2>

            <i class="fa-solid fa-star icon"></i>
            <i class="fa-solid fa-star icon"></i>
            <i class="fa-solid fa-star icon"></i>
            <i class="fa-solid fa-star icon"></i>
            <i class="fa-solid fa-star icon-color"></i>
        </div>

        <div class="cards-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolores perferendis rem ipsam
                veniam reiciendis eveniet optio eum velit, dignissimos asperiores fugit molestias ipsum
                temporibus
                rerum hic iste nulla vitae?</p>
        </div>

    </div>

    <div class="cards-profile">
        <div class="cards-name">
            <img src={hombre} alt=""/>
        </div>
        <div class="container-name">
            <h2>Diana García</h2>
            <i class="fa-solid fa-star icon"></i>
            <i class="fa-solid fa-star icon"></i>
            <i class="fa-solid fa-star icon"></i>
            <i class="fa-solid fa-star icon"></i>
            <i class="fa-solid fa-star icon"></i>
        </div>

        <div class="cards-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolores perferendis rem ipsam
                veniam reiciendis eveniet optio eum velit, dignissimos asperiores fugit molestias ipsum
                temporibus
                rerum hic iste nulla vitae?</p>
        </div>

    </div>
    <div class="cards-profile">
        <div class="cards-name">
            <img src={SecoHOmbre} alt=""/>
        </div>

        <div class="container-name">
            <h2>Diego Rodriguez</h2>
            <i class="fa-solid fa-star icon"></i>
            <i class="fa-solid fa-star icon"></i>
            <i class="fa-solid fa-star icon"></i>
            <i class="fa-solid fa-star icon"></i>
            <i class="fa-solid fa-star icon-color"></i>

        </div>

        <div class="cards-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolores perferendis rem ipsam
                veniam reiciendis eveniet optio eum velit, dignissimos asperiores fugit molestias ipsum
                temporibus
                rerum hic iste nulla vitae?</p>
        </div>

    </div>

</div></>
    );
}
export default Opiniones;