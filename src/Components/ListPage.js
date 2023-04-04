import styles from '../App.css';
import List from './List.js';

export default function ListPage() {
  return (
    <>
      <h1>This is the List page</h1>
      <div className={styles.container}>
        <List />
      </div>
    </>
  );
}
