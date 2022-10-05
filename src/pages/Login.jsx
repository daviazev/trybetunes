import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../images/logo.svg';

import '../styles/Login.css';

function Login() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [name, setName] = useState('');
  // const { setName, name } = useContext(appContext);
  const history = useHistory();

  const handleClick = () => {
    localStorage.setItem('username', name);
    history.push('/search');
  };

  useEffect(() => {
    const minLength = 3;
    if (name.length >= minLength) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [name]);

  return (
    <main className="page-login" data-testid="page-login">
      <section className="section-form">
        <div>
          <img src={ logo } alt="trybetunes logo" />
        </div>
        <form className="form-login">
          <label htmlFor="login-name-input">
            <input
              data-testid="login-name-input"
              className="login-name-input"
              onChange={ ({ target: { value } }) => setName(value) }
              type="text"
              placeholder="Qual é o seu nome?"
            />
          </label>
          <button
            data-testid="login-submit-button"
            className="login-submit-button"
            type="button"
            disabled={ isButtonDisabled }
            onClick={ handleClick }
          >
            ENTRAR
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
