import {
  BrowserRouter as Router,
} from 'react-router-dom';
import styles from './App.css';
  
  
export default function App() {
  return(
    <div className="App">
      <h1>This is the Home Page</h1>
      <div className={styles.trial}>
        <p>
            Hi 
        </p>
      </div>
      <Router>
        <h1>Hello World</h1>
      </Router>
    </div>
  );
}
