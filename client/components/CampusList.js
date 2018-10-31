import React from 'react';

const CampusList = (props) => {
  // your code here
  return (
		<ul>
			{props.campuses.map((campus) => {
				return <li key={campus.id}>{campus.name}</li>;
			})}
		</ul>
  )
};

export default CampusList;
