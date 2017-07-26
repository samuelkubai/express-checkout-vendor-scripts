import $ from 'jquery';
import Form from '../Libraries/FormManipulators';

class Button {
  /**
   * Render the mula button.
   *
   * @param configs
   * @param buttonIdentifier
   */
  render(configs, buttonIdentifier) {
    // Set up the pay with mula button.
    let payButton = $(buttonIdentifier);

    let styledPayButton = $('<a>')
    .attr('type', 'submit')
    .attr('id', 'submit')
    .attr('name', 'submit')
    .attr('class', 'btn submit btn-rounded pull-right')
    .appendTo(buttonIdentifier);

    $('<img>')
    .attr('src', 'http://localhost/checkoutButton/images/mula3.png')
    .attr('alt', 'Pay with mula')
    .appendTo(styledPayButton);

    // Add an onClick event listener to the pay with mula button.
    payButton.click(() => {
      configs.payment().then((response) => {
        console.log(response);
        Button._submitFormToExpressCheckout(response);
      });
    });
  }

  /**
   * Prepare the form to submit to the express checkout page.
   *
   * @param response
   * @private
   */
  static _submitFormToExpressCheckout(response) {
    let form = Form.createForm('mula-express-checkout-submission-form', 'http://localhost/checkout/', 'POST');

    form = Form.addFormElement(form, 'countryCode', response.COUNTRY_CODE, 'text');
    form = Form.addFormElement(form, 'accessKey', response.ACCESS_KEY, 'text');
    form = Form.addFormElement(form, 'params', response.PARAMS, 'text');

    Form.dynamicallySubmitForm(form);
  }
}

export default Button;
