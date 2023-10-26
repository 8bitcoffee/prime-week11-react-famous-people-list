import React from 'react';
import Person from '../Person/Person';

function List (props){
    return(
        <ul>
            {props.famousPeopleArray.map((person) => (<Person key={person.id} person={person}/>))}
        </ul>
    )
}
export default List;