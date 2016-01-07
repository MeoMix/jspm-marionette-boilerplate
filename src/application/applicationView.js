import { LayoutView } from 'marionette';
import styles from './application.css!';
import template from './application.hbs!';
import HeaderView from 'header/headerView';

export default LayoutView.extend({
  el: 'main',
  template,
  regions: {
    header: 'header'
  },
  initialize() {
    // Decorate in initialize because 'el' exists on the page already.
    this.$el.addClass(styles.application);
  },
  onRender() {
    this.showChildView('header', new HeaderView());
  }
});