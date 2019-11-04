import React from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';

const postForm = (values) => {
  axios({
    method: 'post',
    url: 'https://api.us-sandbox.afterpay.com/v1/orders',
    config: {
      headers: {
        Authorization: 'Basic MzI6YWJjZGVmZ2g=', // MTAwMTAwMTgzOjU3NDA0MWZkNzc1ODhjNTNiNDQ5ZGFiYjM5NWExODg1OWRjYjJiYzg5YzdiMDNhMW NhY2VlZWI0OTdjNzU5NTE1MzU2MzIwZWYwZTUzYzE2N2IyMmYyZDBiYzMyNTg4ODVhODAwNzQ4OGE3 MDUwMWY5ZDgwYjc5NDQ1OWQwNzE1',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }
  })
    .then(resp => {
      console.log(resp);
    })
    .catch(err => {
      console.log(err);
    });
};


let AddressForm = props => {
  const { data, handleSubmit, pristine, reset, submitting } = props;




  return (

    <section>
      <h3>Please Enter a Billing Address</h3>
      <form onSubmit={handleSubmit(postForm)}>
        <fieldset>
          <label>Name</label>
          <Field name="name" component="input" type="text" value={data.shipping.name}/>
        </fieldset>

        <fieldset>
          <label>Address 1</label>
          <Field name="line1" component="input" type="text" placeholder="123 Main St." value={data.shipping.line1}/>
          <label>Address 2</label>
          <Field name="line2" component="input" type="text" placeholder="APT #42" value={data.shipping.line2}/>
          <label>Zipcode</label>
          <Field name="postcode" component="input" type="text" placeholder="90210" value={data.shipping.postcode}/>
        </fieldset>
        <button type="submit" disabled={pristine || submitting}>Continue</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </form>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  onSubmit: values =>
    dispatch(postForm(values)),
});

AddressForm = reduxForm({
  form: 'billing',
  fields: ['name'],
  onSubmit: values => postForm(values),
})(AddressForm);

export default connect(null, mapDispatchToProps)(AddressForm);
