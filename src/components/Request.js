import $ from 'jquery';

class Request {
  /**
   * Make a HTTP post call.
   *
   * @param url
   * @param data
   */
  static post(url, data) {
    return $.post(url, data);
  }
}

export default Request;
