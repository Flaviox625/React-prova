import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BgVideo from './components/BgVideo';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Listagem from './pages/Listagem';
import Home from './pages/Home';

function App() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [userData, setUserData] = useState([]);

  const handleOpenLoginForm = () => {
    setIsLoginFormVisible(true);
  };

  const handleCloseLoginForm = () => {
    setIsLoginFormVisible(false);
  };

  const handleUserData = (data) => {
    setUserData([...userData, data]);
  };

  return (
    <div className="app">
      <BgVideo />
      <Navbar onOpenLoginForm={handleOpenLoginForm} />
      {isLoginFormVisible && <LoginForm onClose={handleCloseLoginForm} onUserData={handleUserData} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listagem" element={<Listagem usersData={userData} />} />
        {/* Adicione mais rotas conforme necessário */}
      </Routes>
    </div>
  );
}

export default App;
