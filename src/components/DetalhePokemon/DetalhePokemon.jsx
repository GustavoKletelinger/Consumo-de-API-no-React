import styles from "./DetalhePokemon.module.css";

// Dados do pokemon único passados via props
export default function DetalhePokemon({ pokemon, onFechar }) {
  if (!pokemon) return null;

  const nomeFomatado =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.btnFechar} onClick={onFechar}>
          ✕
        </button>
        <img
          className={styles.imagem}
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <h2 className={styles.nome}>{nomeFomatado}</h2>
        <p className={styles.info}>
          <span>ID:</span> #{pokemon.id}
        </p>
        <p className={styles.info}>
          <span>Altura:</span> {pokemon.height / 10} m
        </p>
        <p className={styles.info}>
          <span>Peso:</span> {pokemon.weight / 10} kg
        </p>
        <p className={styles.info}>
          <span>Tipos:</span>{" "}
          {pokemon.types.map((t) => t.type.name).join(", ")}
        </p>
        <p className={styles.info}>
          <span>Habilidades:</span>{" "}
          {pokemon.abilities.map((a) => a.ability.name).join(", ")}
        </p>
      </div>
    </div>
  );
}
