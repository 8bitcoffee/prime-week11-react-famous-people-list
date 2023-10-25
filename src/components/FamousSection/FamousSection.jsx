import React, { useState, useEffect } from 'react';
import './FamousSection.css';
import axios from 'axios';

function FamousSection() {
  let [famousPersonName, setPersonName] = useState('');
  let [famousPersonRole, setPersonRole] = useState('');
  let [famousPeopleArray, setPeopleArray] = useState([]);

  // TODO: on load, call the fetchPeople() function
  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = () => {
    // TODO: fetch the list of people from the server
    axios.get('/people').then((response) =>{
      setPeopleArray(response.data);
    })
    .catch((error) => {
      console.error("Error in GET '/people' inside fetchPeople()", error);
      alert(console.error("Error in GET '/people' inside fetchPeople()", error));
    })
  }

  const addPerson = (evt) => {
    evt.preventDefault();
    console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
    let newPerson = {name: famousPersonName, role: famousPersonRole};
    // TODO: create POST request to add this new person to the database
    // HINT: the server is expecting a person object 
    //       with a `name` and a `role` property
    axios.post('/people', newPerson).then((response) =>{
      console.log(`${famousPersonName} famous for ${famousPersonRole} successfully added.`);
      setPersonName('');
      setPersonRole('');
      fetchPeople();
    })
    .catch((error) => {
      console.error("Error in POST '/people' inside addPerson().", error);
      alert("Error in POST '/people' inside addPerson(). See console.");
    })
  }

    return (
      <section className="new-person-section">
        <form onSubmit={addPerson}>
          <label htmlFor="name-input">Name:</label>
          <input id="name-input" value={famousPersonName} onChange={e => setPersonName(e.target.value)} />
          <br/>
          <label htmlFor="role-input">Famous for:</label>
          <input id="role-input" value={famousPersonRole} onChange={e => setPersonRole(e.target.value)} />
          <br/>
          <button type="submit">Done</button>
        </form>
        <hr/>
        {/* <p>
          {famousPersonName} is famous for "{famousPersonRole}".
        </p> */}
        <ul>
          {/* TODO: Render the list of famous people */}
          {famousPeopleArray.map((person) => {
            return(<li key={person.id}>{person.name} is famous for {person.role}</li>)
          })}
        </ul>
      </section>
    );
}

export default FamousSection;
