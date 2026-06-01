import styles from "./CardPokemon.module.css";

// Dados passados via props prof
export default function CardPokemon({ nome, onClick }) {
  const nomeFomatado = nome.charAt(0).toUpperCase() + nome.slice(1);

  return (
    <div className={styles.card} onClick={() => onClick(nome)}>
      <p className={styles.nome}>{nomeFomatado}</p>
    </div>
  );
}
