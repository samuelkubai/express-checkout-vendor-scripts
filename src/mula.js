import Button from 'components/Button';
import Request from 'components/Request';

class Mula {
  /**
   * mula constructor.
   */
  constructor() {
    this.button = Button;
    this.request = Request;
  }
}

window.mula = new Mula();
