import "../style/Slider.css";
import "../js/Slider.js";
import img1 from "../assets/portadas/img1.jpg";
import img2 from "../assets/portadas/img2.jpg";
import img3 from "../assets/portadas/img3.jpg";
import img4 from "../assets/portadas/img4.jpg";

const Slider = () => {
  
  return (
    <>
      <h1>Slider Infinito</h1>
      <div className="container-slider">
        <div className="slider" id="slider">
          <div className="slider__section">
            <img src={img1} alt="" className="slider__img" />
          </div>
          <div className="slider__section">
            <img src={img2} alt="" className="slider__img" />
          </div>
          <div className="slider__section">
            <img src={img3} alt="" className="slider__img" />
          </div>
          <div className="slider__section">
            <img src={img4} alt="" className="slider__img" />
          </div>
        </div>
        <div className="slider__btn slider__btn--rigth" id="btn-left">
          ⏩
        </div>
        <div className="slider__btn slider__btn--left" id="btn-rigth">
          ⏪
        </div>
      </div>
    </>
  );
};

export default Slider;
