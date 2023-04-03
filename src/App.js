import {
  BrowserRouter as Router,
} from 'react-router-dom';
import styles from './App.css';
import List from './Components/List.js';
import CreateEvent from './Components/CreateEvent';
  
export default function App() {
  return(
    <div className="App">
      <div className={styles.header}>
        <h1>This is the Header Page</h1>
        <p>About the creator</p>
        <p>About Me</p>
        <CreateEvent />
      </div>
      <Router>
        <h1>This is the home page</h1>
        <div className={styles.container}>
          <List />
        </div>
      </Router>
    </div>
  );
}
