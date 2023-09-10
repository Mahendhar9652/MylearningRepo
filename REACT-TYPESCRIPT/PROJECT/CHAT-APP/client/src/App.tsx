import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./Login"
import Chat from './Chat';
import Register from './Register';


const App: React.FC = () => {




  var user:{}|null =localStorage.getItem('user');





  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      {user&&    <Route path="/chat" element={<Chat />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
