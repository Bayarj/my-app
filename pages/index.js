import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Төгс Амин Эрдэнэ ХХК</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Тавтай морил <a href="#">ТАЕ!</a>
        </h1>

        <p className={styles.description}>
          Төрөл бүрийн бяслаг{' '}
          <code className={styles.code}>Герман бараа</code>
        </p>

        <div className={styles.grid}>
          <a href="products" className={styles.card}>
            <h3>Бүтээгдэхүүн &rarr;</h3>
            <p>Дэлгэрэнгүй</p>
          </a>

          <a href="movies" className={styles.card}>
            <h3>Бидний тухай &rarr;</h3>
            <p>Дэлгэрэнгүй</p>
          </a>

          <a
            href="login"
            className={styles.card}
          >
            <h3>Захиалга &rarr;</h3>
            <p>Бараа захиалах</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>Холбоо барих &rarr;</h3>
            <p>
              Холбоо барих.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Bayarjargal{' '}
          <img src="/logo192.png" alt="Bayarjargal" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
