"use client";

import styles from "./page.module.css";
import React, { useState } from "react";
import createUser from "../../services/createUser";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
      try {
        await createUser(email, password);
        console.log("Usuario registrado con éxito.");
        // Aquí puedes redirigir al usuario a la página de inicio de sesión o realizar otras acciones.
      } catch (error) {
        console.error("Error al registrar al usuario:", error);
        //error.message
      }
    };

    return (
      <main className={styles.main}>
        <section className={styles.login}>
          <form className={styles.container}>

            <label htmlFor="user" className={styles.label}>
              Usuario
            </label>
            <input
              type="email"
              id="user"
              placeholder="usuario@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />

            <label htmlFor="password" className={styles.label}>
              Contraseña
            </label>
            <input 
            type="password" 
            id="password" 
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)} className={styles.input} />
          </form>

          <button className={styles.btnblack} onClick={handleRegister}>Iniciar sesión</button>

          <a href="" className={styles.a}>
            ¿Olvidaste tu contraseña?
          </a>

          <div className={styles.row}>
            <p>¿No tienes una cuenta?</p>
            <a href="" className={styles.aRegister}>
              Regístrate
            </a>
          </div>

        </section>

      </main>
    );
  };

