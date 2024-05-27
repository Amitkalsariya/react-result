
import { useState } from 'react';
import './App.css';

function App() {
  const[result,setResult]=useState([
  {
    No : 1,
    Name:'Amit',
    Reactt:50,
    Javascript:49
  },
  {
    No : 2,
    Name:"Nemu",
    Reactt:50,
    Javascript:49
  },
  {
    No : 3,
    Name:'Chandu',
    Reactt:50,
    Javascript:49
  }
  ]);
  var a=parseInt(Reactt)
  var b=parseInt(Javascript)
  const max=math.max(a,b);
  return (
    <div className="App">
     <table border={1}>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Reactt</th>
            <th>Javascript</th>
            <th>Max</th>
          </tr>
        </thead>
        <tbody>
          {result.map((results) => {
            const max = Math.max(results.Reactt, results.Javascript);
            return (
              <tr key={results.No}>
                <td>{results.No}</td>
                <td>{results.Name}</td>
                <td>{results.Reactt}</td>
                <td>{results.Javascript}</td>
                <td>{max}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
