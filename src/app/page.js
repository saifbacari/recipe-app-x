import Image from "next/image";
import CreateForm from "./components/CreateForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello Home Page!</h1>
      <CreateForm />
    </main>
  );
}
