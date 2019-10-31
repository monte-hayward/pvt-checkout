import React from 'react';

const Start = (props) => {
  const { handleClick } = props;
  console.log(handleClick);
  return (<button onClick={() => handleClick()}>Proceed to Checkout</button>);
};

export default Start;
