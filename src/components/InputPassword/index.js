import './style.css';
import CloseEye from '../../assets/close-eye.svg';
import OpenEye from '../../assets/open-eye.svg';
import { useState } from 'react';

function InputPassword({ state, handleChange }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='container-input-password'>
      <input
        name="password"
        type={showPassword ? 'text' : 'password'}
        placeholder='Password'
        value={state}
        onChange={(event) => handleChange(event)}
      />
      <img
        src={showPassword ? CloseEye : OpenEye}
        alt="show password"
        onClick={() => setShowPassword(!showPassword)}
      />
    </div>
  )
}

export default InputPassword;