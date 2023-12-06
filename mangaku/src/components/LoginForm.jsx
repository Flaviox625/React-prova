import React, { useState, useEffect } from 'react';
import './LoginForm.css'; // Importando o arquivo de estilo

const LoginForm = ({ onClose, onUserData }) => {
    const [isRegister, setIsRegister] = useState(false);
    const [formPosition, setFormPosition] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false,
    });

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        const formContainer = document.getElementById('login-form');
        if (formContainer && !formContainer.contains(event.target)) {
            onClose();
        }
    };

    const switchToRegister = () => {
        setIsRegister(!isRegister);
        setFormPosition(isRegister ? 0 : 100);
    };

    const login = (event) => {
        event.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === formData.email && u.password === formData.password);

        if (user) {
            // Código da função login
            // Aqui você pode adicionar a lógica de login se necessário
            onClose(); // Fecha o formulário após o login
        } else {
            alert('Credenciais inválidas.');
        }
    };

    const register = (event) => {
        event.preventDefault();
        if (formData.password === formData.confirmPassword && formData.agreeTerms) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const newUser = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password,
            };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            // Passa os dados do novo usuário para a função onUserData
            onUserData(newUser);

            onClose(); // Fecha o formulário após o registro
        } else {
            alert('Senhas não correspondem ou termos não aceitos.');
        }
    };

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    return (
        <div id="login-form" className={`form-container ${isRegister ? 'visible' : ''}`} style={{ left: `${formPosition}%` }}>
            <div className="form-box">
                <div className='button-box'>
                    <div id='btn'></div>
                    <button type='button' onClick={switchToRegister} className={`toggle-btn ${isRegister ? '' : 'active'}`}>
                        Log In
                    </button>
                    <button type='button' onClick={switchToRegister} className={`toggle-btn ${isRegister ? 'active' : ''}`}>
                        Register
                    </button>
                </div>

                {/* Formulário de Login e Registro unificado */}
                <form className={`input-group ${isRegister ? 'register' : 'login'}`} onSubmit={isRegister ? register : login}>
                    {isRegister && (
                        <>
                            <input
                                type='text'
                                className='input-field'
                                placeholder='First Name'
                                name='firstName'
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type='text'
                                className='input-field'
                                placeholder='Last Name '
                                name='lastName'
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type='email'
                                className='input-field'
                                placeholder='Email Id'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type='password'
                                className='input-field'
                                placeholder='Enter Password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type='password'
                                className='input-field'
                                placeholder='Confirm Password'
                                name='confirmPassword'
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type='checkbox'
                                className='check-box'
                                name='agreeTerms'
                                checked={formData.agreeTerms}
                                onChange={handleChange}
                            />
                            <span>I agree to the terms and conditions</span>
                            <button type='submit' className='submit-btn'>
                                Cadastro
                            </button>
                        </>
                    )}
                    {!isRegister && (
                        <>
                            <input
                                type='text'
                                className='input-field'
                                placeholder='Email Id'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type='password'
                                className='input-field'
                                placeholder='Enter Password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type='checkbox'
                                className='check-box'
                            />
                            <span>Remember Password</span>
                            <button type='submit' className='submit-btn'>
                                Login
                            </button>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
