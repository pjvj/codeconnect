import React from 'react';

const PersonDetails = (props) => {

    const imgurl = 'http://www.freeiconspng.com/uploads/person-icon-23.png';
    return (
        <div className="col-md-6">
            <div className="col-md-3">
                <img src={imgurl}/>
            </div>
            <div className="space">
                <h4>Name:<span className="space2"> {props.person.name}</span></h4>
                <h4>UserName:<span className="space3">{props.person.username}</span></h4>
                <h4>HackerRank:<span className="space4">{props.person.hackerrank}</span></h4>
                <h4>CodeForces:<span className="space5">{props.person.codeforces}</span></h4>
                <h4>About:<span className="space6">{props.person.about}</span></h4>

            </div>

        </div>
    )
}
export default PersonDetails;
