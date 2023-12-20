import "../Header/Header.scss";
 import React, { useState } from "react";
 import Logo from '../../../public/Logo.png'
 import burger from '../../../public/burg_the_main.png'
 import elipse from "../../../public/ell.png"

 export default function Header(){
  return (
    <div className="header">
        <div className="main_block">

            
            <img className="logotype" src={Logo} alt="" />
           <div className="burr">
           <img className="burge_main_one" src={burger} alt="" />
           </div>
           <div className="text_burgers">
           <p className="first_part">
            Только самые
            </p>
            <p className="second_parts">
            сочные бургеры!
            </p>
           </div>
        
         
        </div>
    </div>
  )
 }