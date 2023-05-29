'use client'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          src="/logo-controlador-frequency.jpeg"
          alt="Controlador de Frequencia Logo"
          border-radius={50}
          width={180}
          height={180}
          priority
        />
      </div>
      <div className="title__app">Controle Virtual de Frequência</div>

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
