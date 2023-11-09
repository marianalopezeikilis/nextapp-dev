import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.login}>
        <form className={styles.container}>
          <label htmlFor="user" className={styles.label}>
            Usuario
          </label>
          <input type="email" id="user" className={styles.input} />
          <label htmlFor="password" className={styles.label}>
            Contraseña
          </label>
          <input type="password" id="password" className={styles.input} />
        </form>
        <button className={styles.btnblack}>Iniciar sesión</button>
        <a href="" className={styles.a} >¿Olvidaste tu contraseña?</a>
        <div className={styles.row}>
          <p>¿No tienes una cuenta?</p>
          <a href="" className={styles.aRegister}>Regístrate</a>
        </div>
      </section>
    </main>
  );
}
