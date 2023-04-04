import styles from '../App.css';

// User fills out the form
// User submits the form
// Submit will redirect to submitted page
// Submitted page will have a button to the home page

// List page will render submissions

export default function CreateEvent() {
  return (
    <div className={styles.createEvent}>
      <p>This is the event creation page</p>
      <form>
        <input type="text" placeholder="Event Name"></input>
        <input type="text" placeholder="Event Host"></input>
        <input type="text" placeholder="Date"></input>
        <input type="text" placeholder="Location"></input>
        <button>Submit Event</button>
      </form>
    </div>
  );
}
