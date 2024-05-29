import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [result, setResult] = useState([
    {
      No: 1,
      Name: 'Amit',
      Reactt: 100,
      Javascript: 99
    },
    {
      No: 2,
      Name: "Nemu",
      Reactt: 100,
      Javascript: 98
    },
    {
      No: 3,
      Name: 'Chandu',
      Reactt: 10,
      Javascript: 80
    },
    {
      No: 4,
      Name: 'Sikko',
      Reactt: 70,
      Javascript: 80
    }, 
    {
      No: 5,
      Name: 'Amii',
      Reactt: 75,
      Javascript: 80
    },
    {
      No: 6,
      Name: 'Thengo',
      Reactt: 79,
      Javascript: 80
    }
  ]);

  const [selectedName, setSelectedName] = useState(null);

  const filterData = (name) => {
    setSelectedName(name);
  }; 

  return (
    <div className="App">
      <table border={1} align='center' width="50%">

        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Reactt</th>
          <th>Javascript</th>
          <th>Max</th>
          <th>Min</th>
          <th>Total</th>
          <th>Percentage</th>
          <th>Grade</th>
        </tr>

        <tbody>
          {result.filter((item) => selectedName === null || item.Name === selectedName).map((results) => {

            const max = Math.max(results.Reactt, results.Javascript);
            const min = Math.min(results.Reactt, results.Javascript);
            const total = results.Reactt + results.Javascript;
            const per = total / 2;
            let grade;
            if(per > 90) {
              grade = "A";
            } else if(per > 80) {
              grade = "B";
            } else if(per > 70) {
              grade = "C";
            } else if(per > 60) {
              grade = "D";
            } else {
              grade = "FAIL";
            }
            return (
              <tr key={results.No}>
                <td>{results.No}</td>
                <td>{results.Name}</td>
                <td>{results.Reactt}</td>
                <td>{results.Javascript}</td>
                <td>{max}</td>
                <td>{min}</td>
                <td>{total}</td>
                <td>{per}%</td>
                <td style={{backgroundColor: grade === "FAIL" ? "red" : "green"}}>{grade}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <center>
        <Button variant="outline-primary" onClick={() => filterData("Amit")}>Amit</Button>{' '}
        <Button variant="outline-warning" onClick={() => filterData("Nemu")}>Nemu</Button>
        <Button variant="outline-danger" onClick={() => filterData("Chandu")}>Chandu</Button>
        <Button variant="outline-warning" onClick={() => filterData("Amii")}>Amii</Button>
        <Button variant="outline-primary" onClick={() => filterData("Thengo")}>Thengo</Button>
        <Button variant="outline-danger" onClick={() => filterData(null)}>All</Button>
      </center>
    </div>
  );
}

export default App;
