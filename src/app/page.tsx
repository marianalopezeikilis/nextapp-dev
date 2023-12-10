"use client";
import { useRouter } from 'next/navigation';
import styles from "./page.module.css";
import React, { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../firebase/clientApp"
import signIn from "../../services/loginUser";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, error] = useAuthState(auth);
    const router = useRouter();

    //If user already logged in redirect
    //if(user){
    //  router.push("/")
    //}

    const handleLogin = async () => {
      try {
        await signIn(email, password);

        console.log("Inicio de sesión exitoso");
        return "Inicio de sesión exitoso"
        // Aquí puedes redirigir al usuario a la página de inicio de sesión o realizar otras acciones.
      } catch (error) {
        console.error("Error inicio de sesión", error);
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
              required
            />

            <label htmlFor="password" className={styles.label}>
              Contraseña
            </label>
            <input 
              type="password" 
              id="password" 
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)} className={styles.input}
              required
            />
          </form>

          <button className={styles.btnblack} onClick={handleLogin}>Iniciar sesión</button>

          <a href="" className={styles.a}>
            ¿Olvidaste tu contraseña?
          </a>

          <div className={styles.row}>
            <p>¿No tienes una cuenta?</p>
            <a href="./register" className={styles.aRegister}>
              Regístrate
            </a>
          </div>

        </section>

      </main>
    );
  };

