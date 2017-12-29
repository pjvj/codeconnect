import React from 'react';
import DataPerson from './data_person'
const PersonDetails = (props)=> {
    /*if(!props.person)
        return (<h2> Loading</h2>);*/
    const imgurl='http://www.freeiconspng.com/uploads/person-icon-23.png';
    return(
        <div className="col-md-7">
            <div className="col-md-3">
                <img src={imgurl}/>
            </div>
            {/*<div><DataPerson/></div>*/}
            {/*<div className="ShowMe">
                <h3>Name:{props.person.name}</h3>
                <h4>UserName:{props.person.username}</h4>
                <h4>HackerRank:{props.person.hackerrank}</h4>
                <h4>CodeForces:{props.person.codeforces}</h4>
                <p>AboutMe:{props.person.about}</p>

            </div>*/}
            <div className="col-md-4">
                <h6>Name:</h6>
                <h6>UserName:</h6>
                <h6>HackerRank:</h6>
                <h6>CodeForces:</h6>
                <h6>AboutMe:</h6>

            </div>
        </div>
    )
}
export default PersonDetails;