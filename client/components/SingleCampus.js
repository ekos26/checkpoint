import React from 'react';
import SingleStudent from './SingleStudent';

const SingleCampus = (props) => {

  return (
    <div>
    <h2>{props.campus.name}</h2>
    
        { props.students.map((student) => {
        return (
          <li key={student.name}>
            <SingleStudent student={student} />
          </li>
    
        );
      })}

    </div>
  );
};

export default SingleCampus;
