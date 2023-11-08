import styles from './page.module.css';
import React from 'react';

export default function Home() {
  return (
    <main className={styles.main}>
    <div>
      <h1></h1>
      <label htmlFor="">Usuario</label>
      <input type="text" />
      <label htmlFor="">Contraseña</label>
      <input type="text" />
      <button>Iniciar sesión</button>
      <a href="">¿Olvidaste tu contraseña?</a>
      <p>¿No tienes una cuenta?</p>
      <a href="">Regístrate</a>

    </div>
    </main>
  )
}
