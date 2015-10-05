import { Application } from 'marionette';
import ApplicationView from './applicationView';

export default Application.extend({
  initialize() {
    const applicationView = new ApplicationView();
    applicationView.render();
  }
});