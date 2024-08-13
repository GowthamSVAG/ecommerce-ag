import "../Styles/Home.css";
import home1 from "../Assets/home-c1.jpg";
import home2 from "../Assets/home-c2.jpg";
import home3 from "../Assets/home-c3.jpg";
import home4 from "../Assets/home-c4.jpg";
export default function Home() {
  return (
    <>
      <div className="home">
        <div class="slider">
          <figure>
            <div class="slide">
              <img src={home1} alt="" />
            </div>
            <div class="slide">
              <img src={home2} alt="" />
            </div>
            <div class="slide">
              <img src={home3} alt="" />
            </div>
            <div class="slide">
              <img src={home4} alt="" />
            </div>
          </figure>
        </div>
      </div>
    </>
  );
}
