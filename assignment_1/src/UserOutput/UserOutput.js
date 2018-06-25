import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className={"UserOutput"}>
      <p>This is the {props.username} paragraph.</p>
      <p>This is the second paragraph of the User Output component.</p>
    </div>
  );
};

export default UserOutput;