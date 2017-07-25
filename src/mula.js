import Button from 'components/Button';
import Request from 'components/Request';

class Mula {
  /**
   * Returns the button class.
   *
   * @returns {Button}
   */
  button() {
    return Button;
  }

  /**
   * Returns the request class.
   *
   * @returns {Request}
   */
  request() {
    return Request;
  }
}

window.mula = new Mula();
