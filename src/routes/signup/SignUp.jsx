import {useState} from 'react';
import { auth } from '../../firebase/config';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./SignUp.css"
import { Link } from 'react-router-dom';
const SignUp = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [possibleError, setPossibleError] = useState("");

  const createUser = (e) => {
    
    e.preventDefault();
    
    auth.createUserWithEmailAndPassword(email, password)
      .then(response => {

        if(response){
          history.push("/login");
        }
      })
      .catch(err => {
        setPossibleError(err.message);
      })
  } 

  const { t } = useTranslation();



  return (
    <div className="bodyLogin">
      <section class="container">
        <div class="loginContainer">
          <div class="formContainer">
            <h1 class="opacity">{t("Create  account")}</h1>
            <form onSubmit={createUser}>
              <input className='signupUseremail' placeholder={t('Email')} type="email" required onChange={e => {setEmail(e.target.value)}} />
              <input className='signupUserpassword' placeholder={t('Password')} type="password" required minLength={8} onChange={e => {setPassword(e.target.value)}} />
              <button className='signupBtn opacity' type='submit'>{t("Create  account")}</button>
            </form>
          </div>
          
        </div>
        
      </section>
    </div>

  )
  
  
  
}

export default SignUp