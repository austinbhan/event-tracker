import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import styles from './App.css';
import ListPage from './Components/ListPage';
import CreateEvent from './Components/CreateEvent';
import AboutMe from './Components/AboutMe';
  
export default function App() {
  return(
    <Router>

      <div className="App">
        <div className={styles.header}>
          <Link to ="/">
            <h1>Portland Networking Event Tracker</h1>
          </Link>
          <Link to="/AboutMe">
            <h5>About Me</h5>
          </Link>
          <Link to="CreateEvent">
            <h5>Create Event</h5>
          </Link>
        </div>
        <div className={styles.routes}>
          <Routes>
            <Route path="/"
              element={<ListPage />} />
            <Route path="/AboutMe" 
              element={<AboutMe />}/>
            <Route path="/CreateEvent"
              element={<CreateEvent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
