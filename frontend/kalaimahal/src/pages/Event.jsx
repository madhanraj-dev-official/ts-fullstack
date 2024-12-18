import React from 'react'
import BigToSmallHeader from "../components/BigToSmallHeader";
import Bg from "../assets/images/basketball.png"
import { TitleHook } from '../CustomHook/TitleHook';

function Event() {
  TitleHook("Event")
  return (
    <div>
    <BigToSmallHeader backgroundImg={Bg} isAcitve={"/event"} MainContent={"shvcvsc dkkvwhvc dwhvckhdvc"} SubContent={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus amet recusandae magnam et ipsa provident saepe tempora esse"}/>
    </div>
  )
}

export default Event