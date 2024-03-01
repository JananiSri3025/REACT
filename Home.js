import React from 'react';

function Home(props) {
    return (
        <div>
            <h1> WELCOME TO TRAINING - {props.name} {props.age} </h1>
            <p>{props.obj.department} - {props.obj.college} </p>
            {props.Arr.map((data) => {return(<li>{data}</li>)})}
            {props.jsx}
        </div>
    );
}

export default Home;