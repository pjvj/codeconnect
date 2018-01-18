import React from 'react';


const QuesListItem = (props) => {
    const link = "http://codeforces.com/problemset/problem/" + props.question.contestId + "/" + props.question.index;
    return (
        <div>
            <li className="size"><a className="color2" href={link}>{props.question.name}</a></li>
        </div>

    );
};
export default QuesListItem;
