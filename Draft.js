// import '../Styles/Signup&Login.css';
// import user_icon from '../Assets/person.png';
// import email_icon from '../Assets/email.png';
// import password_icon from '../Assets/password.png';
// import { useState } from 'react';
// import { emailValidator, passValidator, usernameValidator } from './FormValidator';

// export default function Signup() {
//     const [userErrorMessage, setUserErrorMessage] = useState('');
//     const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
//     const [emailErrorMessage, setEmailErrorMessage] = useState('');

//     const[email,setEmail]=useState('');
//     const[password,setPassword]=useState('');
//     const[username,setUsername]=useState('');


//     function formSubmit(e)
//     {
//         e.preventDefault();
//         if (!usernameValidator(username)) {
            
//             return setUserErrorMessage("Invalid Username ");
//         }
//         if (!emailValidator(email)) {
            
//             return setEmailErrorMessage("Invalid Email ");
//         }
//         if (!passValidator(password)){
//             return setPasswordErrorMessage("Minimum eight characters, at least one letter, one number and one special character");
            
//         }
//     }

//     const clearErrorMessage = () => {
//         setUserErrorMessage('');
//         setPasswordErrorMessage('');
//         setEmailErrorMessage('');
//     }

//     return (
//         <>    
//             <div className='login-contianer'>
//                 <div className='header'>
//                     <div className='text-signup'>Signup</div>
//                     <div className='underline'></div>
//                 </div>

//                 {userErrorMessage.length > 0 && <div style={{ color: 'red', paddingLeft: "610px", marginTop: "10px", marginBottom: "0px" }}>
//                     {userErrorMessage}
//                 </div>}

//                 {passwordErrorMessage.length > 0 && <div style={{ color: 'red', paddingLeft: "610px", marginTop: "10px", marginBottom: "0px" }}>
//                     {passwordErrorMessage}
//                 </div>}

//                 {emailErrorMessage.length > 0 && <div style={{ color: 'red', paddingLeft: "610px", marginTop: "10px", marginBottom: "0px" }}>
//                     {emailErrorMessage}
//                 </div>}

//                 <form onSubmit={formSubmit}>
//                     <div className='inputs'>
//                         <div className='input'>
//                             <img src={user_icon} alt='' />
//                             <input type='text' placeholder='User Name' name='username' onChange={(e)=>{setUsername(e.target.value)}} onFocus={clearErrorMessage} />
//                         </div>
//                         <div className='input'>
//                             <img src={email_icon} alt=''/>
//                             <input type='email' placeholder='Email' name='email' onChange={(e)=>{setEmail(e.target.value)}} onFocus={clearErrorMessage}/>
//                         </div>
//                         <div className='input'>
//                             <img src={password_icon} alt='' />
//                             <input type='password' placeholder='Password' name='password' onChange={(e)=>setPassword(e.target.value)} onFocus={clearErrorMessage} />
//                         </div>
                        
//                         <div className='submit-container'>
//                             <button className='submit'>Login</button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </>
//     );
// }
