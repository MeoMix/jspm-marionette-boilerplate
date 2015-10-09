import { LayoutView } from 'marionette';
import './application.css!';
import template from './application.hbs!';

export default LayoutView.extend({
  el: 'main',
  template,
  initialize() {
  }
});