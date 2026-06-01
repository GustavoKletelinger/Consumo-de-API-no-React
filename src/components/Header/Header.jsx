import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.titulo}>Pokedex</h1>
      <p className={styles.subtitulo}>Consumo de API pública – PokeAPI</p>
    </header>
  );
}
