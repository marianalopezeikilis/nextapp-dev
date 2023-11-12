'use client';
import React, { useState } from 'react';
import createUser from '../../../services/createUser';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await createUser(email, password);
      console.log('Usuario registrado con éxito.');
      // Aquí puedes redirigir al usuario a la página de inicio de sesión o realizar otras acciones.
    } catch (error) {
      console.error('Error al registrar al usuario:', error);
      //error.message
    }
  };
  return (
    <div>
      <h2>Registro</h2>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
};

export default LoginPage;