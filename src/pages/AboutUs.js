import wel from "../Assets/welcome-img.jpg";
import mission from "../Assets/mission.jpg";
import vission from "../Assets/vission.jpg";
import shopus from "../Assets/shopwithus.jpg";
import comm from "../Assets/join-community.jpg";
import "../Styles/AboutUs.css";

export default function AboutUs() {
  return (
    <>
      <div className="aboutus">
        <div className="heading">About Page</div>

        <div className="welcome">
          <div>
            <h3>Welcome to AG Cart!</h3>
            <p>
              At AG Cart, we are passionate about providing a seamless and
              enjoyable online shopping experience. AG Cart has quickly become a
              trusted name in the e-commerce world, offering a wide range of
              products to meet the diverse needs of our customers.
            </p>
          </div>
          <div className="welcome-img">
            <img src={wel} />
          </div>
        </div>

        <div className="our-mission">
          <div className="mission-img">
            <img src={mission} />
          </div>
          <div>
            <h3>Our Mission</h3>
            <p>
              Our mission is to offer high-quality products at competitive
              prices while ensuring exceptional customer service. We strive to
              make online shopping easy, convenient, and enjoyable for everyone.
            </p>
          </div>
        </div>

        <div className="our-vission">
          <div>
            <h3>Our Vision</h3>
            <p>
              We envision AG Cart as the go-to online destination for shoppers
              seeking quality, affordability, and reliability. Our goal is to
              continuously innovate and expand our offerings to better serve our
              customers.
            </p>
          </div>
          <div className="vission-img">
            <img src={vission} />
          </div>
        </div>

        <div className="shop-with-us">
          <div className="shopus-img">
            <img src={shopus} />
          </div>
          <div>
            <h3>Why Shop With Us?</h3>
            <p>
              <ul>
                <li>
                  User-Friendly Experience: Our website is designed to provide a
                  smooth and enjoyable shopping experience.
                </li>
                <li>
                  Secure Transactions: We prioritize your security and use
                  advanced encryption technology to protect your personal
                  information.
                </li>
                <li>
                  Excellent Customer Service: Our dedicated support team is
                  always here to help you with any questions or concerns.
                </li>
                <li>
                  Customer-Centric Approach: We listen to our customers and
                  continuously improve our services based on your feedback.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="community">
          <div>
            <h3>Join Our Community</h3>
            <p>
              We believe in building a community of satisfied customers. Follow
              us on social media and subscribe to our newsletter to stay updated
              on the latest products, promotions, and exclusive offers.
            </p>
          </div>
          <div className="community-img">
            <img src={comm} />
          </div>
        </div>
      </div>
    </>
  );
}
