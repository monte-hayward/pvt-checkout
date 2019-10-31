import React from 'react';
import mock from './mock-data';
import AddressForm from "./form-address";
import './form.css';

class Checkout extends React.PureComponent {

  constructor(props){
    super(props);
    this.state = Object.assign({
      addressDone: false,
    }, mock);
  }

  render() {
    const items = this.state.items.map((item) => (
      <tr key={item.sku}><td>{item.quantity}</td><td>{item.name}</td><td>{item.price.amount}</td></tr>
    ));
    const discounts = this.state.discounts.map((item) => (
      <tr key={item.displayName}><td/><td>{item.displayName}</td><td>-{item.amount.amount} {item.amount.currency}</td></tr>
    ));
    const st = this.state;
    return (
      <div>
        <h2>Checkout</h2>
        {! st.addressDone && <AddressForm data={st} /> }

        <section>
          <table style={{textAlign: 'left'}}>
            <tbody>
              <tr><th>Items</th></tr>
              {items}
              <tr><th>Tax</th><td/><td>{this.state.taxAmount.amount} {this.state.totalAmount.currency}</td></tr>

              <tr><td/><td/><td/></tr>

              <tr><th>Discounts</th></tr>
              {discounts}
              <tr><th>Shipping</th><td/><td>{this.state.shippingAmount.amount} {this.state.shippingAmount.currency}</td></tr>
              <tr><th>Total</th><td/><td>{this.state.totalAmount.amount} {this.state.totalAmount.currency}</td></tr>
            </tbody>
          </table>
        </section>

      </div>
    );
  }
}

export default Checkout;
