import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { useNavigate ,Link } from 'react-router-dom';
import './Register.css';

type RegisterDataType = {
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
  photo: string;
};

const Register = () => {
  const [message, setMessage] = useState<string>('');
  const [registerData, setRegisterData] = useState<RegisterDataType>({
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    photo: '',
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(registerData);
    axios
      .post('http://localhost:4000/register', { registerData })
      .then((res) => {
        const data = res.data;
        console.log(data);
        navigate('/');
      })
      .catch((error) => {
        var messages =error.response.data;
        setMessage(messages)
         console.log(error.response.data);
      });
  };

  return (
    <div className='register'>
  <form onSubmit={handleSubmit} className="register-form">
        <legend>Register</legend>
        <div className="input-container">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={registerData.username}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="Photo url"
            name="photo"
            value={registerData.photo}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={registerData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={registerData.password}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmpassword"
            value={registerData.confirmpassword}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <input type="submit" value="Register" />
        </div>

        <div className="error-message">{message}</div>


      
        <div className="login-link-container">
       <span>Already have an account?</span>
       <Link to="/">Login</Link>
       </div>

   


      </form>
    


    </div>
      
  );
};

export default Register;
