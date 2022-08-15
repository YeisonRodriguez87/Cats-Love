import { Spinner } from 'react-bootstrap';
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <>
      <div className={styles.divPadre}>
        <div className={styles.divHijo}>
          <Spinner className={styles.spinner} animation="grow" size='lg'/>
        </div>
      </div>
    </>
  );
}