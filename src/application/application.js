// Load globals before initialization the application to ensure all dependencies utilize the globals.
// Shim helpful/expected functionality into third-party libraries.
import 'common/shim/handlebars.helpers.shim.js';
import 'common/shim/marionette.region.shim.js';
import 'common/shim/marionette.toJson.shim.js';
import 'common/shim/marionette.view.shim.js';
// Load core CSS which isn't specific to a given module.
import 'common/css/core.css';
import { Application } from 'marionette';
import ApplicationView from './applicationView.js';

export default Application.extend({
  initialize() {
    const applicationView = new ApplicationView();
    applicationView.render();
  }
});