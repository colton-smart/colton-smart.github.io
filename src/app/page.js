import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>Welcome, my name is Colton Smart</div>
      </main>
    </div>
  );
}
