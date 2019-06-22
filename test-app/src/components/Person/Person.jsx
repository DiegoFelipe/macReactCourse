import React from 'react'

const Person = (props) => {

    return (
        <>
            <p>Hi, my name is {props.name}, I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </>
    )
}

export default Person