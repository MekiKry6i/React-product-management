import React from 'react';

const person = (props) => {
    return (
        <div className="testclass">
            <p> I'm a person</p>
            <input type="text" onChange={props.changed} placeholder={props.name}></input>
        </div>
    )
};

export default person;