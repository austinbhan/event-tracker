import styles from '../App.css';
import { useState } from 'react';

export default function CreateEvent() {
  const [userItem, setUserItem] = useState('');
  const [list, setList] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setList([...list, userItem]);
  }

  return (
    <div className={styles.createEvent}>
      <p>This is the event creation page</p>
      <div className={styles.list}>
        {list}
      </div>
      <form onSubmit={handleSubmit}> 
        <input value={userItem}
          placeholder="Event Name"
          onChange={e => {setUserItem(e.target.value);}}/>
        <button>Submit Event</button>
      </form>
    </div>
  );
}

// NOTE: Create Event needs to add to backend. 