import '../Styles/Signup&Login.css';
import user_icon from '../Assets/person.png';


import password_icon from '../Assets/password.png';
export default function Login()
{
    return<>
        <div className='login-container'>
        <div className='header'>
            <div className='text'>Login</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={user_icon} alt=''/>
                <input type='text' placeholder='User Name'/>
            </div>

            <div className='input'>
                <img src={password_icon} alt=''/>
                <input type='password' placeholder='Password'/>
            </div>
            
            <div className='submit-container'>
                <div className='submit'>Login</div>
                
            </div>
        </div>
    </div>
    </>
}