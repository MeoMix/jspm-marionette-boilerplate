import { LayoutView } from 'marionette';
import css from './application.css!';
import template from './application.hbs!';

export default LayoutView.extend({
  el: 'main',
  template,
  initialize() {
    this.el.classList.add(css.application);
  }
});