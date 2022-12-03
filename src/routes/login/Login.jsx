import { useState } from 'react'
import { auth, provider } from '../../firebase/config';
import { Link, useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { FcGoogle } from "react-icons/fc"
import "./Login.css"
const Login = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .then(response => {
        if (response) {
          history.push("/")

        }
      })
      .catch(err => alert(t("no such account found")))
    }



  const loginWithGoogle = () => {
    auth.signInWithPopup(provider)
      .then(response => {
        if (response) {
          history.push("/")
        }
      })
      .catch(err => console.log(err.message))
  }

  
  
  return (
    <div className="bodyLogin">
      <section class="container">
        <div class="loginContainer">

          <div class="formContainer">
            
            <h1 class="opacity">{t("Log in")}</h1>
            <form onSubmit={loginUser}>
              <input className='signupUseremail' placeholder={t('Email')} type="email" required onChange={e => { setEmail(e.target.value) }} />
              <input className='signupUserpassword' placeholder={t('Password')} type="password" required minLength={8} onChange={e => { setPassword(e.target.value) }} />
              <button className='signupBtn opacity' type='submit'>{t("Log in")}</button>
            </form>
            <div class="register">
              <Link to="/signup">REGISTER</Link>
              <Link onClick={loginWithGoogle}>Google <FcGoogle className='googleIcon' /></Link>
              
            </div>
          </div>
        </div>
        
      </section>
    </div>

  )

}

export default Login
