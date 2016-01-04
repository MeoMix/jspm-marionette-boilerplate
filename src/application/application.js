// Load globals before initialization the application to ensure all dependencies utilize the globals.
// Shim helpful/expected functionality into third-party libraries.
import 'common/shim/handlebars.helpers.shim';
import 'common/shim/backbone.marionette.region.shim';
import 'common/shim/backbone.marionette.toJson.shim';
import 'common/shim/backbone.marionette.view.shim';
// Load global CSS reset to standardize CSS across browsers.
import 'common/css/reset.css!';
// Load core CSS which isn't specific to a given module.
import 'common/css/core.css!';
import { Application } from 'marionette';
import ApplicationView from './applicationView';

export default Application.extend({
  initialize() {
    const applicationView = new ApplicationView();
    applicationView.render();
  }
});