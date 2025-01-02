import styles from './styles.module.css';

export type ElementaryButnProps = {
  name: string;
};

export default function ElementaryButn({ name }: ElementaryButnProps) {
  return (
    <div className={styles.container}>
      <button className={`${styles.button} ${styles.type_C}`}>
        <div className={styles.button__line}></div>
        <div className={styles.button__line}></div>
        <span className={styles.button__text}>{name}</span>
        <div className={styles.button__drow1}></div>
        <div className={styles.button__drow2}></div>
      </button>
    </div>
  );
}
