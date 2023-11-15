"use client";
import React, { useState } from "react";
import createUser from "../../../services/createUser";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [errorMsg, setErrorMsg] = useState("");

  const handleRegister = async () => {
    try {
      await createUser(email, password);
      //[TO DO] Habria que agregar un check de si el usuario se creo correctamente porque aunque
      //no llegaba a firebase aparecia el clg de True
      
      console.log("Usuario registrado con éxito.");

      // Aquí puedes redirigir al usuario a la página de inicio de sesión o realizar otras acciones.
    } catch (error: any) {
      setErrorMsg = error.message
      console.error("Error al registrar al usuario:", error);
      //error.message
    }
  };

  if (errorMsg) {
    return  <div>
              <p>{ errorMsg } </p>
            </div>
  }
  
  return (
    <main>
      <div>
        <h1>Crea tu cuenta</h1>
      </div>
      <form action="">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">E-mail</label>
        <input
          type="password"
          id="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button onClick={handleRegister}>Registrarse</button>
      </form>

      
    </main>
  );
};

export default RegisterPage;
