import React from 'react';
import Start from '../components/start';
import Checkout from '../components/checkout';

class Shop extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { checkoutOpen: false };

  }

  // handleClick() {
  //   this.setState({ checkoutOpen: !!this.state.checkoutOpen });
  // }
  render() {

    return (
      <div>
        {this.state.checkoutOpen !== true &&
          <Start handleClick={() => {
            this.setState({ checkoutOpen: true })
          }}/>
        }
        <p>{this.state.checkoutOpen}</p>
        {this.state.checkoutOpen === true &&
        <Checkout/>
        }
      </div>
    );
  }
}

export default Shop;
