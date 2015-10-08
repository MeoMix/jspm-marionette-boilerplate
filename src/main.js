import './common/shim/handlebars.helpers.shim';
import './common/shim/backbone.marionette.region.shim';
import './common/shim/backbone.marionette.toJson.shim';
import './common/shim/backbone.marionette.view.shim';
import Application from './application/application';

const application = new Application();
application.start();