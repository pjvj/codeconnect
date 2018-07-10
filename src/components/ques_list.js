import React from 'react';
import QuesListItem from './ques_list_item';

const QuesList = (props) => {
    const quesListItem = props.questions.map((question) => {
        return (
            <QuesListItem question={question}/>
        );
    });

    return (
        <div><br/><br/>
            <ul className=" vertical-menu">
                {quesListItem}
            </ul>
        </div>
    );
}
export default QuesList;
