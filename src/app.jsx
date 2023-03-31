import {
  BrowserRouter as Router,
} from 'react-router-dom';

import './app.css';


export default function App() {
  return(
    <div className="App">
      <h1>This is the Home Page</h1>
      <Router>
        <h1>Hello World</h1>
      </Router>
    </div>
  );
}
