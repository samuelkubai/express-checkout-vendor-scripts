import Button from 'components/Button';
import Request from 'components/Request';

/**
 * Initialize the mula object with the various attributes.
 *
 * @type {{button: Button, request: Request}}
 */
window.Mula = class Mula {
  static button() {
    return new Button();
  }

  static request() {
    return Request;
  }
};
