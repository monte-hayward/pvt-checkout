import React from 'react';

const Start = (props) => {
  const { handleClick } = props;
  return (<button onClick={() => handleClick()}>Proceed to Checkout</button>);
};

export default Start;
