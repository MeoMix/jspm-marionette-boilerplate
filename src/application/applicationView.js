import { LayoutView } from 'marionette';
import styles from './application.css!';
import template from './application.hbs!';

export default LayoutView.extend({
  el: 'main',
  template,
  initialize() {
    // Decorate in initialize because 'el' exists on the page already.
    this.$el.addClass(styles.application);
  }
});