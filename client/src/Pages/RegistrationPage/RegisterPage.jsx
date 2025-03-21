import React,{useRef,useState} from 'react'
import axios from '../../axiosConfig';
import {useNavigate} from 'react-router-dom';
import './RegisterPage.css';
const RegisterPage = () => {
    const navigate = useNavigate();
    const userNameDom = useRef();
    const firstNameDom = useRef();
    const lastNameDom = useRef();
    const emailDom = useRef();
    const passwordDom = useRef();
    const [showPassword, setShowPassword] = useState(false);
  
    async function handleSSubmit(e) {
        e.preventDefault();
        const userNameValue = userNameDom.current.value;
        const firstNameValue = firstNameDom.current.value;
        const lastNameValue = lastNameDom.current.value;
        const emailValue = emailDom.current.value;
        const passwordValue = passwordDom.current.value;
        if( !userNameValue ||
            !firstNameValue ||
            !lastNameValue ||
            !emailValue ||
            !passwordValue 
        ){
            alert("Please Provide all required information")
            return;
        }
        try{
            await axios.post("/users/register",{
                username:userNameValue,
                firstname:firstNameValue,
                lastname:lastNameValue,
                email:emailValue,
                password:passwordValue
            });
            alert("Register Successfully Please Login");
            navigate("/login");
        } catch (error){
            console.log(error.response);
        }
    }
  return (
        <section className="register-container">
      <h2>Join the Network</h2>
            <form onSubmit={handleSSubmit}>
                    <input ref={userNameDom} 
                    type="text" placeholder='username' />
                    <input
                    ref={firstNameDom} 
                    type="text" placeholder="First Name" />
                    <input 
                    ref={lastNameDom}
                    type="text" placeholder="Last Name" />
                    <span>Email:</span>
                    <input 
                    ref={emailDom}
                    type="email" placeholder="email" />
                <div className="password-container">
                    <span>Password:</span>
                    <input 
                    ref={passwordDom}
                    type={showPassword ? "text" : "password"}
                    placeholder="password" />
                     <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? "🙈" : "👁️"}
          </span>
                </div>
                <button type="submit">Agree and Join</button>
                {/* <button type='submit'>Register</button> */}
            </form>
        </section>
  )
}

export default RegisterPage;
