'use client'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/logo-controlador-frequencia.jpeg"
          alt="Controlador de Frequencia Logo"
          width={180}
          height={180}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="/alunos"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Chamada<span>-&gt;</span>
          </h2>
          <p>Acessar Lista de Alunos</p>
        </a>        
      </div>
    </main>
  )
}
