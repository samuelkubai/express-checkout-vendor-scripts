import Button from 'components/Button';
import Request from 'components/Request';

class Mula {
  /**
   * Returns the button class.
   *
   * @returns {Button}
   */
  static button() {
    return Button;
  }

  /**
   * Returns the request class.
   *
   * @returns {Request}
   */
  static request() {
    return Request;
  }
}

window.mula = Mula;
