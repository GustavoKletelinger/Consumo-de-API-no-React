import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.container}>
      <p className={styles.texto}>Carregando...</p>
    </div>
  );
}
