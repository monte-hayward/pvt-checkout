import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AddressForm = props => {
  const { data, handleSubmit, pristine, reset, submitting } = props;
  return (

    <section>
      <h3>Please Enter a Billing Address</h3>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Name</label><Field name="name" component="input" type="text" value={data.shipping.name}/>
        </fieldset>

        <fieldset>
          <label>Address 1</label>
          <Field name="line1" component="input" type="text" placeholder="123 Main St." value={data.shipping.line1}/>
          <label>Address 2</label>
          <Field name="line2" component="input" type="text" placeholder="APT #42" value={data.shipping.line2}/>
          <label>Zipcode</label>
          <Field name="postcode" component="input" type="text" placeholder="90210" value={data.shipping.postcode}/>
        </fieldset>
        <button type="submit" disabled={pristine || submitting} onClick={reset}>Continue</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </form>
    </section>
  );
};


export default reduxForm({
  form: 'billing'
})(AddressForm);
