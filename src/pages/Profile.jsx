import React, { useState } from 'react';
import Header from '../components/Header';

import '../styles/Profile.css';

function Profile() {
  const [name, setName] = useState(localStorage.getItem('username'));
  const [email, setEmail] = useState(localStorage.getItem('user-email'));
  const [description, setDescription] = useState(localStorage.getItem('description'));
  const [link, setLink] = useState(localStorage.getItem('image-link'));

  const [editToggle, setEditToggle] = useState(false);

  const editProfile = () => {
    setEditToggle(true);
  };

  const saveProfileInfos = () => {
    localStorage.setItem('username', name);
    localStorage.setItem('user-email', email);
    localStorage.setItem('description', description);
    localStorage.setItem('image-link', link);
    setEditToggle(false);
  };

  return (
    <div className="main-container" data-testid="page-profile">
      <div>
        <Header />
      </div>
      <div className="profile-section">
        <div className="profile-div-1">
          <img
            className="user-photo"
            src={ link }
            alt=""
          />
        </div>
        <div className="profile-div-2">
          { editToggle ? (
            <>
              <label htmlFor="input-image">
                <input
                  className="input-image"
                  id="input-image"
                  type="text"
                  placeholder="INSIRA UM LINK"
                  value={ link }
                  onChange={ ({ target: { value } }) => setLink(value) }
                />
              </label>
              <div className="profile-infos">
                <label className="label-profile" htmlFor="name-input">
                  <span className="span">Nome</span>
                  <input
                    type="text"
                    id="name-input"
                    className="profilee-inputs"
                    value={ name }
                    onChange={ ({ target: { value } }) => setName(value) }
                  />
                </label>
                <label className="label-profile" htmlFor="email-input">
                  <span className="span">Email</span>
                  <input
                    type="email"
                    id="email-input"
                    className="profilee-inputs"
                    value={ email }
                    onChange={ ({ target: { value } }) => setEmail(value) }
                  />
                </label>
                <span className="span">Descrição</span>
                <textarea
                  className="description-textarea"
                  cols="58"
                  rows="7"
                  placeholder="Sobre mim"
                  onChange={ ({ target: { value } }) => setDescription(value) }
                >
                  {description}

                </textarea>
                <button
                  className="edit-button"
                  type="button"
                  onClick={ () => saveProfileInfos() }
                >
                  SALVAR

                </button>
              </div>
            </>
          ) : (
            <div className="profile-infos">
              <h2>{name}</h2>
              <h3>Email</h3>
              <p>{email}</p>
              <h3>Descrição</h3>
              <p>
                {description}
              </p>
              <button
                onClick={ () => editProfile() }
                type="button"
                className="edit-button"
              >
                EDITAR PERFIL
              </button>
            </div>
          ) }
        </div>
      </div>
    </div>
  );
}

export default Profile;
