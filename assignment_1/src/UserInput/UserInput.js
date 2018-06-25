import React from 'react';

const UserInput = (props) => {
  const style = {
    marginBottom: '50px',
    padding: '15px'
  };
  return (
    <input style={style} type="text" onChange={props.onNameChange} value={props.username} />
  );
};

export default UserInput;