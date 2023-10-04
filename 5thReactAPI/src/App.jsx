import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './des.css'
import { useEffect } from 'react';



function App() {

  const [students, setStudents] = useState([]);
  const [input, setInput] = useState([]);
  const [newStudent, setNewStudent] = useState({});
  const [person, setPerson] = useState ([]);
  
  useEffect(()=>{
    fetch('https://my-json-server.typicode.com/troy1129/jsonplaceholder/db')
    .then((response) => {
      if(!response.ok){
        throw new Error('NOT OK');
      }
      return response.json()
    })
    .then((jsonData) => {
      setStudents(jsonData.data);
      console.log(jsonData);
    })
    .catch((error) => {
      console.error('ERROR FETCHING DATA: ', error);
    });
  },[]);
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const newStudent = {
      id: e.target.id.value,
      name: e.target.name.value,
      age: e.target.age.value,
      course: e.target.course.value
    };
    setStudents([...students, newStudent]) 
    var form = document.getElementById("myForm");
    form.reset();
  };

  return (
    <div className='main'>
      <h1>Contact Book</h1>
      <div className='display'>
      <ul style={{ listStyle: "none" }}>
        {students.map((index) => (
          <li key={index.id}>{index.id}</li>
        ))}
      </ul>
      </div>
      <div className='input'>
      <form id="myForm" onSubmit={handleSubmit}>
          {<div className='input'>
            <input id='id' type="text" placeholder='ID'/>
            <br />
            <input id='name' type="text" placeholder='Name' />
            <br />
            <input id='age' type="text" placeholder='Age'/>
            <br />
            <input id='course' type="text" placeholder='Course'/>
            <br />
            <button type="submit" className='button'>Submit</button>
          </div>}
      </form>
      </div>


    </div>
  );
}

export default App