import React from 'react';

function Person(props){
    return(
        <li>{props.person.name} is famous for {props.person.role}</li>
    )
}
export default Person;