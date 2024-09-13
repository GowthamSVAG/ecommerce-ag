import "../Styles/Signup&Login.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="login-contianer">
        <div className="header">
          <div className="text-signup">Signup</div>
          <div className="underline"></div>
        </div>
      </div>
      {/* onSubmit={handleSubmit} */}
      <form>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="User Name" name="username" />
          </div>
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email" name="email" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" name="password" />
          </div>

          <div className="submit-container">
            <button className="submit">Login</button>
          </div>
        </div>
      </form>
    </>
  );
}
