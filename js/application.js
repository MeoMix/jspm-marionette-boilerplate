import styles from '../css/component.css!';
import {Application} from 'marionette';
//console.log('styles:', styles);

export default Application.extend({
  initialize: function() {
    this.on('start', this._onStart);
  },

  _onStart: function() {
    console.log('started');
  }
});