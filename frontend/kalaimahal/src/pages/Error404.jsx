import BigToSmallHeader from "../components/BigToSmallHeader";
import Bg from "../assets/images/background.jpg"
import { TitleHook } from "../CustomHook/TitleHook";

function Error404() {
  TitleHook("Error")
  return (
    <BigToSmallHeader backgroundImg={Bg} isAcitve={"/e"} MainContent={"shvcvsc dkkvwhvc dwhvckhdvc"} SubContent={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus amet recusandae magnam et ipsa provident saepe tempora esse"}/>
  )
}

export default Error404