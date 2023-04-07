import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import styles from './App.css';
import CreateEvent from './Components/CreateEvent';
import AboutMe from './Components/AboutMe';
  
export default function App() {
  return(
    <Router>

      <div className="App">
        <div className={styles.header}>
          <h1>Portland Networking Event Tracker</h1>
          <Link to="/AboutMe">
            <h5>About Me</h5>
          </Link>
        </div>
        <div className={styles.routes}>
          <Routes>
            <Route path="/AboutMe" 
              element={<AboutMe />}/>
          </Routes>
          <CreateEvent />
        </div>
      </div>
    </Router>
  );
}
