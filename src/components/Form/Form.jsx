import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function Form(props){
    let [famousPersonName, setPersonName] = useState('');
    let [famousPersonRole, setPersonRole] = useState('');

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
          props.fetchPeople();
        })
        .catch((error) => {
          console.error("Error in POST '/people' inside addPerson().", error);
          alert("Error in POST '/people' inside addPerson(). See console.");
        })
    }

    return (
        <form onSubmit={addPerson}>
          <label htmlFor="name-input">Name:</label>
          <input id="name-input" value={famousPersonName} onChange={e => setPersonName(e.target.value)} />
          <br/>
          <label htmlFor="role-input">Famous for:</label>
          <input id="role-input" value={famousPersonRole} onChange={e => setPersonRole(e.target.value)} />
          <br/>
          <button type="submit">Done</button>
        </form>
    )
}
export default Form;