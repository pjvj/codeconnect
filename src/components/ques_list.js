import React from 'react';
import QuesListItem from './ques_list_item';

const QuesList = (props)=> {
  /*  const QuesListItem = props.tags.map(()=>{
        return (
            <QuesListItem/>
        );
    });*/
    return(
        <div><br/><br/>
            <ul className="col-md-5">
                <QuesListItem/>
            </ul>
        </div>
    );
}
export default QuesList;