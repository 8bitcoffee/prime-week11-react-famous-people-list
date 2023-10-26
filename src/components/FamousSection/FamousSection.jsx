import React, { useState, useEffect } from 'react';
import './FamousSection.css';
import axios from 'axios';
import Form from '../Form/Form';
import List from '../List/List';

function FamousSection() {
  
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

  return (
    <section className="new-person-section">
      <Form fetchPeople={fetchPeople}/>
      <hr/>
      <List famousPeopleArray={famousPeopleArray}/>
    </section>
  );
}

export default FamousSection;
