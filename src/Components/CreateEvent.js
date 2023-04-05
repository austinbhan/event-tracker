import styles from '../App.css';
import { useState } from 'react';

export default function CreateEvent() {
  const [item, setItem] = useState('');
  console.log(item);
  
  return (
    <div className={styles.createEvent}>
      <p>This is the event creation page</p>
      <form>
        <input value={item}
          onChange={e => {setItem(e.target.value);}}/>
        <button>Submit Event</button>
      </form>
    </div>
  );
}
