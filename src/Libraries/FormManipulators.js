import $ from 'jquery';

class FormManipulators {
  /**
   * Creates a new form
   *
   * @param id
   * @param url
   * @param method
   * @returns {jQuery|HTMLElement}
   */
  static createForm(id = 'dynamicallyCreatedForm', url = '/', method = 'POST') {
    let form = $('<form>');

    $(form).attr('action', url);
    $(form).attr('method', 'POST');
    $(form).attr('id', id);
    $(form).css('display', 'none');

    return form;
  }

  /**
   * Add an element to a form.
   *
   * @param form
   * @param name
   * @param value
   * @param type
   * @returns {*}
   */
  static addFormElement(form, name, value, type = 'text') {
    $(form).append(
      $('<input>')
      .attr('type', 'hidden')
      .attr('name', name)
      .val(value)
    );

    return form;
  }

  /**
   * Dynamically submit the form.
   *
   * @param form
   */
  static dynamicallySubmitForm(form) {
    form.appendTo(document.body);

    form.submit();
  }
}

export default FormManipulators;
