import "../Styles/Home.css";
import home1 from '../Assets/home-c1.jpg'
import home2 from '../Assets/home-c2.jpg'
export default function Home() {
  return (
    <>
        <div className="home">
           <div className="slides">
            <div className="slide-1">
                <img src={home1} alt="" />
            </div>
            <div className="slide-2">
                <img src={home2} alt="" />
            </div>
           </div>
        </div>
    </>
  );
}
