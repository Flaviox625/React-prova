// Listagem.jsx
// Listagem.js
import React from 'react';
import './Listagem.css';
const Listagem = ({ usersData }) => {
    return (
        <div>
            
            
            {/* Banner com a tabela */}
            <div className="banner">
                <h2>Quadro de Dados</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData && usersData.map((user, index) => (
                            <tr key={index}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Listagem;
