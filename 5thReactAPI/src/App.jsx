import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
      
function App() {
  const [input, setInput] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://my-json-server.typicode.com/troy1129/jsonplaceholder/data')
      .then(response => response.json())
      .then(data => {
        setStudents(data);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  };

  const filteredStudents = students.filter(student => student.id === input);

  return (
    <>
      <p>Input student ID#: </p>
      <input onChange={(e) => setInput(e.target.value)}></input>
      {filteredStudents.map(student => (
        <div className='red' key={student.id}>
          <p>{student.id}</p>
          <p>{student.name}</p>
          <p>{student.age}</p>
          <p>{student.course}</p>
        </div>
      ))}
    </>
  );
}

export default App;
