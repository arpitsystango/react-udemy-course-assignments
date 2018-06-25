import React from 'react';

const UserOutput = (props) => {
  return (
    <div>
      <p>This is the {props.username} paragraph.</p>
      <p>This is the second paragraph of the User Output component.</p>
    </div>
  );
};

export default UserOutput;