import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom';
import styles from './App.css';
import CreateEvent from './Components/CreateEvent';
import AboutMe from './Components/AboutMe';
import EventList from './Components/EventList';
import { TrialEvents } from '../src/Components/TrialEvents';
  
export default function App() {
  return(
    <Router>

      <div className="App">
        <div className={styles.header}>
          <h1>Portland Networking Event Tracker</h1>
          {/*
          DELETE THIS COMMENT WHEN LINK IS READY 
          <Link to="/AboutMe">
            <h5>About Me</h5>
          </Link> */}
        </div>

        {/* The routes to other pages */}
        <Routes>
          <Route path="/AboutMe" 
            element={<AboutMe />}/>
        </Routes>

        {/* The page displaying current listed events */}
        <div className={styles.eventList}>
          <EventList TrialEvents={TrialEvents}/>
        </div>

        {/* The create event page  */}
        <div className={styles.createList}>
          <CreateEvent />
        </div>
      </div>
    </Router>
  );
}

// UPDATE YOUR GITHUB AUTH TOKEN
