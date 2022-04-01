import './style.css';
import BackgroundImage from '../../assets/background.jpg';
import { useState } from 'react';
import WomanSuccess from '../../assets/woman-success.png';
import Message from '../../components/Message';
import InputPassword from '../../components/InputPassword';

function SignUp() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);


  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError('Preencha todos os campos...');

      return;
    }

    setSuccess(true);
  }

  function handleChangeForm(event) {
    setError('');

    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleClear() {
    setError('');

    setForm({ name: '', email: '', password: '' });
  }

  return (
    <div className='container'>
      <div className='left'>
        {!success ?
          <div className='container-form'>
            <h1>Cadastre-se</h1>
            <form
              onSubmit={handleSubmit}
            >
              <input
                name='name'
                type="text"
                placeholder='Name'
                value={form.name}
                onChange={(event) => handleChangeForm(event)}
              />

              <input
                name="email"
                type="text"
                placeholder='Email'
                value={form.email}
                onChange={(event) => handleChangeForm(event)}
              />

              <InputPassword
                state={form.password}
                handleChange={handleChangeForm}
              />

              {error && <span className='error-message'>{error}</span>}

              <div className='container-buttons'>
                <button
                  className='btn btn-blue'
                  type='submit'>
                  Cadastrar
                </button>
                <button
                  className='btn btn-red'
                  type='button'
                  onClick={() => handleClear()}
                >
                  Cancelar
                </button>
              </div>

            </form>

            <div className='container-link'>
              <span>Já tem cadastro?</span>
              <a href='https://google.com.br'>Clique aqui</a>
            </div>
          </div>
          :
          <Message
            message="Cadastro efetuado com sucesso!"
            image={WomanSuccess}
          />
        }
      </div>
      <img
        src={BackgroundImage}
        alt="background"
        className='right'
      />
    </div>
  );
}

export default SignUp;
