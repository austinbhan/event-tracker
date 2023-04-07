import styles from '../App.css';
import { useEffect, useState } from 'react';
import { TrialEvents } from './TrialEvents';

export default function CreateEvent() {
  const [userItem, setUserItem] = useState('');
  const [list, setList] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setList([...list, userItem]);
  }

  // Note: Perhaps its best to make a map function to loop through Trial Events
  console.log(TrialEvents[1], 'line 14');
  console.log(typeof TrialEvents[1]);

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

// To Do: 
// How to push useState values to reflect Trial Events?
