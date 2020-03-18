import React from 'react';
import { withRouter } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

const ResponseIndexItem = ({ response, currentUser, deleteResponse }) => {
  const month = response.date.split('').slice(5, 7).join('');
  let published_month;
  if (month === '01') {
    published_month = "Jan";
  } else if (month === '02') {
    published_month = "Feb";
  } else if (month === '03') {
    published_month = "Mar";
  } else if (month === '04') {
    published_month = "Apr";
  } else if (month === '05') {
    published_month = "May";
  } else if (month === '06') {
    published_month = "June";
  } else if (month === '07') {
    published_month = "July";
  } else if (month === '08') {
    published_month = "Aug";
  } else if (month === '9') {
    published_month = "Sept";
  } else if (month === '10') {
    published_month = "Oct";
  } else if (month === '11') {
    published_month = "Nov";
  } else if (month === '12') {
    published_month = "Dec";
  }; 

  const published_day = response.date.split('').slice(8, 10).join('');
  const deleteButton = (currentUser.id === response.user_id) ? (
    <button className="response-delete-button" onClick={() => deleteResponse(response.id)}>Delete this response</button>
      ) : (
        "" 
      ); 

  return (
    <div className="response-item-container">
        <div className="response-item">
          <Link to={`/users/${response.user_id}`}><p className="response-username">{response.username}</p></Link>
          <p className="response-date">{published_month} {published_day}</p>
        </div>
        <p className="response-body">{response.body}</p>
        <div className="response-delete">
          {deleteButton}
        </div>
    </div>
  );
};

export default withRouter(ResponseIndexItem);
