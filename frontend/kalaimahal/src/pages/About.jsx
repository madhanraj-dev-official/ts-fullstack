import React from 'react'
import { TitleHook } from '../CustomHook/TitleHook'
import BigToSmallHeader from '../components/BigToSmallHeader'
import Bg from "../assets/images/about.jpg"

function About() {
  TitleHook("About")
  return (
    <div>
    <BigToSmallHeader backgroundImg={Bg} isAcitve={"/about"} MainContent={"shvcvsc dkkvwhvc dwhvckhdvc"} SubContent={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus amet recusandae magnam et ipsa provident saepe tempora esse"}/>
    </div>
  )
}
export default About