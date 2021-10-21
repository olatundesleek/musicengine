import {  Slider } from 'react-rapid-carousel'
import singerImg from "../../assets/images/singerheader.png";
import "./Header.css"
function Header (){

    
return(
    <Slider dots={false} slidesToShow={1} buttons={false} autoSlide>
    <div className="header-container">
        <div className="header-info">
            <p className="trending">// TRENDING</p>
            <p className="artist-name">Akcet Feat Lidia Buble</p>
            <p className="song-title">- Kamelia</p>
        </div>
        <img className="header-images" src={singerImg} />
        </div>
        <div className="header-container">
        <div className="header-info">
            <p className="trending">// TRENDING</p>
            <p className="artist-name">Akcet Feat Lidia Buble</p>
            <p className="song-title">- Kamelia</p>
        </div>
        <img className="header-images" src={singerImg} />
        </div>
   
    
   
  </Slider>
)


}

export default Header;