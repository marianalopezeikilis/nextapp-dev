import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <label htmlFor="">Usuario</label>
        <input type="text" />
        <label htmlFor="">Contraseña</label>
        <input type="text" />
        <button className={styles.btnblack}>Iniciar sesión</button>
        <a href="">¿Olvidaste tu contraseña?</a>
        <div>
          <p>¿No tienes una cuenta?</p>
          <a href="">Regístrate</a>
        </div>
      </div>
    </main>
  );
}
