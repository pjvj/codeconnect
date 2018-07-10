import React from 'react';


const QuesListItem = (props) => {

    const link = "http://codeforces.com/problemset/problem/" + props.question.contestId + "/" + props.question.index;
    return (
        <div>
            <li key={link}><a href={link} className="linked" >{props.question.name}</a></li>
        </div>

    );
};
export default QuesListItem;
