import { LayoutView } from 'marionette';
import template from './header.hbs!';
import styles from './header.css!';

export default LayoutView.extend({
  className: styles.header,
  template
});