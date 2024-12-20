import HomeOffer from "../components/HomeOffer";
import HomeOurCampus from "../components/HomeOurCampus";
import HomeOurFacility  from "../components/HomeOurFacility";
import HomeOurTestimonial from "../components/HomeOurTesimonial";
import HomeAbout from "../components/HomeAbout";
import HomeOurEvent from "../components/HomeOurEvents";
import BigToSmallHeader from "../components/BigToSmallHeader";
import Bg from "../assets/images/banner.png"
import { TitleHook } from "../CustomHook/TitleHook";
import HomeOurNews from "../components/HomeOurNews";

export default function Home() {
  TitleHook("Home")
  return (
    <>
    <BigToSmallHeader backgroundImg={Bg} isAcitve={"/"} MainContent={"shvcvsc dkkvwhvc dwhvckhdvc"} SubContent={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus amet recusandae magnam et ipsa provident saepe tempora esse"}/>
    <HomeOffer/>
    <HomeOurCampus/>
    <HomeOurFacility/>
    <HomeOurTestimonial/>
    <HomeAbout/>
    <HomeOurNews/>
    <HomeOurEvent/>
    </>
  )
}
