import axios from 'axios';
import { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import './Login.css';

type loginDataType = {
  email: string;
  password: string;
};

const Login = () => {
  const [loginData, setLoginData] = useState<loginDataType>({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/login', { loginData })
      .then((res) => {
        const data = res.data;
        const user: Object = data.user;
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        setMessage('Login Successful');
        navigate('/chat', { state: { user } });
      })
      .catch((error) => {
        const message = error.response.data;
        setMessage(message);
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-heading">Login</h2>
        <input
          className="login-input"
          type="email"
          placeholder="Email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />
        <button className="login-button" type="submit">
          Login
        </button>
        <p className="login-message">{message}</p>



        <div className="login-link-container">
       <span>Create a Account</span>
       <Link to="/register">Register</Link>
       </div>
      </form>
    </div>
  );
};

export default Login;
