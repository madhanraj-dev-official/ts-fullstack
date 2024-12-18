import BigHeader from './BigHeader'
import Header from './Header'

export default function BigToSmallHeader({MainContent,SubContent,isAcitve,backgroundImg}) {
  const BarStyle = {
    backgroundImage: `linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url(${backgroundImg})`,
  }
  return (
    <>
        <BigHeader MainContent={MainContent} Img={BarStyle} SubContent={SubContent}/>
        <Header isAcitve={isAcitve}/>
    </>
  )
}

