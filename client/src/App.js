import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>{!data ? "Loading..." : data}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


/************************************************************************************************
 * 
 * 
 * 
 * 
 * We will make a simple GET request using the Fetch API to our backend and then have our data returned as JSON.

Once we have the data returned to us, we will get the message property (to grab our greeting that we sent from the server) and then put it in a state variable called data.

This will allow us to display that message in our page if we have it. We are using a conditional in our JSX to say that if our data is not there yet, show the text "Loading...".
 */
