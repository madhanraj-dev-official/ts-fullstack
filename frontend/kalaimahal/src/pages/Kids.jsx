import React from 'react'
import BigToSmallHeader from "../components/BigToSmallHeader";
import Bg from "../assets/images/background.jpg"
import { TitleHook } from '../CustomHook/TitleHook';

function Kids() {
  TitleHook("Kids")
  return (
    <div>
    <BigToSmallHeader backgroundImg={Bg} isAcitve={"/kids"} MainContent={"shvcvsc dkkvwhvc dwhvckhdvc"} SubContent={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus amet recusandae magnam et ipsa provident saepe tempora esse"}/>
    </div>
  )
}

export default Kids