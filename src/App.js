
import { useState } from 'react';
import './App.css';

function App() {
  const[result,setResult]=useState([
  {
    No : 1,
    Name:'Amit',
    React:50,
    Javascript:49
  },
  {
    No : 2,
    Name:"Nemu",
    React:50,
    Javascript:49
  },
  {
    No : 3,
    Name:'Chandu',
    React:50,
    Javascript:49
  }
  ]);
  return (
    <div className="App">
      <table border={1}>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>React</th>
          <th>Javascript</th>
        </tr>
        <tr>
          <td>{result.No}</td>
        </tr>
      </table>
    
    </div>
  );
}

export default App;
